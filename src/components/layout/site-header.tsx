"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Process", "/process"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">BA</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Bilal Ahmed</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">Hire Me</Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav border-t border-[var(--border)] lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>Hire Me</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="icon-button" aria-hidden="true" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      className="icon-button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
