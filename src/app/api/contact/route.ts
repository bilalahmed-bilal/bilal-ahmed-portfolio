import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_BODY_BYTES = 12_000;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const buckets = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const realIp = request.headers.get("x-real-ip")?.trim();

  if (realIp) {
    return realIp;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const firstIp = forwardedFor
      .split(",")
      .map((value) => value.trim())
      .find(Boolean);

    if (firstIp) {
      return firstIp;
    }
  }

  return "unknown";
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin")?.trim();

  // Non-browser/server-to-server clients may not send Origin.
  // The endpoint remains usable for those requests.
  if (!origin) {
    return true;
  }

  const requestOrigin = new URL(request.url).origin;

  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    : null;

  return origin === requestOrigin || origin === configuredOrigin;
}

function rateLimited(key: string) {
  const now = Date.now();

  for (const [bucketKey, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(bucketKey);
    }
  }

  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    return false;
  }

  current.count += 1;

  return current.count > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (
      request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json"
    ) {
      return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
    }

    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        { error: "Invalid request origin." },
        {
          status: 403,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const contentLength = Number(request.headers.get("content-length") || 0);

    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }

    if (rateLimited(getClientKey(request))) {
      return NextResponse.json(
        { error: "Too many enquiries. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": "900",
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }

    if (!emailPattern.test(email) || email.length > 200) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (projectType.length > 100 || budget.length > 100) {
      return NextResponse.json({ error: "Invalid project details." }, { status: 400 });
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        {
          error: "Please provide a message between 10 and 5000 characters.",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !recipient) {
      return NextResponse.json(
        {
          error:
            "The enquiry form is not connected to email delivery yet. Please use the email or profile links on this page.",
        },
        {
          status: 503,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType || "Not specified");
    const safeBudget = escapeHtml(budget || "Not specified");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from: "Bilal Ahmed <hello@bilalahmeddev.online>",
      to: [recipient],
      replyTo: email,
      subject: "New Portfolio Project Enquiry",
      html: `
        <h2>New Portfolio Project Enquiry</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Project Type:</strong> ${safeProjectType}</p>
        <p><strong>Budget:</strong> ${safeBudget}</p>

        <h3>Project Details</h3>
        <p>${safeMessage}</p>

        <hr />

        <p>
          Submitted via
          <a href="https://bilalahmeddev.online/contact">
            Bilal Ahmed Portfolio
          </a>
        </p>
      `,
      text: [
        "New Portfolio Project Enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Project Details:",
        message,
        "",
        "Submitted via https://bilalahmeddev.online/contact",
      ].join("\n"),
      headers: {
        "X-Entity-Ref-ID": crypto.randomUUID(),
      },
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry right now." },
        {
          status: 502,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        id: data?.id,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Invalid request." },
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
