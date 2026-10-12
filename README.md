# Tidy Terrain

Four-page demo site for Debbie's home organizing business, built with Astro.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321 in a browser.

## Build for production

```bash
npm run build
```

Static output lands in `dist/`. Drop that folder on any host.

## Deploy

**Netlify / Vercel / Cloudflare Pages:** Connect this repo, they'll detect Astro and build automatically.

**GitHub Pages:** Add a workflow at `.github/workflows/deploy.yml` using `withastro/action`.

**Any static host:** Run `npm run build`, upload the `dist/` folder.

## Project layout

```
src/
├── layouts/Layout.astro       Base HTML, head, header, footer
├── components/
│   ├── Header.astro           Promo bar + sticky nav
│   ├── Footer.astro           Alpaca line art + footer links
│   ├── DogMark.astro          SVG dog logo symbol
│   ├── Testimonials.astro     Rotating quote band
│   └── FAQ.astro              Accordion
├── pages/
│   ├── index.astro            Home
│   ├── services.astro         Services
│   ├── about.astro            About Debbie
│   └── contact.astro          Form
└── styles/global.css          Design tokens + components

public/images/                 Site photos
```

## Edit content

Most copy lives in the `.astro` files inside `src/pages/`. Each is HTML with a frontmatter block on top — edit the markup, save, and the dev server reloads.

Colors, type, and spacing are in `src/styles/global.css` at the top (`:root` block).
