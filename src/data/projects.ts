export type ProjectCategory = "SaaS" | "AI" | "Booking" | "Automation" | "Business Systems";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory[];
  type: string;
  description: string;
  status: "Active Development" | "Foundation" | "In Progress";
  tags: string[];
  highlights: string[];
};

export const projectCategories = [
  "All",
  "SaaS",
  "AI",
  "Booking",
  "Automation",
  "Business Systems",
] as const;

export const portfolioProjects: Project[] = [
  {
    slug: "ksts",
    name: "KSTS",
    category: ["Booking", "Business Systems", "SaaS"],
    type: "Multi-company Bus Booking Platform",
    description:
      "A booking and operations platform designed around shared seat inventory, offices, schedules, trips, passengers, and role-based access.",
    status: "Active Development",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Prisma"],
    highlights: [
      "Multi-office operations",
      "Real-time seat availability architecture",
      "Role-based workflows",
    ],
  },
  {
    slug: "autoseo",
    name: "AutoSEO",
    category: ["AI", "SaaS", "Automation"],
    type: "AI SEO & Marketing Automation",
    description:
      "An AI-powered SEO and marketing automation product focused on repeatable analysis, content workflows, technical SEO, and business operations.",
    status: "In Progress",
    tags: ["Next.js", "TypeScript", "AI APIs", "SEO", "Automation"],
    highlights: [
      "AI-assisted SEO workflows",
      "Technical SEO analysis",
      "Automation-oriented product design",
    ],
  },
  {
    slug: "uaios",
    name: "UAIOS",
    category: ["AI", "SaaS", "Business Systems", "Automation"],
    type: "Universal AI Business OS",
    description:
      "A modular business-system foundation designed for extensible modules, permissions, structured data, and AI-assisted workflows.",
    status: "Foundation",
    tags: ["SaaS", "AI", "PostgreSQL", "Architecture", "Automation"],
    highlights: [
      "Modular architecture",
      "Authorization foundation",
      "Extensible business workflows",
    ],
  },
];
