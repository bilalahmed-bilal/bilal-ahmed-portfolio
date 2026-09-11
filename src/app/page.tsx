import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-sections";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Full-Stack Developer & SaaS Builder",
  description:
    "Bilal Ahmed builds modern SaaS platforms, AI-powered applications, business automation systems, booking platforms, APIs, and dashboards.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bilal Ahmed | Full-Stack Developer & SaaS Builder",
    description: "Modern SaaS, AI, automation, booking, API, and business-system development.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Bilal Ahmed — Full-Stack Developer & SaaS Builder",
          description:
            "Bilal Ahmed builds modern SaaS platforms, AI-powered applications, business automation systems, booking platforms, APIs, and dashboards.",
          url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
          isPartOf: {
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/#website`,
          },
          about: {
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/#person`,
          },
        }}
      />
      <HomePage />
    </>
  );
}
