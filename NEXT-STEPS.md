# TVC site: status and next steps

Last updated: 30 Sep 2026

Key dates: all content in by **Fri 3 Oct**, launch **Fri 10 Oct**, handover to Cat Middleton **Mon 13 Oct**.

## Picking this up on another laptop

```bash
git clone https://github.com/ellebythesea/tvc.git
cd tvc
npm install
npm run dev
```

The site runs at http://localhost:4321. To continue with Claude Code, open it in the `tvc` folder and say "read NEXT-STEPS.md and keep going". `CLAUDE.md` gives it the project background.

## Done

- Private repo `ellebythesea/tvc` (Lisa's personal GitHub, to be transferred to TVC at handover).
- Astro site with all five pages: `/`, `/approach`, `/portfolio`, `/icymi`, `/contact`. Checked side by side against the design reference at desktop and phone width.
- All content in `src/data/site.js`.
- Approved content changes applied: Concert Bio URL, footer LinkedIn (`/company/hellotvc`) and Medium (`@helloTVC`) links, Ines photo removed, booking fields removed.
- Mobile fixes from the handoff: wrapping hero headline, menu button below 640px, 44px tap targets on touch screens, single-row scrolling filter bar.
- Netlify Forms contact form with sending, sent and error states.
- Extras: images compressed (15 MB to 2.2 MB), favicon, link-preview tags, canonical URLs, skip link, keyboard focus styles, 404 page.
- `netlify.toml` holds the build settings, so nothing needs configuring in Netlify.

## Next: needs Lisa

1. **Netlify.** Sign in at app.netlify.com with GitHub (`ellebythesea`). Then:
   - Create a separate team called "The Venture Collective", so TVC doesn't share the free credits with Lisa's other Netlify project. Free plan: 300 credits a month, about 15 per publish. If they run out the site pauses; it never charges.
   - Add new project > Import from GitHub > `ellebythesea/tvc`. Build settings fill in from `netlify.toml`.
   - Site settings > Forms > Form notifications: add an email notification. Use Lisa's address while testing, then switch it to hello@theventurecollective.com before launch.
2. **Test on real phones:** iOS Safari and Android Chrome at 375px and 390px width (handoff requirement). Use the Netlify preview link.
3. **Send Cat the short email** (below) if not sent yet.

## Waiting on Cat (content due 3 Oct)

- **Terrion:** logo, one-liner and website. Searching online only turned up an unrelated Montréal telecom company, so we need this from Cat. Even just the website is enough; we can take the logo and description from it. Add it to `companies` in `src/data/site.js` with sector "Aerospace, Defense & Critical Materials", and put the logo in `public/assets/logos/white/`.
- **LinkedIn URL:** confirm `linkedin.com/company/hellotvc` is the right page.
- **Headshots:** Nicole (team), Colin and Pedro (founder quotes on Approach). Nicole shows initials. Colin and Pedro show an empty circle; if photos don't arrive by 3 Oct, either show initials there or remove the photo spot.
- **Domain:** registrar and login, needed to point theventurecollective.com at Netlify.
- Open copy approvals in `docs/design_handoff_tvc_site/Sign-off list.md`.
- Whether to use the two group photos (removed from the site build; originals are in `docs/`).

## Handover on 13 Oct

1. Cat gets into TVC's existing GitHub organization, github.com/TheVentureCollective (registered to hello@theventurecollective.com).
2. She invites `ellebythesea` to it. Lisa transfers the repo there (Settings > Danger Zone > Transfer).
3. In Netlify, reconnect the project to the repo's new location (Project configuration > Build & deploy > Repository).
4. Invite Cat to the Netlify team as Owner. She adds TVC's card under billing. Lisa leaves the team.
5. Cat removes Lisa from the GitHub organization.

Backup if TVC's GitHub can't be recovered: Cat creates her own GitHub account and Lisa transfers the repo to it.

## Short email for Cat

> Hi Cat,
>
> Quick note: to keep us on schedule, I've set up the website's code in my account for now. I'll move it over to TVC when I hand off the site on 13 Oct. There's nothing you need to do, and I'll let you know if I need anything.
>
> Thanks,
> Lisa
