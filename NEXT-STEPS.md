# TVC site: status and next steps

Last updated: 1 Oct 2026

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
- Netlify account on Lisa's GitHub login (default team: 21 Robots, not used for TVC).
- Astro site with all five pages: `/`, `/approach`, `/portfolio`, `/icymi`, `/contact`. Checked side by side against the design reference at desktop and phone width.
- All content in `src/data/site.js`.
- Approved content changes applied: Concert Bio URL, footer LinkedIn (`/company/hellotvc`) and Medium (`@helloTVC`) links, Ines photo removed, booking fields removed.
- Mobile fixes from the handoff: wrapping hero headline, menu button below 640px, 44px tap targets on touch screens, single-row scrolling filter bar.
- Netlify Forms contact form with sending, sent and error states.
- Extras: images compressed (15 MB to 2.2 MB), favicon, link-preview tags, canonical URLs, skip link, keyboard focus styles, 404 page.
- `netlify.toml` holds the build settings, so nothing needs configuring in Netlify.

## The plan

Lisa builds and launches everything on her own logins, then hands it over. She never uses Cat's email or 2FA: every TVC system invites Lisa's own login instead.

What the domain uses today (checked 1 Oct):
- **Registrar:** GoDaddy (no changes needed there).
- **DNS:** Cloudflare. This is where the switch happens.
- **Email:** Google Workspace (hello@). Its MX records must not be touched.

### 1. Now: build on Lisa's accounts
1. Netlify: create a team called "The Venture Collective" on the **Personal plan ($9/month)**, on Lisa's card. A second team can't be on the free plan.
2. Import `ellebythesea/tvc` into that team. Build settings fill in from `netlify.toml`.
3. Project configuration > Forms > Form notifications: email alerts go to Lisa while testing.
4. Share the `*.netlify.app` preview link with Cat for review.
5. Test on real phones: iOS Safari and Android Chrome at 375px and 390px width (handoff requirement).

### 2. This week: two invites from Cat
6. **Cloudflare:** Cat invites Lisa's email as a member of TVC's Cloudflare account (Manage account > Members).
7. **GitHub:** Cat recovers github.com/TheVentureCollective (registered to hello@; password reset at github.com/password_reset) and invites `ellebythesea` as Owner. Backup: she creates a new free GitHub organization and invites Lisa.

### 3. Launch, Fri 10 Oct
8. Netlify > Domain management: add theventurecollective.com and www.theventurecollective.com.
9. Cloudflare DNS: point the root and `www` records at Netlify, using the values Netlify shows. Change **only** those records. Leave the MX records (email) and the nameservers alone.
10. Wait for Netlify's HTTPS certificate, then check the live site and send a test through the contact form.
11. Switch form notifications to hello@theventurecollective.com.

### 4. Handover, Mon 13 Oct
12. GitHub: transfer the repo from `ellebythesea/tvc` to the TheVentureCollective organization (Settings > Danger Zone > Transfer).
13. Netlify: reconnect the project to the repo's new location (Project configuration > Build & deploy > Repository). Approve Netlify's access to the TVC organization while Lisa is still an Owner there.
14. Netlify team:
    - Invite Cat as Owner. If the Personal plan won't allow a second member, upgrade to Pro ($20) for the handover; Netlify only lets an Owner leave once another Owner exists.
    - Cat replaces Lisa's card under billing.
    - Lisa leaves the team.
    - Cat can move back to Personal afterwards.
15. Lisa leaves the Cloudflare account and the GitHub organization.

**Cost to Lisa:** about $9 for October, plus a few prorated dollars if Pro is needed for the handover. After that, nothing.

**What Cat does:** sends two invites, accepts the Netlify invite and adds her card, each under her own login.

## Waiting on Cat (content due 3 Oct)

- **Terrion:** logo, one-liner and website. Searching online only turned up an unrelated Montréal telecom company, so this has to come from Cat. Even just the website is enough; we can take the logo and description from it. Add it to `companies` in `src/data/site.js` with sector "Aerospace, Defense & Critical Materials", and put the logo in `public/assets/logos/white/`.
- **LinkedIn URL:** confirm `linkedin.com/company/hellotvc` is the right page.
- **Headshots:** Nicole (team), Colin and Pedro (founder quotes on Approach). Nicole shows initials. Colin and Pedro show an empty circle; if photos don't arrive by 3 Oct, either show initials there or remove the photo spot.
- **The Cloudflare and GitHub invites** above.
- Open copy approvals in `docs/design_handoff_tvc_site/Sign-off list.md`.
- Whether to use the two group photos (removed from the site build; originals are in `docs/`).

## Short email for Cat

> Hi Cat,
>
> Quick note: to keep us on schedule, I've set up the website's code in my account for now. I'll move it over to TVC when I hand off the site on 13 Oct. There's nothing you need to do, and I'll let you know if I need anything.
>
> Thanks,
> Lisa
