import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "This portfolio presents Bilal Ahmed’s work, capabilities, and project information for informational and professional purposes. Project descriptions di",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsofPage() {
  return <main id="main-content" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Terms of Use</h1><p className="mt-8 text-base leading-8 text-muted-foreground">This portfolio presents Bilal Ahmed’s work, capabilities, and project information for informational and professional purposes. Project descriptions distinguish current capabilities from planned roadmap items. No client relationship, quotation, warranty, or service agreement is created merely by browsing this website or submitting an enquiry. Any engagement is subject to a separate agreed scope and terms.</p></main>;
}
