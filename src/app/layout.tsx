import { GoogleAnalytics } from "@next/third-parties/google";
import { StructuredData } from "@/components/seo/structured-data";
import { SiteShell } from "@/components/layout/site-shell";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bilal Ahmed — Full-Stack Developer & SaaS Builder",
    template: "%s | Bilal Ahmed",
  },
  description:
    "Bilal Ahmed builds modern SaaS platforms, AI-powered applications, business automation systems, booking platforms, APIs, and dashboards.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "SaaS Developer",
    "React Developer",
    "TypeScript Developer",
    "AI Integration",
    "Business Automation",
    "PostgreSQL",
  ],
  openGraph: {
    title: "Bilal Ahmed — Full-Stack Developer & SaaS Builder",
    description: "Modern SaaS, AI, automation, booking, API, and business-system development.",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image" }],
    siteName: "Bilal Ahmed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Ahmed — Full-Stack Developer & SaaS Builder",
    description: "Modern SaaS, AI, automation, booking, API, and business-system development.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>
          <StructuredData
            data={{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Bilal Ahmed",
                  jobTitle: "Full-Stack Developer & SaaS Builder",
                  url: siteUrl,
                  ...(process.env.NEXT_PUBLIC_GITHUB_URL ||
                  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                  process.env.NEXT_PUBLIC_UPWORK_URL
                    ? {
                        sameAs: [
                          process.env.NEXT_PUBLIC_GITHUB_URL,
                          process.env.NEXT_PUBLIC_LINKEDIN_URL,
                          process.env.NEXT_PUBLIC_UPWORK_URL,
                        ].filter(Boolean),
                      }
                    : {}),
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Bilal Ahmed",
                  publisher: {
                    "@id": `${siteUrl}/#person`,
                  },
                },
              ],
            }}
          />

          <ThemeProvider>
            <div className="portfolio-shell">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </ThemeProvider>
        </SiteShell>

        {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
      </body>
    </html>
  );
}
