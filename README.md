# From Vibe Coding to Founder AgentOps — Workshop Landing Page

A responsive, single-page landing page for the online workshop
**From Vibe Coding to Founder AgentOps**, hosted by Vijay Rangan
(Tech Swamy Consulting).

Built with **Vite + React + TypeScript + Tailwind CSS v4**.

---

## Run it locally

```bash
pnpm install        # or: npm install
pnpm dev            # start the dev server (http://localhost:5173)
pnpm build          # type-check + production build into dist/
pnpm preview        # preview the production build
```

> The repo was developed with **pnpm** (npm's cache was unwritable on the dev
> machine). `npm install` works too once your npm cache permissions are fixed
> with `sudo chown -R $(id -u):$(id -g) ~/.npm`.

Requires Node 18+ (developed on Node 22).

---

## Deploy (GitHub Pages)

The site is live at **https://vjrngn.github.io/founder-agentops-workshop/**.

Pages is configured to serve the `gh-pages` branch. To build and publish a new
version:

```bash
pnpm deploy
```

This runs `scripts/deploy-pages.sh`, which builds `dist/` and force-pushes it to
`gh-pages` (no GitHub Actions required). `vite.config.ts` uses `base: "./"` so
the build works under the `/founder-agentops-workshop/` subpath.

> A GitHub Actions workflow would be the more automated option (deploy on every
> push to `main`), but this account's Actions are currently billing-locked.
> Once that's resolved, an Actions-based workflow can replace the manual script.

When you point the site at **techswamy.com** instead, the relative `base` means
no rebuild config change is needed — just set up the custom domain in the repo's
Pages settings.

---

## Updating the LinkedIn event URL (when registration opens)

There is **one place** to change. Open `src/content.ts` and set:

```ts
export const cta = {
  linkedInEventUrl: "https://www.linkedin.com/events/XXXXXXXXXXXX", // ← paste here
  ...
};
```

When that string is non-empty, every CTA across the page automatically:

- switches from the pre-filled **"Notify Me When Registration Opens"** email
  flow to a **"Register on LinkedIn"** link (opens in a new tab),
- updates the "Coming soon" badges to read **"Registration open"**,
- turns the footer "LinkedIn Event — Coming soon" item into a live link.

No component changes are needed.

---

## Project structure

```
index.html                  SEO / Open Graph / Twitter meta + JSON-LD Event schema + fonts
public/
  favicon.svg               Terminal-prompt brand mark
  og.svg                     Social share image (export to og.png — see note below)
src/
  main.tsx                  React entry
  index.css                 Tailwind v4 import + design tokens (@theme) + motion/atmosphere
  content.ts                ALL copy + the CTA config (single source of truth)
  components/
    ui.tsx                  Shared primitives: Reveal, Card, Pill, RegisterCta, icons, ...
    Header.tsx              Sticky nav + persistent CTA
    HeroSection.tsx         Hero + workflow pipeline (Idea → PRD → Issues → Agent Task → Review)
    ProblemSection.tsx
    WorkshopPromiseSection.tsx
    QuoteBand.tsx           Reusable pull-quote band
    WhoThisIsForSection.tsx
    WhatYouWillLearnSection.tsx
    AgendaSection.tsx
    FrameworkSection.tsx    The FOUNDER AgentOps loop
    AboutHostSection.tsx
    AboutTechSwamySection.tsx
    CTASection.tsx          Final dark CTA band
    Footer.tsx
  App.tsx                   Page composition
```

All page copy lives in `src/content.ts`, so wording can be edited without
touching markup.

---

## Design notes

- **Aesthetic:** an "engineer's notebook" — warm paper background, near-black
  ink, a single terracotta accent, a blueprint grid texture, and a monospace
  motif (Geist + Geist Mono) that nods to the AgentOps / code theme. Premium and
  credible rather than generic AI-gradient.
- **Motion:** staggered hero entrance + scroll-reveal sections, all disabled
  under `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, real `<a>` buttons, visible focus
  rings, and `aria-hidden` on decorative elements.

### Social share image

`public/og.svg` is the editable source for the Open Graph / Twitter card. Most
crawlers (LinkedIn included) prefer PNG — export it to a 1200×630
`public/og.png` and update the two `og:image` / `twitter:image` tags in
`index.html`.
