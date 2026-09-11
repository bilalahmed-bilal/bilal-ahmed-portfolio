import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bilal Ahmed — Full-Stack Developer & SaaS Builder",
    short_name: "Bilal Ahmed",
    description: "Portfolio of Bilal Ahmed, a Full-Stack Developer and SaaS Builder.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
