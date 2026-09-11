import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  Lightbulb,
  Target,
} from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { StructuredData } from "@/components/seo/structured-data";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: study.title,
          description: study.summary,
          url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/projects/${study.slug}`,
          creator: { "@type": "Person", name: "Bilal Ahmed" },
          keywords: study.technologies.join(", "),
        }}
      />
      <section className="relative overflow-hidden border-b bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: study.title, href: `/projects/${study.slug}` },
            ]}
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to Projects
          </Link>
          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {study.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">{study.title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              {study.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-background/80 px-3 py-1.5 text-xs font-semibold backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <Block icon={<Target className="size-5" />} title="Overview">
            <p className="leading-7 text-muted-foreground">{study.overview}</p>
          </Block>
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-sm font-semibold text-muted-foreground">Current Status</p>
            <p className="mt-2 text-xl font-bold">{study.status}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ListBlock
            icon={<Lightbulb className="size-5" />}
            title="The Problem"
            items={study.problem}
          />
          <ListBlock
            icon={<CheckCircle2 className="size-5" />}
            title="The Solution"
            items={study.solution}
          />
        </div>

        <div className="mt-6 rounded-2xl border bg-card p-7 sm:p-9">
          <BlockHeader icon={<Layers3 className="size-5" />} title="Architecture & Engineering" />
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {study.architecture.map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-background p-5 text-sm leading-6 text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ListBlock
            icon={<Code2 className="size-5" />}
            title="Technologies"
            items={study.technologies}
            chips
          />
          <ListBlock
            icon={<CheckCircle2 className="size-5" />}
            title="Key Features"
            items={study.features}
          />
        </div>

        <div className="mt-6 rounded-2xl border bg-card p-7 sm:p-9">
          <BlockHeader icon={<Lightbulb className="size-5" />} title="Challenges & Decisions" />
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {study.challenges.map((item) => (
              <li
                key={item}
                className="rounded-xl border p-5 text-sm leading-6 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {study.roadmap && (
          <div className="mt-6 rounded-2xl border border-dashed bg-muted/30 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Roadmap — Not Current Capabilities
            </p>
            <h2 className="mt-2 text-2xl font-bold">Potential next stages</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {study.roadmap.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border bg-background p-4 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/projects" className="text-sm font-semibold">
            ← All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
          >
            Discuss a Similar Project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-card p-7 sm:p-9">
      <BlockHeader icon={icon} title={title} />
      <div className="mt-5">{children}</div>
    </div>
  );
}

function BlockHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function ListBlock({
  icon,
  title,
  items,
  chips = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  chips?: boolean;
}) {
  return (
    <div className="rounded-2xl border bg-card p-7 sm:p-9">
      <BlockHeader icon={icon} title={title} />
      <ul className={chips ? "mt-6 flex flex-wrap gap-2" : "mt-6 space-y-4"}>
        {items.map((item) =>
          chips ? (
            <li
              key={item}
              className="rounded-full border bg-background px-3 py-1.5 text-xs font-semibold"
            >
              {item}
            </li>
          ) : (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" /> {item}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
