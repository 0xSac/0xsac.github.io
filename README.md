# 0xSac Web Platform (`0xsac.github.io`)

This repository contains the source code, static assets, scenario catalog previews, and architectural blueprints for **0xSac**—a practitioner-focused cyber exercise initiative for the Sacramento region.

> **Status:** Initiative Active • First Exercise Date TBD • More Coming Soon

---

## 1. Project Overview

0xSac delivers scenario-driven cyber exercises, threat-informed architecture blueprints, and validation tradecraft. The platform emphasizes defensible security program validation and practical keyboard repetitions over check-the-box compliance reviews.

### Repository Architecture
```text
0xsac.github.io/
├── .github/
│   ├── copilot-instructions.md       # Master GitHub Copilot Agent instructions
│   └── workflows/
│       └── deploy.yml                # CI/CD deployment to GitHub Pages via Actions
├── content/
│   ├── exercises/                    # Scenario runbooks and inject definitions
│   └── briefings/                    # Technical write-ups and detection analysis
├── public/
│   ├── assets/                       # Static SVGs, topologies, and OpenGraph cards
│   ├── CNAME                         # Production apex domain binding (0xsac.com)
│   └── robots.txt                    # Search indexing and crawler directives
├── src/
│   ├── components/                   # Navigation, layout modules, and JSON-LD schema
│   ├── layouts/                      # Base HTML and scenario documentation templates
│   ├── pages/                        # Landing page, exercise catalog, briefings
│   └── styles/                       # Tailwind styling configuration
├── astro.config.mjs                  # Static export configuration
├── package.json
└── tsconfig.json
