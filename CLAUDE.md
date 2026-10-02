# TVC website

Marketing site for The Venture Collective (TVC), an early-stage venture firm. Lisa (Pinecone) is building it as a favor and hands it to Cat Middleton at TVC on 13 Oct 2026. Current status and open items: `NEXT-STEPS.md`.

## Stack

- Astro, static output, one `.html` file per page (`build.format: "file"`). No client framework; interactivity is small vanilla `<script>` blocks in each page.
- Hosted on Netlify (`netlify.toml`). The contact form is Netlify Forms, so it must stay in the static HTML. Don't render it client-side.
- Plain CSS in `src/styles/global.css`, with design tokens as CSS variables on `:root`.

## Where things live

- `src/data/site.js`: all copy and data. Non-developers (Nick, Gina, Cat) will edit this, so keep it plain.
- `src/layouts/Base.astro`: head, header (with mobile menu), footer CTA and footer bar.
- `src/pages/*.astro`: one file per page.
- `src/scripts/motion.js`: scroll reveal, copied from the handoff unchanged.
- `public/assets/`: logos, team photos, news images (compressed copies).
- `docs/design_handoff_tvc_site/`: the original design handoff. `README.md` there is the spec, `Sign-off list.md` tracks Cat's approvals, and `design/TVC Site.dc.html` is the visual reference (serve the `design/` folder locally to view it).

## Rules from the handoff

- High fidelity: match the reference's colors, type, spacing and copy exactly.
- Use TVC's brand. Don't apply the Pinecone design system.
- Corner radius 0 everywhere except circles. No shadows or gradients.
- Every H1 and H2 ends with an orange period (`<span class="dot">.</span>`).
- Respect `prefers-reduced-motion`.

## Netlify credits

Every push to `main` that touches the site publishes to Netlify and costs about 15 credits (the Personal plan has 1,000 a month). Commit locally as you go and push in batches. Commits that only change notes or `docs/` skip the build automatically (`ignore` in `netlify.toml`). Add `[skip netlify]` to a commit message to skip a build on purpose.
