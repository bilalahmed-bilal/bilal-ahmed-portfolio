import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyPage } from "@/components/projects/case-study";

export function generateMetadata(): Metadata {
  const study = caseStudies.find((item) => item.slug === "autoseo");
  return {
    title: "AutoSEO Case Study | AI SEO & Marketing Automation",
    description: "AutoSEO is an AI-powered SEO and marketing automation product focused on technical SEO, analysis, content workflows, and repeatable operations.",
    alternates: { canonical: "/projects/autoseo" },
    openGraph: { images: ["/projects/autoseo/opengraph-image"], title: "AutoSEO Case Study | AI SEO & Marketing Automation", description: "AutoSEO is an AI-powered SEO and marketing automation product focused on technical SEO, analysis, content workflows, and repeatable operations.", url: "/projects/autoseo", type: "article" },
  };
}

export default function Page() {
  const study = caseStudies.find((item) => item.slug === "autoseo");
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
