# Bilal Ahmed — Full-Stack Developer & SaaS Builder

A modern, production-focused personal portfolio website for Bilal Ahmed, showcasing full-stack web development, SaaS platforms, AI integration, business automation, APIs, dashboards, and scalable software architecture.

## Featured Work

- **KSTS** — Multi-company bus booking and marketplace platform.
- **AutoSEO** — AI-powered SEO and marketing automation SaaS.
- **UAIOS** — Universal AI Business OS architecture and business automation platform.

Project descriptions intentionally distinguish current capabilities from roadmap items. No fabricated clients, testimonials, revenue, traffic, user counts, or performance metrics are presented.

## Technology Focus

The portfolio itself is built with a lightweight Next.js stack. The showcased professional technology focus includes:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Node.js
- PostgreSQL
- Supabase
- Prisma
- REST APIs and AI API integrations
- SaaS architecture and business automation
- ESLint and Prettier

## Website Features

- Responsive portfolio pages and project case studies
- Dark / light / system theme support
- Accessible navigation and reduced-motion support
- Technical SEO metadata, canonical URLs, sitemap and robots support
- JSON-LD structured data
- Route-specific Open Graph images
- Privacy and Terms pages
- Contact enquiry UI with server-side validation and abuse protections
- Environment-driven production configuration
- Security response headers

## Project Structure

```text
src/
├── app/                 # Next.js routes, metadata, API and SEO endpoints
├── components/          # Reusable UI, layout, project and contact components
├── data/                # Portfolio content and case-study data
└── lib/                 # Shared utilities

docs/
├── ARCHITECTURE.md      # Architecture and project scope
└── QA.md                # Verification and production QA checklist
```

## Local Development

Requirements:

- Node.js 24.20+ and <25
- npm

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run verification:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

Run the production build locally:

```bash
npm start
```

## Environment Configuration

Copy `.env.example` to `.env.local` and provide real values before production deployment.

Do not commit `.env.local`, API keys, database credentials, or provider secrets.

## Production Boundary

The current portfolio is intentionally lightweight. It does not require a database, authentication system, CMS, payment system, or persistent application data.

The contact endpoint currently validates requests and provides honest success/failure behavior. Transactional email delivery requires a real provider and server-side credentials to be configured before production contact delivery is enabled.

For multi-instance production deployment, use a shared/distributed rate limiter rather than relying only on the current best-effort in-process limiter.

## Security

See [`SECURITY.md`](./SECURITY.md) for repository and deployment security notes.

## License

No open-source license is granted by this repository unless a separate license file is added.
