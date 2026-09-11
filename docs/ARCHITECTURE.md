# Architecture & Scope

## Goal

Build a premium, modern, conversion-focused personal portfolio for Bilal Ahmed, aimed at Upwork clients, founders, startups, agencies, businesses, recruiters, and technical partners.

## Architecture

The portfolio uses a lightweight Next.js App Router architecture with content separated from reusable UI.

```text
Next.js App Router
│
├── Route pages + metadata
├── Reusable components
├── TypeScript content/data
├── SEO + structured data
├── Contact API route
└── Environment configuration
```

The current scope intentionally avoids unnecessary infrastructure. There is no database, authentication layer, CMS, payment processing, or external application backend required for the portfolio itself.

## Routes

- `/`
- `/about`
- `/services`
- `/projects`
- `/projects/ksts`
- `/projects/autoseo`
- `/projects/uaios`
- `/skills`
- `/process`
- `/contact`
- `/privacy`
- `/terms`

Supporting routes include the sitemap, robots metadata, manifest, Open Graph image generation, error handling, and `/api/contact`.

## Design Principles

- Premium and technical visual language
- Mobile-first responsive layout
- Accessible semantic HTML and keyboard focus states
- Purposeful motion with reduced-motion support
- Fast page delivery and minimal client-side JavaScript
- No generic stock-photo-heavy presentation
- No unsupported claims or fabricated portfolio proof

## Content Integrity

KSTS, AutoSEO, and UAIOS are presented as portfolio projects. Implemented/current capabilities must not be mixed with planned roadmap features. UAIOS roadmap items are explicitly separated from current capabilities.

## Extension Strategy

Future additions can be introduced without restructuring the whole application, including:

- Real project screenshots and media
- Verified live-demo links
- Transactional contact email provider
- Analytics and Search Console configuration
- An `/insights` content section
- Additional case studies

These should be added only when the corresponding real assets, accounts, or requirements exist.
