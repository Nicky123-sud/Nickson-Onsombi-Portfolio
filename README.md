# Nickson Onsombi — Portfolio

Personal portfolio of Nickson Onsombi Nyaboga, a software engineer building
backend systems, APIs and AI-enabled platforms, with a dedicated Data &
Analytics and technical-reporting capability. Built as a React + TypeScript
single-page application (previously a static Bootstrap template).

## Stack

- **React 19 + TypeScript**, built with **Vite**
- **Tailwind CSS 4** for the design system (light/dark theming via CSS variables)
- **Framer Motion** for scroll-aware, `prefers-reduced-motion`-aware animation
- **React Router** for the project case-study pages
- Typed content modules under `src/data/` (profile, skills, experience,
  education, projects) — update content there, not in the components

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint         # oxlint
npm run build        # tsc -b && vite build (production build)
npm run preview      # serve the production build locally
```

## Contact form

The contact form (`src/components/sections/Contact.tsx`) works without any
backend: if `VITE_FORM_ENDPOINT` isn't set, it falls back to a pre-filled
`mailto:` link. To use a hosted form backend (e.g. Formspree), copy
`.env.example` to `.env.local` and set `VITE_FORM_ENDPOINT` to your form's
endpoint URL. No secret keys are used client-side.

## CV / Resume

The downloadable resume lives at `public/documents/Nickson-Onsombi-Nyaboga-CV.pdf`
and is served statically — the "Download CV" buttons link directly to it.

## Deployment

**Primary target: GitHub Pages**, at
https://nicky123-sud.github.io/Nickson-Onsombi-Portfolio/. Pushing to
`master` triggers `.github/workflows/deploy.yml`, which type-checks, lints,
builds and publishes `dist/` via GitHub's official Pages Actions. One-time
setup: in the repo's **Settings → Pages**, set **Source** to **GitHub
Actions** (only needed if it's currently set to "Deploy from a branch").

The build is configured for that subpath (`base: "/Nickson-Onsombi-Portfolio/"`
in `vite.config.ts`) and the client-side router is given a matching
`basename`. The workflow also copies `index.html` to `404.html` after the
build — GitHub Pages serves that for any unmatched path, which is what lets
deep links like `/projects/mitiapp-miti-ni-poa` load correctly on refresh.

To deploy elsewhere (Netlify, Vercel, Cloudflare Pages, a custom domain at
the root), override the base path at build time:

```bash
BASE_PATH=/ npm run build
```

Because it still uses client-side routing, configure the host to rewrite
unknown paths to `index.html`:

- **Netlify** — already handled by `public/_redirects` (`/* /index.html 200`)
- **Vercel** — add a rewrite rule to `vercel.json`
- **Cloudflare Pages** — supported out of the box for SPAs
