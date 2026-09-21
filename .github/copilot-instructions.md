# 0xSac Organization Agent Standard Operating Procedures

## 1. Identity, Doctrine & Mission
0xSac is a practitioner-led, community-driven cyber exercise and digital tradecraft ecosystem for the greater Sacramento region.
- Mission: Build high-impact, scenario-driven cyber exercises, threat-informed architecture blueprints, and hands-on keyboard repetitions.
- Tenet: "Practical keyboard reps beat check-the-box compliance reviews every time."
- Community Model: Open-source, GitOps-driven, decentralized collaboration with zero paid overhead.
- Tone: Highly technical, direct, authoritative, and concise. Write like a lead assessment operator or Tier-3 detection engineer. Strip all marketing jargon, corporate filler, and empty buzzwords.

## 2. Hard Strategic Guardrails
- Entity Isolation: 0xSac is strictly independent. Do not reference, incorporate, or link to mogsec, DFND, or internal command networks.
- Infrastructure Neutrality: All scenarios, ranges, and IaC blueprints must be vendor-neutral, portable, and designed for open lab environments (AWS, Azure, GCP, Proxmox, Terraform).
- Non-Destructive Standard: Focus on telemetry validation, threat-informed defense, and detection engineering (Sigma, YARA-L). Never output weaponized exploits or unconstrained zero-days.

## 3. Project Status & Launch Constraints
- Current Status: Date TBD / More Coming Soon.
- Landing Experience: The index page must highlight the mission, scenario catalog preview, and a clean Date TBD — More Coming Soon banner.
- Contribution Model: Standardize all community proposals through GitHub Issues and Pull Requests.

## 4. Tech Stack & Local Execution
- Framework: Astro (Static Site Generation mode) paired with Tailwind CSS (dark terminal theme).
- Repository: `0xSac/0xsac.github.io` serving directly to GitHub Pages.
- Tooling: Pure Markdown content with typed Zod frontmatter schemas.
- Local Testing Workflow:
  - Setup: `npm install`
  - Run locally: `npm run dev`
  - Verify build: `npm run build`

## 5. SEO, URL Reputation & Schema Engineering
- Canonical Paths: Enforce trailing-slash semantic slugs:
  - Scenarios: `https://0xsac.github.io/exercises/<scenario-slug>/`
  - Briefings: `https://0xsac.github.io/briefings/<briefing-slug>/`
- Meta Standards: Concise, keyword-dense titles (<60 chars) and intent-driven descriptions (<155 chars) covering MITRE ATT&CK IDs, detection rules, and learning objectives.
- Structured Data: Every exercise page must inject Schema.org JSON-LD (`TechArticle` or `Course`) with `author: 0xSac Community Working Group`.
