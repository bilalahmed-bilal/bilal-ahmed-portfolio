"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const fields = {
  projectType: [
    "SaaS / Web App",
    "AI Integration",
    "Automation",
    "Booking / Marketplace",
    "API / Backend",
    "Other",
  ],
  budget: ["Under $500", "$500 – $1,500", "$1,500 – $3,000", "$3,000+", "Not sure yet"],
};

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Unable to send your message.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center sm:p-12" role="status">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h2 className="mt-5 text-2xl font-bold">Enquiry sent</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          Thanks for reaching out. I&apos;ll review the project details and get back to you.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-7 rounded-xl border px-5 py-2.5 text-sm font-semibold hover:bg-muted"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Select label="Project Type" name="projectType" options={fields.projectType} />
        <Select label="Budget" name="budget" options={fields.budget} />
      </div>

      <label className="mt-5 block text-sm font-semibold" htmlFor="message">
        Project Details
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={7}
          placeholder="What are you building, what problem are you solving, and what would you like help with?"
          className="mt-2 w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </label>

      <label
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {state === "error" && (
        <p
          className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "loading" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        {state === "loading" ? "Sending..." : "Send Project Enquiry"}
      </button>

      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        Your information is used only to respond to your project enquiry. Email delivery must be
        configured before this form is used as a production contact channel.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-xl border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-sm font-semibold" htmlFor={name}>
      {label}
      <select
        name={name}
        defaultValue=""
        className="mt-2 h-11 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
