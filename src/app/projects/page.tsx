import { ProjectFilter } from "@/components/projects/project-filter";
import { StructuredData } from "@/components/seo/structured-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | SaaS, AI & Business Systems",
  description:
    "Explore Bilal Ahmed’s selected SaaS, AI, booking, automation, and business-system projects and technical case studies.",
  alternates: { canonical: "/projects" },
  openGraph: { images: ["/projects/opengraph-image"] },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Bilal Ahmed Selected Projects",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "KSTS",
              url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/projects/ksts`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "AutoSEO",
              url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/projects/autoseo`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "UAIOS",
              url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/projects/uaios`,
            },
          ],
        }}
      />
      <section className="relative overflow-hidden border-b bg-grid">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Selected Work
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Products, platforms, and systems I&apos;m building.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore real project work across SaaS, AI, booking, automation, and business systems.
            Each project can grow into a detailed technical case study.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ProjectFilter />
      </section>
    </main>
  );
}
