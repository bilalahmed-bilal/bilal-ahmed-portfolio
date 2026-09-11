import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Process | From Idea to Production",
  description: "A structured development process covering discovery, architecture, development, testing, deployment, and continuous improvement.",
  alternates: { canonical: "/process" },
  openGraph: { images: ["/process/opengraph-image"] },
};

const steps = [
  ["01", "Discover", "Understand the business, users, goals, constraints, and success criteria."],
  ["02", "Plan", "Turn requirements into scope, information architecture, priorities, and implementation milestones."],
  ["03", "Architecture", "Design application boundaries, database models, permissions, APIs, and integration strategy."],
  ["04", "Development", "Build reusable UI and backend capabilities in focused, testable increments."],
  ["05", "Testing", "Check functionality, edge cases, responsive behavior, accessibility, and failure states."],
  ["06", "Deployment", "Prepare environment variables, production configuration, deployment, and monitoring."],
  ["07", "Improvement", "Iterate based on real usage, feedback, analytics, and changing business requirements."],
] as const;

const principles = ["Clear communication", "Business-first decisions", "Maintainable code", "Security by design", "Responsive UX", "Incremental delivery"];

export default function ProcessPage() {
  return (
    <main id="main-content">
      <section className="border-b bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Process</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
            A clear path from idea to production.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Good engineering starts with clarity. Each stage exists to reduce risk and keep technical work aligned with the business outcome.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {steps.map(([number, title, text]) => (
            <article key={number} className="grid gap-4 rounded-2xl border bg-card p-6 sm:grid-cols-[72px_190px_1fr] sm:items-center">
              <span className="text-2xl font-black text-primary">{number}</span>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center">Working principles</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border bg-background p-4 text-sm font-semibold">
                <CheckCircle2 className="size-4 text-primary" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Ready to define the first milestone?</h2>
        <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">
          Start a Conversation <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}
