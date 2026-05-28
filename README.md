# Evotech Innovations — Marketing + Portfolio Site

Minimal, motion-rich marketing experience for Evotech Innovations. Built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion. Features portfolio filters with deep-linkable query params, EmailJS/Netlify-ready contact form, route transitions, motion tokens, and accessibility-first UI.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS** with CSS variable tokens (`src/styles/vars.css`)
- **Framer Motion** micro-interactions + route transitions
- **React Router v7** (`/`, `/portfolio`, `/portfolio/:slug`, `/about`, `/contact`)
- **EmailJS** integration with graceful Netlify form fallback

## Getting started

```bash
npm install
npm run dev
```

### Available scripts

| Script        | Description                                    |
| ------------- | ---------------------------------------------- |
| `npm run dev` | Start local dev server                         |
| `npm run build` | Type-check + production build               |
| `npm run preview` | Preview the production build locally      |

## Environment variables (EmailJS)

Create `.env` and supply:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are absent the contact form auto-falls back to Netlify static form handling (`data-netlify="true"`).

## Tailwind + design tokens

- Global CSS variables live in `src/styles/vars.css`.
- Tailwind is configured to read semantic colors (`primary`, `accent`, `dark`, `muted`, `surface`) via CSS variables.
- Magnetic CTA + cursor micro-interactions respect `prefers-reduced-motion`.

## Deployment

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

Enable form handling (already annotated) and set ENV vars in the dashboard.

### Vercel

```bash
npm run build
vercel --prod
```

Set ENV vars under Project Settings → Environment Variables. Vercel will serve the SPA with proper routing (fallback to `index.html`).

## Performance + QA checklist

- Lazy loaded imagery with `loading="lazy"` + blur-up placeholders
- Route-level code splitting for project detail page
- Prefetch fonts + meta tags in `index.html`
- Lighthouse targets: **90+ Performance / 90+ Accessibility**, initial JS under ~150KB
- Skip link, focus styles, ARIA states on filters/forms

## Open Graph

`public/og-image.svg` is a lightweight template referencing the Evotech palette. Update copy as needed. Replace `public/logo.png` with the provided brand mark (`/mnt/data/13438860896.png`) when accessible for crisp rendering.

## Deploy checklist

- [ ] `npm run build` succeeds without warnings
- [ ] EmailJS keys configured (or Netlify forms verified)
- [ ] Replace placeholder `public/logo.png` with brand-provided asset
- [ ] Confirm `og-image.svg`/meta tags point to production domain
- [ ] Run Lighthouse in Chrome (target >90)
