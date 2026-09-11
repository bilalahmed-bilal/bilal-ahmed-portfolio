import fs from "node:fs";
import path from "node:path";

const root = new URL("../", import.meta.url).pathname;
const checks = [
  ["layout metadata", "src/app/layout.tsx"],
  ["homepage metadata", "src/app/page.tsx"],
  ["robots", "src/app/robots.ts"],
  ["sitemap", "src/app/sitemap.ts"],
  ["OG image", "src/app/opengraph-image.tsx"],
  ["manifest", "src/app/manifest.ts"],
  ["breadcrumbs", "src/components/seo/breadcrumbs.tsx"],
];
let failed = false;
for (const [label, file] of checks) {
  const ok = fs.existsSync(path.join(root, file));
  console.log(`${ok ? "PASS" : "FAIL"} ${label}: ${file}`);
  failed ||= !ok;
}
const layout = fs.readFileSync(path.join(root, "src/app/layout.tsx"), "utf8");
const metadataImports = (layout.match(/import type \{ Metadata/g) ?? []).length;
if (metadataImports !== 1) { console.error(`FAIL duplicate Metadata imports: ${metadataImports}`); failed = true; } else console.log("PASS single Metadata import");
const requiredCanonicalRoutes = ["/", "/about", "/services", "/projects", "/skills", "/process", "/contact", "/projects/ksts", "/projects/autoseo", "/projects/uaios"];
for (const route of requiredCanonicalRoutes) {
  const file = route === "/" ? "src/app/page.tsx" : `src/app${route}/page.tsx`;
  const content = fs.readFileSync(path.join(root, file), "utf8");
  const ok = content.includes(`canonical: "${route}"`);
  console.log(`${ok ? "PASS" : "FAIL"} canonical ${route}`);
  failed ||= !ok;
}
process.exitCode = failed ? 1 : 0;
