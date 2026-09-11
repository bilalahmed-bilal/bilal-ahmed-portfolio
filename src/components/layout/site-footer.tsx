import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

const links = [
  ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"],
  ["Skills", "/skills"], ["Process", "/process"], ["Contact", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface-subtle)]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="brand-mark" aria-hidden="true">BA</span><span className="font-semibold">Bilal Ahmed</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">Full-Stack Developer & SaaS Builder focused on modern web platforms, AI-powered products, automation, and business systems.</p>
            <div className="mt-6 flex items-center gap-2">
              {site.githubUrl && (
                <SocialLink href={site.githubUrl} label="GitHub">
                  <GithubIcon />
                </SocialLink>
              )}
              {site.linkedinUrl && (
                <SocialLink href={site.linkedinUrl} label="LinkedIn">
                  <LinkedinIcon />
                </SocialLink>
              )}
              {site.email && <SocialLink href={`mailto:${site.email}`} label="Email"><Mail size={17} /></SocialLink>}
            </div>
          </div>
          <div><h2 className="footer-heading">Navigation</h2><div className="mt-4 grid gap-3">{links.map(([label, href]) => <Link key={href} href={href} className="footer-link">{label}</Link>)}</div></div>
          <div><h2 className="footer-heading">Work With Me</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">Have a SaaS, AI, automation, or full-stack project in mind?</p><Link href="/contact" className="footer-cta mt-5 inline-flex">Start a Project <ArrowUpRight size={16} /></Link></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bilal Ahmed. All rights reserved.</p>
          <div className="flex gap-4"><Link href="/privacy" className="footer-link">Privacy</Link><Link href="/terms" className="footer-link">Terms</Link></div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} aria-label={label} className="icon-button" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a>;
}


function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.04 3.5A2.5 2.5 0 1 1 5.03 8.5a2.5 2.5 0 0 1 .01-5Zm-2.15 6.75h4.3V21h-4.3V10.25ZM9.75 10.25h4.12v1.47h.06c.57-1.08 1.98-2.21 4.08-2.21 4.36 0 5.17 2.87 5.17 6.6V21h-4.3v-4.33c0-1.03-.02-2.36-1.43-2.36-1.43 0-1.65 1.12-1.65 2.28V21h-4.3V10.25Z" />
    </svg>
  );
}
