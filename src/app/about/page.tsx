import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Database, ShieldCheck } from "lucide-react";
import { StructuredData } from "@/components/seo/structured-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Bilal Ahmed",
  description:
    "About Bilal Ahmed, a Full-Stack Developer and SaaS Builder focused on modern web products, AI, automation, and business systems.",
  alternates: { canonical: "/about" },
  openGraph: { images: ["/about/opengraph-image"] },
};

const capabilities: ReadonlyArray<readonly [string, string, typeof Code2]> = [
  [
    "Product Engineering",
    "Turn business requirements into structured, maintainable web applications.",
    Code2,
  ],
  [
    "SaaS Architecture",
    "Design foundations for roles, organizations, modules, workflows, and future scale.",
    Database,
  ],
  [
    "AI Integration",
    "Use AI where it creates practical value inside real product workflows.",
    BrainCircuit,
  ],
  [
    "Engineering Quality",
    "Prioritize security, accessibility, maintainability, and predictable behavior.",
    ShieldCheck,
  ],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/#person`,
            "@type": "Person",
            name: "Bilal Ahmed",
            jobTitle: "Full-Stack Developer & SaaS Builder",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/`,
          },
        }}
      />
      <section className="border-b bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">About</p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
            I build software around the way businesses actually work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I’m Bilal Ahmed, a Full-Stack Developer & SaaS Builder focused on modern web
            applications, AI-assisted products, automation, booking platforms, APIs, and operational
            dashboards.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <article className="rounded-2xl border bg-card p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Profile</p>
            <h2 className="mt-3 text-3xl font-bold">
              From idea to architecture to working product.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                I approach development as product engineering: understand the workflow first, then
                choose the technology that makes the solution reliable and maintainable.
              </p>
              <p>
                My current work spans full-stack applications, SaaS foundations, business
                automation, AI integrations, booking systems, data models, APIs, and responsive
                interfaces.
              </p>
              <p>
                I prefer clear architecture, reusable components, structured data, and incremental
                delivery over unnecessary complexity.
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border bg-muted/40 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Specialization
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Next.js & React applications",
                "TypeScript full-stack systems",
                "SaaS & business platforms",
                "AI-powered workflows",
                "PostgreSQL data architecture",
                "API & third-party integrations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border bg-background p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Core Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A practical engineering mindset.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {capabilities.map(([title, text, Icon]) => (
              <article key={title} className="rounded-2xl border bg-background p-6">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black sm:text-4xl">
          Have a product that needs a technical partner?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Let’s discuss the problem, the desired outcome, and the simplest reliable path to build
          it.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Start a Conversation <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}
