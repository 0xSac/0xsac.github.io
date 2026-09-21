# 0xSac Web Platform Agent Instructions & Operational Standard

## 1. Identity & Operating Doctrine
0xSac is a practitioner-led cybersecurity exercise initiative based in the Sacramento, California region.
- Core Tenet: Practical keyboard repetitions beat check-the-box compliance reviews every time.
- Strategic Focus: Threat-informed exercise runbooks, attack-path validation, detection engineering artifacts, and defensible architectural blueprints.
- Audience: Regional public sector engineers, defense teams, academic institutions, and enterprise cybersecurity practitioners.
- Voice & Tone: Highly technical, direct, authoritative, and concise. Write like a lead assessment operator or Tier-3 detection engineer. Eliminate all corporate marketing fluff, sales-heavy pitches, and exaggerated buzzwords.

## 2. Hard Strategic Guardrails & Compliance Boundaries
- Entity Isolation: 0xSac is completely standalone. Strictly DO NOT mention, reference, or link to "mogsec" or "DFND" anywhere in code, configuration, documentation, or public copy.
- Range & Cloud Neutrality: All scenarios, lab topologies, and IaC blueprints must rely exclusively on non-proprietary, vendor-neutral cloud environments (AWS, Azure, GCP, Proxmox, Terraform).
- Ethics & Separation: Maintain absolute separation from internal government, military, or agency infrastructure.
- Non-Destructive Focus: Emphasize telemetry validation, detection engineering (Sigma, YARA-L), and defensive remediation. Never generate unconstrained zero-days or destructive weaponized exploits.

## 3. Positioning, Community & Repo Scope
- Stage: Early-stage practitioner project. Strictly avoid premature labels like "Community Working Group", "Decentralized DAO", or open committee governance.
- Repo Boundaries: The `0xsac.github.io` repository is strictly a static web delivery platform. Never direct public visitors or attendees to GitHub Issues or Pull Requests for event management, registration, or exercises.
- Launch Messaging: Public-facing status remains "Launch Date TBD — More Coming Soon / In Active Staging".
- Sponsor & Resource Strategy: Present a structured California/regional partnership tier model (Platinum, Gold, Silver, Bronze) for cloud range compute, tools, and telemetry support without transactional sales language.

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
