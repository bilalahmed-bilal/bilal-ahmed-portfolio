import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyPage } from "@/components/projects/case-study";

export function generateMetadata(): Metadata {
  const study = caseStudies.find((item) => item.slug === "uaios");
  return {
    title: "UAIOS Case Study | Universal AI Business OS",
    description: "UAIOS is an architecture-led Universal AI Business OS foundation focused on modular business systems, permissions, structured data, and AI-assisted workflows.",
    alternates: { canonical: "/projects/uaios" },
    openGraph: { images: ["/projects/uaios/opengraph-image"], title: "UAIOS Case Study | Universal AI Business OS", description: "UAIOS is an architecture-led Universal AI Business OS foundation focused on modular business systems, permissions, structured data, and AI-assisted workflows.", url: "/projects/uaios", type: "article" },
  };
}

export default function Page() {
  const study = caseStudies.find((item) => item.slug === "uaios");
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
