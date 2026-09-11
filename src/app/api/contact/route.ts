import { NextResponse } from "next/server";

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

    // Delivery intentionally remains disabled until a real transactional email provider is configured.

    if (!process.env.CONTACT_TO_EMAIL) {
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

    // Provider adapter boundary: wire the configured provider here before production launch.

    return NextResponse.json(
      { error: "Email delivery provider is not configured." },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch {
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
