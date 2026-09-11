# QA & Production Verification

## Required local checks

Run from the project root:

```bash
npm install
npm run typecheck
npm run lint
npm run format:check
npm run build
npm start
```

A production release should not be considered fully verified until these checks pass on the actual development environment.

## Browser QA

Test the main routes at representative desktop and mobile widths. Verify:

- No horizontal scrolling
- Navigation opens and closes correctly
- Theme switching works
- Keyboard focus remains visible
- Touch targets are usable
- Forms fit without browser zoom
- Long project titles wrap naturally
- Reduced-motion behavior works
- No unexpected browser-console errors

Suggested viewport widths:

- 320 × 800
- 360 × 800
- 390 × 844
- 412 × 915
- 768 × 1024
- 1024 × 768
- 1280 × 800
- 1440 × 900

## SEO Verification

After deploying with the real production domain:

- Verify canonical URLs
- Verify `sitemap.xml`
- Verify `robots.txt`
- Verify Open Graph and social previews
- Validate JSON-LD structured data
- Inspect important URLs with Google Search Console
- Monitor Core Web Vitals
- Run Lighthouse / PageSpeed tests

## Production Configuration

Before launch:

- Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain
- Set real Upwork, GitHub and LinkedIn URLs
- Set the real contact email values
- Configure transactional email delivery if contact submissions should be emailed
- Keep all provider secrets server-side
- Verify security response headers
- Add shared/distributed rate limiting for multi-instance deployment

## Current Verification Boundary

Static code-level hardening has been applied, but browser QA, Lighthouse, Core Web Vitals, production deployment, Search Console verification, and end-to-end email delivery require the real runtime environment and production credentials.
