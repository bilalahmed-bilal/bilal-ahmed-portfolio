import Link from "next/link";
import { StructuredData } from "./structured-data";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base.replace(/\/$/, "")}${item.href}`,
    })),
  };
  return (
    <>
      <StructuredData data={data} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? <span aria-current="page" className="font-medium text-foreground">{item.name}</span> : <Link href={item.href} className="hover:text-foreground">{item.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
