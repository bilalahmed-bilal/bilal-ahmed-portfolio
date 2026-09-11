import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Code2, Database, Layers3, Rocket, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site, services, stack, developmentProcess } from "@/data/site";
import { portfolioProjects } from "@/data/projects";

export function HomePage() {
  return (
    <main>
      <Hero />
      <StackStrip />
      <Build />
      <FeaturedProjects />
      <AiAutomation />
      <Process />
      <WhyMe />
      <FinalCta />
    </main>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur">
            <span className="size-2 rounded-full bg-primary" />
            {site.availability}
          </div>
          <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
            <span className="block bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
              Full-Stack Developer & SaaS Builder
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {site.intro} I turn complex business requirements into clean, useful, scalable products.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5">
              Let&apos;s Build <ArrowRight className="size-4" />
            </Link>
            <Link href="/projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border bg-background px-6 font-semibold transition hover:bg-muted">
              View My Work
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            ["SaaS", "Business platforms"],
            ["AI", "Intelligent workflows"],
            ["Automation", "Connected operations"],
          ].map(([label, text]) => (
            <div key={label} className="rounded-2xl border bg-background/75 p-5 backdrop-blur">
              <p className="text-xl font-bold">{label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackStrip() {
  return (
    <section className="border-b">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-4 py-7 text-sm font-medium text-muted-foreground sm:px-6 lg:px-8">
        {stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function Build() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="What I Build" title="Products built around real business problems." text="From a booking operation to an AI-enabled SaaS workflow, I focus on useful systems rather than technology for its own sake." />
      <Reveal><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const icons = [Code2, Layers3, Bot, Workflow, Database, Rocket];
          const Icon = icons[i];
          return (
            <article key={service.title} className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
            </article>
          );
        })}
      </div></Reveal>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Selected Work" title="A portfolio backed by real product work." text="Three products demonstrate different sides of my engineering approach: marketplace operations, AI automation, and business-system architecture." />
        <Reveal><div className="grid gap-6 lg:grid-cols-3">
          {portfolioProjects.slice(0, 3).map((project) => (
            <article key={project.slug} className="flex flex-col rounded-2xl border bg-background p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{project.type}</span>
                <span className="text-sm text-muted-foreground">{project.name}</span>
              </div>
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-md border px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>)}
              </div>
              <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View Case Study <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function AiAutomation() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border bg-card p-7 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">AI & Automation</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">AI should improve the workflow, not complicate it.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              I use AI where it creates practical value: content operations, analysis, recommendations, workflow assistance, search, and business automation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["AI-powered workflows", "API integrations", "Data-driven dashboards", "Automation pipelines"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border p-4 text-sm font-medium">
                <CheckCircle2 className="size-4 shrink-0 text-primary" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Development Process" title="Structured delivery from idea to production." text="A clear process reduces surprises and keeps technical decisions aligned with the business goal." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {developmentProcess.map(([number, title, text]) => (
            <div key={number} className="rounded-2xl border bg-background p-5">
              <span className="text-sm font-bold text-primary">{number}</span>
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Why Work With Me" title="Engineering with business context." text="I care about the complete product: usability, architecture, data, integrations, maintainability, and the next stage of growth." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Business-first thinking", "Modern architecture", "Clean reusable UI", "Scalable foundations"].map((item) => (
          <div key={item} className="rounded-2xl border p-6 text-center font-semibold">{item}</div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Have a project?</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Let&apos;s turn the idea into a working product.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Tell me what you are building, what is not working, or what you want to automate.</p>
        <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground">
          Start a Conversation <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
