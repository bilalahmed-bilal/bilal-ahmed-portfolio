import { BackToTop } from "@/components/ui/back-to-top";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      {children}
      <BackToTop />
    </>
  );
}
