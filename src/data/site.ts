import { Bot, Code2, Database, Layers3, Rocket, Workflow, type LucideIcon } from "lucide-react";
import { portfolioProjects } from "@/data/projects";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Bilal Ahmed",
  role: "Full-Stack Developer & SaaS Builder",
  intro:
    "I build modern SaaS platforms, AI-powered applications, business automation systems, and scalable web products.",
  availability: "Available for selected freelance projects",
  upworkUrl: process.env.NEXT_PUBLIC_UPWORK_URL ?? "",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

export type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    text: "Production-ready web applications with modern React, Next.js, TypeScript, APIs, and databases.",
    icon: Code2,
  },
  {
    title: "SaaS Development",
    text: "Business-focused SaaS foundations, dashboards, multi-tenant patterns, roles, and scalable architecture.",
    icon: Layers3,
  },
  {
    title: "AI Integration",
    text: "Practical AI features that improve workflows, content operations, search, analysis, and automation.",
    icon: Bot,
  },
  {
    title: "Business Automation",
    text: "Connect business processes, APIs, data, and AI into reliable automated workflows.",
    icon: Workflow,
  },
  {
    title: "API Development",
    text: "Clean REST APIs, integrations, validation, authentication, and backend service design.",
    icon: Database,
  },
  {
    title: "Dashboard Development",
    text: "Responsive operational dashboards designed around real business workflows and decision making.",
    icon: Rocket,
  },
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Tailwind CSS",
  "REST APIs",
  "AI APIs",
  "Git",
  "Vercel",
];

/**
 * Backward-compatible alias.
 * Canonical project data lives in src/data/projects.ts.
 */
export const projects = portfolioProjects;

export const developmentProcess = [
  ["01", "Discover", "Understand the business, users, goals, constraints, and success criteria."],
  [
    "02",
    "Plan",
    "Turn requirements into a clear scope, information architecture, and implementation plan.",
  ],
  [
    "03",
    "Architect",
    "Choose the right application, database, API, security, and scalability patterns.",
  ],
  ["04", "Build", "Develop the product in focused, testable increments with reusable components."],
  [
    "05",
    "Test",
    "Verify functionality, responsive behavior, accessibility, edge cases, and performance.",
  ],
  [
    "06",
    "Deploy",
    "Prepare production configuration, deployment, environment variables, and monitoring.",
  ],
  [
    "07",
    "Improve",
    "Iterate based on real usage, feedback, analytics, and evolving business needs.",
  ],
] as const;
