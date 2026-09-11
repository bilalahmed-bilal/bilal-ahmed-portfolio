"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioProjects, projectCategories, type ProjectCategory } from "@/data/projects";

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return portfolioProjects;
    return portfolioProjects.filter((project) =>
      project.category.includes(active as ProjectCategory),
    );
  }, [active]);

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Project categories"
      >
        {projectCategories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background hover:border-primary/40 hover:bg-muted",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/8] overflow-hidden border-b bg-grid">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-foreground/5" />
              <div className="absolute left-6 top-6 rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                {project.status}
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {project.type}
                </p>
                <h2 className="mt-1 text-4xl font-black tracking-tight">{project.name}</h2>
              </div>
            </div>

            <div className="p-7">
              <p className="leading-7 text-muted-foreground">{project.description}</p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {project.highlights.map((item) => (
                  <div key={item} className="flex gap-2 rounded-xl border p-3 text-xs leading-5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                View Case Study
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed p-12 text-center text-muted-foreground">
          No projects are currently assigned to this category.
        </div>
      )}
    </div>
  );
}
