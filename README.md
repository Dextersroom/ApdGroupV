# Nkosinathi Nkosi — Portfolio

A premium, editorial-style personal portfolio for **Nkosinathi Nkosi** — Programmer, Prompt Engineer & Web Developer based in Mbombela, South Africa.

Built from scratch with **React + Vite**. No page-builders, no template. Custom cursor, scroll-reveal motion, animated statistics, a working contact form, and full responsiveness from 320px phones to ultrawide monitors.

---

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Folder structure](#folder-structure)
- [Installation](#installation)
- [Running locally](#running-locally)
- [Build commands](#build-commands)
- [Deployment](#deployment)
- [Customisation](#customisation)
- [Accessibility & performance](#accessibility--performance)
- [Troubleshooting](#troubleshooting)

---

## Overview

- **Framework:** React 18 + Vite
- **Styling:** Plain CSS with a token system (CSS custom properties). No CSS framework.
- **Motion:** IntersectionObserver reveals, requestAnimationFrame parallax, all gated behind `prefers-reduced-motion`.
- **Signature elements:** custom magnetic cursor, editorial numbered sections, oversized display type, your four custom images integrated as core visual elements.

Sections: Hero, About, Skills, Visual break, Featured Work, Services, Journey / Why work with me, Testimonials, Résumé, Contact, Footer.

---

## Tech stack

| Concern      | Choice                                    |
|--------------|-------------------------------------------|
| Build tool   | Vite                                      |
| UI library   | React                                     |
| Styling      | CSS custom properties + per-component CSS |
| Fonts        | Space Grotesk (display) + Inter (body)    |
| Form backend | Formspree (optional) with mailto fallback |
| Icons        | Inline SVG                                 |

---

## Folder structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          # placeholder — replace with your real résumé
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/images/      # optimised webp + jpg (hero, cover, mantra, break)
│   ├── animations/         # reveal.css — scroll-reveal primitives
│   ├── components/
│   │   ├── sections/       # Hero, About, Skills, Work, Services, Journey, etc.
│   │   ├── Cursor.jsx      # custom magnetic cursor
│   │   ├── Loader.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── Reveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Stat.jsx
│   ├── data/content.js     # <-- ALL text content lives here
│   ├── hooks/              # useActiveSection, useCountUp, useReveal
│   ├── layouts/            # Navbar, Footer
│   ├── styles/tokens.css   # <-- palette, type scale, spacing
│   ├── App.jsx
│   └── main.jsx
├── index.html              # SEO meta, Open Graph, fonts, structured data
├── package.json
├── vite.config.js
├── README.md
├── DEPLOYMENT.md
└── LICENSE
```

---

## Installation

Requires **Node.js 18+** and npm.

```bash
cd portfolio
npm install
```

---

## Running locally

```bash
npm run dev
```

Vite prints a local URL (usually http://localhost:5173). Open it in your browser. Changes hot-reload instantly.

---

## Build commands

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

The build outputs an optimised, static `dist/` folder ready to deploy anywhere.

---

## Deployment

See **DEPLOYMENT.md** for step-by-step instructions (GitHub, Vercel, Netlify, GitHub Pages) with every command.

---

## Customisation

### Updating content
**Almost all text lives in one file: `src/data/content.js`.** Edit it to change your tagline, about copy, skills, services, projects, journey, why-me points, and testimonials. No component code needed.

### Replacing images
Optimised images live in `src/assets/images/` as matched `.webp` + `.jpg` pairs:

| File                   | Used in          |
|------------------------|------------------|
| `hero-name-portrait.*` | Hero             |
| `portfolio-cover.*`    | About            |
| `mantra-i-will.*`      | Journey          |
| `atmospheric-break.*`  | Full-width break |

Replace **both** the `.webp` and `.jpg` with the same filename. WebP is smaller/faster; if you only have a JPG, point both at it.

### Turning on the contact form
The form works out of the box in **fallback mode** (opens the visitor's email app pre-addressed to you). To collect submissions directly:

1. Create a free form at https://formspree.io (use naytiiey02@gmail.com).
2. Copy your form ID (e.g. `xayzabcd`).
3. In `src/components/sections/Contact.jsx`, replace `const FORMSPREE_ID = 'YOUR_FORM_ID';` with your real ID.

### Adding your résumé
Replace `public/resume.pdf` with your real one-page résumé (keep the filename). The Download button already points to it.

### Colours & typography
All tokens are in `src/styles/tokens.css`:

```css
--c-primary: #19231A;   /* base canvas */
--c-secondary: #33673B; /* mid green */
--c-accent: #9A6D38;    /* bronze */
--c-cta: #CC3F0C;       /* action colour */
--c-neutral: #D8CBC7;   /* text */
```

Change a value once, it updates everywhere. Fonts are `--font-display` / `--font-body` in the same file (loaded in `index.html`).

---

## Accessibility & performance

- Semantic HTML5, one `<h1>`, logical heading order.
- Visible keyboard focus states; mobile menu and all controls keyboard-navigable.
- `prefers-reduced-motion` disables parallax, reveals, count-ups, and the loader.
- Custom cursor only activates on fine-pointer, hover-capable devices; touch keeps the native cursor.
- Images lazy-loaded (hero is `fetchpriority="high"`), WebP with JPG fallback, dimensioned to avoid layout shift.
- `alt` text on meaningful images; decorative images marked `aria-hidden`.

---

## Troubleshooting

**`npm install` fails** — Check Node 18+: `node --version`.
**Fonts look plain** — Google Fonts needs internet on first load; falls back to system fonts offline.
**Form opens email app** — That's the fallback; add your Formspree ID to send silently.
**Images don't show after replacing** — Filename must match exactly (case-sensitive), inside `src/assets/images/`.
**Custom cursor missing** — Disabled on touch and reduced-motion by design; test with a mouse.

---

Built from scratch for Nkosinathi Nkosi. © 2026.
