import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "This portfolio uses information you voluntarily submit through the project enquiry form only to respond to your enquiry. Do not submit passwords, paym",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <main id="main-content" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1><p className="mt-8 text-base leading-8 text-muted-foreground">This portfolio uses information you voluntarily submit through the project enquiry form only to respond to your enquiry. Do not submit passwords, payment information, or other sensitive information through the form. Contact delivery is not enabled until a production email provider is configured. Production privacy details should be updated when analytics, email services, or other third-party services are enabled.</p></main>;
}
