# 0xSac Agent Instructions

## 1. Identity, Aesthetic & Tone
0xSac provides scenario-driven cyber exercises, threat-informed architecture blueprints, and detection validation playbooks based in Northern California.
- Aesthetic Style: Modern, clean cybersecurity hub inspired by CyberSwarm. Deep slate backgrounds, ambient particle canvas (`CyberCanvas.astro`), subtle glassmorphism (`backdrop-blur`), and soft cyan glow highlights.
- Copy Tone: Direct, technical, and understated. Speak as an experienced engineer. Strip out all sales fluff, marketing buzzwords, and dramatic phrases.
- Prohibited Phrases: Never use "practitioner-led," "battle-tested reps," "community working group," "homeland defense," or "check-the-box reviews."

## 2. Hard Platform Isolation
- 0xSac is completely standalone. Strictly DO NOT mention or reference "mogsec" or "DFND".
- All lab guides, range topologies, and exercise specs must remain vendor-neutral, portable, and hosted in independent cloud or local lab environments (AWS, Azure, GCP, Proxmox).

## 3. Site Navigation & Clean Shell Rules
- Routes: Three core pages only: `/` (Home), `/about` (About), and `/resources` (Resources).
- Layout Cleanliness: Maintain exactly one global header and one global footer inside `BaseLayout.astro`. Never duplicate navbar links or footer taglines inside individual page templates.
- Launch Status: Keep to the clean pill badge: `Status: Staging — Date TBD`.
- Sponsorship: Single minimal text card routing inquiries to `partner@0xsac.com`. No multi-tier pricing cards or complex matrices.

## 4. Tech Stack & Local Execution
- Framework: Astro (Static Site Generation mode) paired with Tailwind CSS (dark terminal palette: Slate #0F172A, Border #1E293B, Sky #38BDF8, Emerald #10B981).
- Hosting: Zero-cost static build hosted on GitHub Pages via GitHub Actions.
- Local Testing Workflow:
  - Install dependencies: `npm install`
  - Start local server: `npm run dev`
  - Build validation: `npm run build`
  - Local preview: `npm run preview`

## 5. SEO, URL Reputation & Schema Engineering
- Canonical Routing: Use trailing-slash semantic slugs (`/exercises/<slug>/`, `/briefings/<slug>/`).
- Meta Standards: High-density, practitioner-oriented titles (<60 chars) and descriptions (<155 chars) covering MITRE ATT&CK technique IDs, tools, and learning objectives.
- Structured Data: Every exercise page must inject Schema.org JSON-LD (`TechArticle` or `Course`).
