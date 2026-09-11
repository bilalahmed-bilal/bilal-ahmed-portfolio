import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyPage } from "@/components/projects/case-study";

export function generateMetadata(): Metadata {
  const study = caseStudies.find((item) => item.slug === "ksts");
  return {
    title: "KSTS Case Study | Multi-company Bus Booking Platform",
    description: "KSTS is a multi-company bus booking and operations platform built around shared inventory, multi-office workflows, trips, passengers, and role-based access.",
    alternates: { canonical: "/projects/ksts" },
    openGraph: { images: ["/projects/ksts/opengraph-image"], title: "KSTS Case Study | Multi-company Bus Booking Platform", description: "KSTS is a multi-company bus booking and operations platform built around shared inventory, multi-office workflows, trips, passengers, and role-based access.", url: "/projects/ksts", type: "article" },
  };
}

export default function Page() {
  const study = caseStudies.find((item) => item.slug === "ksts");
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
