import Link from "next/link";
import { ArrowRight, Bot, Code2, Database, LayoutDashboard, Plug, Search, Settings2, Workflow } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Development & SaaS Services",
  description: "Full-stack development, SaaS, AI integration, automation, APIs, dashboards, databases, and technical SEO services.",
  alternates: { canonical: "/services" },
  openGraph: { images: ["/services/opengraph-image"] },
};

const services: ReadonlyArray<readonly [string, string, typeof Code2]> = [
  ["Full-Stack Development", "Modern responsive web applications with Next.js, React, TypeScript, APIs, and PostgreSQL.", Code2],
  ["SaaS Development", "Product foundations with organizations, roles, permissions, workflows, and scalable domain structure.", Settings2],
  ["AI Integration", "AI-assisted features embedded into useful product workflows instead of isolated demos.", Bot],
  ["Business Automation", "Automate repetitive operations by connecting systems, data, APIs, and AI.", Workflow],
  ["API Development", "Structured REST APIs, validation, integration boundaries, and backend business logic.", Plug],
  ["Dashboard Development", "Operational dashboards that make business data and workflows easier to manage.", LayoutDashboard],
  ["Database Architecture", "PostgreSQL schemas and data-access patterns designed for clarity and maintainability.", Database],
  ["Technical SEO", "Technical SEO foundations, structured metadata, crawlability, and performance-oriented improvements.", Search],
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="border-b bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Services</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
            Build the product, not just the interface.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Full-stack engineering and product-focused technical work for SaaS, AI, automation, booking, and business systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map(([title, text, Icon]) => (
            <article key={title} className="interactive-lift rounded-2xl border bg-card p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></div>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">Not sure which service you need?</h2>
          <p className="mt-4 text-muted-foreground">Send the business context. We can define the technical scope together.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">
            Discuss Your Project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
