# 0xSac Agent Instructions

## 1. Identity & Voice
0xSac provides scenario-driven cyber exercises, threat-informed architecture blueprints, and detection validation playbooks based in Northern California.
- Tone: Direct, clean, technical, and understated. No buzzwords, sales hype, or exaggerated marketing claims.
- Style Rule: Avoid jargon like "practitioner-led," "battle-tested reps," "community-driven working group," or "defense of the homeland." Keep descriptions grounded and factual.

## 2. Hard Isolation Guardrails
- 0xSac is completely standalone. Strictly DO NOT mention or reference "mogsec" or "DFND".
- All lab guides and blueprints must use open, vendor-neutral cloud platforms (AWS, Azure, GCP, Proxmox). Never reference or integrate internal government or military networks.

## 3. Site Navigation & Structure
- Main routes: `/` (Home), `/about` (About), and `/resources` (Resources & Technical Notes).
- Footer: Simple one-liner (`0xSac • Sacramento, CA`).
- Launch Status: Keep it to a minimal status line: `Status: Staging — Date TBD`.
- Sponsorship: Single clean contact note directing sponsors to `partner@0xsac.com`. No complex tier tables or pricing cards until confirmed.

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
