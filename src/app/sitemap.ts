import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/skills",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
];
const projects = ["/projects/ksts", "/projects/autoseo", "/projects/uaios"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  return [...routes, ...projects].map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route.startsWith("/projects") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/projects") ? 0.85 : 0.7,
  }));
}
