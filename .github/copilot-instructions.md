# 0xSac Web Platform Agent Instructions & Cleanup Protocol

## 1. Project Identity & Architecture
0xSac is a technical initiative developing cyber exercise blueprints, threat-informed scenarios, and detection validation guides in Northern California.
- Current Status: Active Staging (Date TBD).
- Tech Stack: Astro (Static output mode), Tailwind CSS, deployed to GitHub Pages via GitHub Actions.
- Target Domain: `0xsac.com` (CNAME managed in `/public/CNAME`).
- Absolute Isolation Rule: 0xSac is 100% standalone. NEVER mention, reference, or commit anything mentioning "mogsec" or "DFND".

## 2. Immediate Fixes Required (Visual & Styling Engine)
1. CSS / Tailwind Delivery:
   - Ensure `@astrojs/tailwind` is imported and active in `astro.config.mjs`.
   - Ensure `src/styles/global.css` has standard Tailwind directives:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - Ensure `BaseLayout.astro` explicitly imports `../styles/global.css`.
   - The body tag must enforce the dark background: `<body class="bg-slate-950 text-slate-100 min-h-screen">`.

2. Canvas Background Boundary Fix (`CyberCanvas.astro`):
   - The canvas element MUST be set to `class="fixed inset-0 pointer-events-none -z-10 w-full h-full"`.
   - Do NOT let the canvas push or displace `<main>` DOM elements. It must remain strictly in the background behind content.

3. Single Source of Truth for Shell (Header & Footer):
   - Exactly ONE `<header>` and ONE `<footer>` must exist across the site, located exclusively in `src/layouts/BaseLayout.astro`.
   - Strip out any `<header>`, `<nav>`, or `<footer>` tags from `index.astro`, `about.astro`, or `resources.astro` to eliminate duplicate navbar lines.

## 3. Site Map & Content Scope
Maintain only 3 active functional routes:
1. `/` (Home): Hero statement, status pill (`Status: Staging — Date TBD`), 3 core capability cards (Runbooks, Detection, Blueprints), active scenario previews, and single minimal partner inquiry note (`partner@0xsac.com`).
2. `/about` (About): Plain-language Vision, Mission, and Operational Boundaries.
3. `/resources` (Resources): Notes, Sigma guides, and architectural range blueprints.

## 4. Unused File Pruning Checklist
Delete the following deprecated or redundant files if present:
- `src/components/Navbar.astro` (consolidated into `BaseLayout.astro`)
- `src/components/StatusBanner.astro` (consolidated into `index.astro`)
- `src/components/MselTimeline.astro`
- `src/pages/briefings/` and `content/briefings/`
- `src/pages/exercises/` and `content/exercises/`

## 5. Copy & Tone Guardrails
- Understated, technical, and clean. No corporate marketing buzzwords.
- Prohibited Phrases: Never use "practitioner-led," "battle-tested reps," "community working group," "homeland defense," "check-the-box reviews," or multi-tier pricing tables (Platinum/Gold/Silver).
- Partnership: Keep inquiries simple: `Contact: partner@0xsac.com`.