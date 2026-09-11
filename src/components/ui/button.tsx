import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({ children, className, variant = "solid", href, onClick, size = "md" }: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
    size === "sm" && "min-h-9 px-3.5 text-sm",
    size === "md" && "min-h-10 px-4 text-sm",
    size === "lg" && "min-h-12 px-5 text-sm sm:text-base",
    variant === "solid" && "border-transparent bg-[var(--foreground)] text-[var(--background)] hover:-translate-y-px hover:opacity-90",
    variant === "outline" && "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--surface-subtle)]",
    variant === "ghost" && "border-transparent bg-transparent text-[var(--muted-strong)] hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)]",
    className,
  );
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type="button" className={classes} onClick={onClick}>{children}</button>;
}
