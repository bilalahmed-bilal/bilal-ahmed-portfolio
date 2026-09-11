import { Mail, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/data/site";
import { StructuredData } from "@/components/seo/structured-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bilal Ahmed | Hire a Full-Stack Developer",
  description:
    "Discuss your SaaS, AI, automation, booking platform, API, dashboard, or custom web development project with Bilal Ahmed.",
  alternates: { canonical: "/contact" },
  openGraph: { images: ["/contact/opengraph-image"] },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Bilal Ahmed",
          url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/contact`,
          mainEntity: {
            "@type": "Person",
            name: "Bilal Ahmed",
            jobTitle: "Full-Stack Developer & SaaS Builder",
          },
        }}
      />

      <section className="border-b bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>

          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Have a product, problem, or workflow to build?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Share the context and I&apos;ll help turn it into a practical technical plan.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.35fr] lg:px-8">
        <aside className="rounded-2xl border bg-card p-7 sm:p-8">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="size-5" />
          </div>

          <h2 className="mt-5 text-2xl font-bold">Let&apos;s talk</h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            For freelance opportunities, SaaS builds, AI integrations, automation, or technical
            product work.
          </p>

          <div className="mt-7 space-y-3">
            {site.email && (
              <a
                className="flex items-center justify-between rounded-xl border p-4 text-sm font-semibold hover:bg-muted"
                href={`mailto:${site.email}`}
              >
                Email <ExternalLink className="size-4" />
              </a>
            )}

            {site.upworkUrl && (
              <a
                className="flex items-center justify-between rounded-xl border p-4 text-sm font-semibold hover:bg-muted"
                href={site.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork <ExternalLink className="size-4" />
              </a>
            )}

            {site.githubUrl && (
              <a
                className="flex items-center justify-between rounded-xl border p-4 text-sm font-semibold hover:bg-muted"
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ExternalLink className="size-4" />
              </a>
            )}

            {site.linkedinUrl && (
              <a
                className="flex items-center justify-between rounded-xl border p-4 text-sm font-semibold hover:bg-muted"
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ExternalLink className="size-4" />
              </a>
            )}
          </div>

          <p className="mt-7 rounded-xl bg-muted/60 p-4 text-xs leading-5 text-muted-foreground">
            Profile and social URLs are placeholders until the real production links are supplied.
          </p>
        </aside>

        <ContactForm />
      </section>
    </main>
  );
}
