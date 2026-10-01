# The Venture Collective website

Static site built with [Astro](https://astro.build) and hosted on Netlify.

## Editing content

All copy, companies, team, news and links live in `src/data/site.js`. Edit that file and push; Netlify rebuilds the site.

- Logos: `public/assets/logos/white/<logo>.png`, white on transparent. `ratio` is the image's width ÷ height.
- Team photos: `public/assets/team/`. Leave `photo` empty to show initials.
- News images: `public/assets/news/`.

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:4321. `npm run build` writes the static site to `dist/`.

## Contact form

The form on `/contact` uses Netlify Forms. Submissions only work on Netlify, not locally. Email notifications to hello@theventurecollective.com are set in Netlify under Site settings > Forms > Form notifications.

## Design reference

The original design handoff is in `docs/design_handoff_tvc_site/`.
