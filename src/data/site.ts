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

export const services = [
  { title: "Full-Stack Development", text: "Production-ready web applications with modern React, Next.js, TypeScript, APIs, and databases." },
  { title: "SaaS Development", text: "Business-focused SaaS foundations, dashboards, multi-tenant patterns, roles, and scalable architecture." },
  { title: "AI Integration", text: "Practical AI features that improve workflows, content operations, search, analysis, and automation." },
  { title: "Business Automation", text: "Connect business processes, APIs, data, and AI into reliable automated workflows." },
  { title: "API Development", text: "Clean REST APIs, integrations, validation, authentication, and backend service design." },
  { title: "Dashboard Development", text: "Responsive operational dashboards designed around real business workflows and decision making." },
];

export const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase",
  "Prisma", "Tailwind CSS", "REST APIs", "AI APIs", "Git", "Vercel",
];

export const projects = [
  {
    slug: "ksts",
    name: "KSTS",
    type: "Booking & Marketplace",
    description: "A multi-company bus booking and operations platform designed around shared seat inventory, offices, schedules, and role-based access.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
  },
  {
    slug: "autoseo",
    name: "AutoSEO",
    type: "AI SaaS",
    description: "An AI-powered SEO and marketing automation platform focused on content workflows, technical SEO, analysis, and repeatable operations.",
    tags: ["Next.js", "AI", "SEO", "Automation", "SaaS"],
  },
  {
    slug: "uaios",
    name: "UAIOS",
    type: "Business OS",
    description: "A Universal AI Business OS foundation focused on business modules, permissions, data architecture, and extensible AI-assisted workflows.",
    tags: ["SaaS", "AI", "Architecture", "PostgreSQL", "Automation"],
  },
];

export const developmentProcess = [
  ["01", "Discover", "Understand the business, users, goals, constraints, and success criteria."],
  ["02", "Plan", "Turn requirements into a clear scope, information architecture, and implementation plan."],
  ["03", "Architect", "Choose the right application, database, API, security, and scalability patterns."],
  ["04", "Build", "Develop the product in focused, testable increments with reusable components."],
  ["05", "Test", "Verify functionality, responsive behavior, accessibility, edge cases, and performance."],
  ["06", "Deploy", "Prepare production configuration, deployment, environment variables, and monitoring."],
  ["07", "Improve", "Iterate based on real usage, feedback, analytics, and evolving business needs."],
] as const;
