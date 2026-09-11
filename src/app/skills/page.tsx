import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Next.js, React, TypeScript & SaaS",
  description:
    "Bilal Ahmed’s technical skills across frontend, backend, databases, SaaS architecture, AI, integrations, and modern web development.",
  alternates: { canonical: "/skills" },
  openGraph: { images: ["/skills/opengraph-image"] },
};

const groups: ReadonlyArray<readonly [string, readonly string[]]> = [
  [
    "Frontend",
    ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  ],
  [
    "Backend",
    [
      "Node.js",
      "REST APIs",
      "Server Actions",
      "Validation",
      "Business Logic",
      "Authentication patterns",
    ],
  ],
  [
    "Database",
    ["PostgreSQL", "Supabase", "Prisma", "Data modeling", "Repositories", "Relational design"],
  ],
  [
    "SaaS & Architecture",
    [
      "Multi-tenant patterns",
      "RBAC",
      "Modular monoliths",
      "Domain boundaries",
      "Scalable foundations",
      "Audit architecture",
    ],
  ],
  [
    "AI",
    [
      "AI API integration",
      "Prompt-driven workflows",
      "AI-assisted content",
      "Analysis workflows",
      "Automation concepts",
      "Human-in-the-loop design",
    ],
  ],
  [
    "Integrations & DevOps",
    [
      "REST integrations",
      "OAuth concepts",
      "Git/GitHub",
      "Vercel",
      "Environment configuration",
      "Production checklists",
    ],
  ],
];

export default function SkillsPage() {
  return (
    <main id="main-content">
      <section className="border-b bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Skills</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
            A modern stack for building serious web products.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            No artificial proficiency percentages. These are the technologies and engineering areas
            I use across my current product work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(([title, skills]) => (
            <article key={title} className="rounded-2xl border bg-card p-7">
              <h2 className="text-xl font-bold">{title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {(skills as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border bg-background px-3 py-1.5 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Need a specific stack or integration?</h2>
        <p className="mt-4 text-muted-foreground">
          Share your requirements and we can evaluate the right technical approach.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Talk About the Project <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}
