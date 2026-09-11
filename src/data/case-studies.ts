export type CaseStudy = {
  slug: "ksts" | "autoseo" | "uaios";
  eyebrow: string;
  title: string;
  summary: string;
  overview: string;
  problem: string[];
  solution: string[];
  architecture: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  status: string;
  highlights: string[];
  roadmap?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ksts",
    eyebrow: "Booking · Business Systems · SaaS",
    title: "KSTS — Multi-company Bus Booking Platform",
    summary:
      "A business-focused booking and operations platform designed around shared inventory, multi-office workflows, schedules, trips, passengers, and role-based access.",
    overview:
      "KSTS is being developed as a centralized platform for bus-ticket operations. The architecture is designed so authorized offices and sales channels work against the same booking inventory instead of maintaining disconnected seat data.",
    problem: [
      "Booking operations can become difficult to coordinate when different offices maintain separate availability information.",
      "Seat inventory needs to remain consistent when multiple users interact with the same trip.",
      "Different organizations and roles require different access boundaries and workflows.",
    ],
    solution: [
      "A centralized PostgreSQL-backed application with role-aware access and shared operational data.",
      "Trip and seat inventory concepts designed for concurrent booking workflows.",
      "A modular Next.js application structure so booking, fleet, routes, offices, agents, passengers, tickets, and audit capabilities can evolve independently.",
    ],
    architecture: [
      "Next.js application layer with server-side business logic and API/server-action boundaries.",
      "PostgreSQL data model for companies, offices, buses, seats, routes, trips, bookings, passengers, and audit records.",
      "Supabase Realtime planned/used as the real-time synchronization layer for seat availability.",
      "Prisma repository/data-access layer for structured database operations.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Tailwind CSS",
    ],
    features: [
      "Multi-office booking operations",
      "Bus and seat-layout management",
      "Routes and trip scheduling",
      "Seat selection, hold, confirmation, and cancellation workflows",
      "Role-based access",
      "Passenger and ticket records",
      "Agent and commission foundations",
      "Audit trail architecture",
    ],
    challenges: [
      "Designing booking flows that reduce the risk of conflicting seat state.",
      "Keeping the data model flexible enough for multiple bus companies and office workflows.",
      "Separating platform-level permissions from company-level operational access.",
    ],
    status: "Active development",
    highlights: [
      "Shared inventory architecture",
      "Multi-office workflows",
      "Role-aware data boundaries",
      "Real-time availability design",
    ],
  },
  {
    slug: "autoseo",
    eyebrow: "AI · SEO · Automation",
    title: "AutoSEO — AI SEO & Marketing Automation",
    summary:
      "An AI-powered SEO and marketing automation product focused on repeatable analysis, content workflows, technical SEO, and operational automation.",
    overview:
      "AutoSEO is being designed to reduce repetitive SEO work by combining structured analysis, AI-assisted workflows, and automation-oriented product flows in one web application.",
    problem: [
      "SEO work often involves repetitive audits, content decisions, analysis, and follow-up actions.",
      "Teams need structured information instead of isolated AI outputs.",
      "Automation should be connected to measurable workflows rather than simply generating text.",
    ],
    solution: [
      "A SaaS-style application that organizes SEO analysis and AI-assisted actions into repeatable workflows.",
      "A component and data structure that can expand as additional SEO modules and integrations are introduced.",
      "Separation between analysis, AI assistance, automation, and presentation layers.",
    ],
    architecture: [
      "Next.js and TypeScript frontend/application layer.",
      "Structured service boundaries for SEO analysis and AI-assisted processing.",
      "Extensible integration architecture for future external SEO/data providers.",
      "Automation-oriented flows designed to turn analysis into repeatable actions.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "AI APIs",
      "SEO tooling",
      "REST APIs",
      "Tailwind CSS",
    ],
    features: [
      "SEO analysis workflows",
      "Technical SEO checks",
      "AI-assisted content and optimization workflows",
      "Structured reporting concepts",
      "Automation-oriented operations",
      "Extensible integration foundation",
    ],
    challenges: [
      "Turning AI output into predictable product workflows.",
      "Keeping SEO logic structured and explainable rather than relying on opaque generation.",
      "Designing for future integrations without coupling the application to a single provider.",
    ],
    status: "In progress",
    highlights: [
      "AI-assisted workflows",
      "Technical SEO focus",
      "Automation-first product design",
      "Extensible integrations",
    ],
  },
  {
    slug: "uaios",
    eyebrow: "AI · SaaS · Business Architecture",
    title: "UAIOS — Universal AI Business OS",
    summary:
      "A modular foundation for an AI-enabled business operating system, focused on business modules, permissions, structured data, and extensible workflows.",
    overview:
      "UAIOS is an architecture-led product concept. The current work focuses on establishing a reliable business-system foundation that can support multiple modules and AI-assisted workflows without prematurely locking the product into one narrow use case.",
    problem: [
      "Businesses often operate across disconnected tools, workflows, and datasets.",
      "Adding AI to fragmented systems can create more complexity instead of reducing it.",
      "A reusable business platform needs clear boundaries for tenants, users, roles, permissions, and modules.",
    ],
    solution: [
      "A modular application foundation with clear domain boundaries.",
      "A database and authorization model designed to support extensible business modules.",
      "Repository and service patterns intended to keep business logic maintainable as the system grows.",
    ],
    architecture: [
      "Modular application structure with domain-oriented boundaries.",
      "PostgreSQL foundation for structured business data.",
      "Role and permission model designed around controlled access.",
      "Repository/data-access abstraction to separate business logic from persistence details.",
      "AI integration points treated as extensible capabilities rather than hard-coded into every module.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "AI APIs"],
    features: [
      "Modular business architecture",
      "Structured authorization foundation",
      "Repository-oriented data access",
      "Extensible domain/module model",
      "AI integration points",
      "Engineering standards for future modules",
    ],
    challenges: [
      "Designing a broad platform without over-engineering the first version.",
      "Maintaining clean module boundaries as the product scope expands.",
      "Separating current foundation capabilities from future product ambitions.",
    ],
    status: "Foundation stage",
    highlights: [
      "Modular architecture",
      "Authorization foundation",
      "Database foundation",
      "Extensible AI direction",
    ],
    roadmap: [
      "Additional business modules",
      "More advanced AI-assisted workflows",
      "Expanded automation and integrations",
      "Broader business intelligence capabilities",
    ],
  },
];
