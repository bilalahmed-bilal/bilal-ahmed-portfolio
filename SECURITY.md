# Security Notes

- Never commit `.env.local`, API keys, database credentials, or provider secrets.
- The contact endpoint performs server-side validation, content-type and body-size checks, honeypot protection, and best-effort in-process rate limiting.
- Security response headers are configured in `next.config.ts`.
- Production multi-instance deployments should add a shared/distributed rate limiter at the platform or API gateway layer.
- Transactional email provider secrets must remain server-side only.
- Avoid logging contact message contents or other unnecessary personal information.
- Set the real production environment variables before launch.
