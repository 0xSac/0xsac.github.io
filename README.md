# 0xSac Web Platform

Static web delivery engine for 0xSac cyber exercise blueprints, threat scenarios, and detection validation guides in Northern California.

**Status:** Staging — Date TBD

## Architecture

- Static HTML5 portal pages styled with Tailwind CSS via CDN (`public/*.html`)
- Astro (Static Site Generation) for supporting content pages
- GitHub Actions
- GitHub Pages (`0xsac.com`)

The public portal pages live in `public/` and are copied verbatim into `dist/` by `astro build`. They share a Tailwind CDN theme (`public/assets/tailwind-theme.js`) and a small mobile-navigation script (`public/assets/site.js`). When changing the navbar or footer, update it in every portal page so they stay consistent.

## Local Development Quickstart

```bash
npm install
# or
npm ci

npm run dev
npm run build
npm run preview
```

## Site Routing Layout

- `/` — Landing gateway (`public/index.html`): hero, dual-track comparison, operational flow, registration, partners
- `/livefire.html` — Track 1: Live-Fire & CTF technical syllabus
- `/executive.html` — Track 2: Executive Decision Simulation
- `/schedule.html` — 1-Day Pilot operational tempo (0800–1730)
- `/governance.html` — Non-profit charter, technical separation, ethics, sponsorship prospectus
- `/about` — About (Vision, Mission, and Operational Boundaries) — Astro
- `/resources` — Technical notes, detection guides, and range architecture patterns — Astro

## Inquiries

All partnership and range sponsorship queries route to `partner@0xsac.com`.
