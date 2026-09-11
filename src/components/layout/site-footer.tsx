import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface-subtle)]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="brand-mark" aria-hidden="true">
                BA
              </span>
              <span className="font-semibold">Bilal Ahmed</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
              Full-Stack Developer & SaaS Builder focused on modern web platforms, AI-powered
              products, automation, and business systems.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {site.githubUrl && (
                <SocialLink href={site.githubUrl} label="GitHub" external>
                  <GithubIcon />
                </SocialLink>
              )}

              {site.linkedinUrl && (
                <SocialLink href={site.linkedinUrl} label="LinkedIn" external>
                  <LinkedinIcon />
                </SocialLink>
              )}

              {site.email && (
                <SocialLink href={`mailto:${site.email}`} label="Email">
                  <Mail size={17} />
                </SocialLink>
              )}
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Navigation</h2>

            <div className="mt-4 grid gap-3">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="footer-link">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Work With Me</h2>

            <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
              Have a SaaS, AI, automation, or full-stack project in mind?
            </p>

            <Link href="/contact" className="footer-cta mt-5 inline-flex">
              Start a Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bilal Ahmed. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="footer-link">
              Privacy
            </Link>

            <Link href="/terms" className="footer-link">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
  external = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="icon-button"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.861-2.782.605-3.369-1.187-3.369-1.187-.455-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.636-1.338-2.221-.253-4.556-1.111-4.556-4.943 0-1.092.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.591 1.028 2.683 0 3.841-2.339 4.687-4.566 4.935.359.31.679.921.679 1.856 0 1.339-.012 2.419-.012 2.748 0 .268.18.58.688.481A10.002 10.002 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M5.5 3.5A2.5 2.5 0 1 0 5.5 8a2.5 2.5 0 0 0 0-4.5ZM3.25 9.75h4.5V21h-4.5V9.75ZM10.25 9.75h4.32v1.54h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V21h-4.5v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41V21h-4.5V9.75Z" />
    </svg>
  );
}
