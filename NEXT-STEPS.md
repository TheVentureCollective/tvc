# TVC site: status and next steps

Last updated: 8 Oct 2026

Key dates: all content in by **Fri 3 Oct**, launch **Fri 10 Oct**, handover to Cat Middleton **Mon 13 Oct**.

## Picking this up on another laptop

```bash
git clone https://github.com/TheVentureCollective/tvc.git
cd tvc
npm install
npm run dev
```

The site runs at http://localhost:4321. To continue with Claude Code, open it in the `tvc` folder and say "read NEXT-STEPS.md and keep going". `CLAUDE.md` gives it the project background.

## Done

- Repo moved to TVC's GitHub on 8 Oct: https://github.com/TheVentureCollective/tvc. It's public so Netlify's Personal plan can build it (Personal can't build private repos owned by an organization). To make it private, TVC moves the Netlify team to Pro ($20/month) first.
- Netlify account on Lisa's GitHub login (default team: 21 Robots, not used for TVC).
- Netlify team "The Venture Collective" (Personal plan, Lisa's card). Project `theventurecollective`, live preview at https://theventurecollective.netlify.app. Deploys automatically on every push to `main`. Form detection is on. Builds are skipped when a push only changes notes or `docs/` (saves credits).
- Astro site with all five pages: `/`, `/approach`, `/portfolio`, `/icymi`, `/contact`. Checked side by side against the design reference at desktop and phone width.
- All content in `src/data/site.js`.
- Approved content changes applied: Concert Bio URL, footer LinkedIn (`/company/hellotvc`) and Medium (`@helloTVC`) links, Ines photo removed, booking fields removed.
- Mobile fixes from the handoff: wrapping hero headline, menu button below 640px, 44px tap targets on touch screens, single-row scrolling filter bar.
- Netlify Forms contact form with sending, sent and error states.
- 5 Oct, from Cat's email: Terrion added to the Portfolio page (not the Home snapshot), after Gravitics. Photos added for Nicole (team), Colin and Pedro (founder quotes). Nicole's and Colin's photos were found by Lisa and aren't approved by Cat yet. Footer LinkedIn checked (`/company/hellotvc`).
- Extras: images compressed (15 MB to 2.2 MB), favicon, link-preview tags, canonical URLs, skip link, keyboard focus styles, 404 page.
- `netlify.toml` holds the build settings, so nothing needs configuring in Netlify.

## The plan

Lisa builds and launches everything on her own logins, then hands it over. She never uses Cat's email or 2FA: every TVC system invites Lisa's own login instead.

What the domain uses today (checked 1 Oct):
- **Registrar:** GoDaddy (no changes needed there).
- **DNS:** Cloudflare. This is where the switch happens.
- **Email:** Google Workspace (hello@). Its MX records must not be touched.

### 1. Now: build on Lisa's accounts
1. ~~Netlify: create a team called "The Venture Collective" on the Personal plan ($9/month), on Lisa's card.~~ Done 1 Oct. (A second team can't be on the free plan.)
2. ~~Import `ellebythesea/tvc` into that team.~~ Done 1 Oct.
3. ~~Form notifications~~ Done 1 Oct: Forms > Submission notifications email Lisa (subject "TVC site: new contact form message"). Switch to hello@theventurecollective.com at launch.
4. Share the `*.netlify.app` preview link with Cat for review.
5. Test on real phones: iOS Safari and Android Chrome at 375px and 390px width (handoff requirement).

### 2. This week: two invites from Cat
6. **Cloudflare:** Cat invites Lisa's email as a member of TVC's Cloudflare account (Manage account > Members).
7. ~~**GitHub:** Cat invites `ellebythesea` to github.com/TheVentureCollective as Owner.~~ Done 6 Oct: Lisa is an Owner. Other members: EmilyWB, ginatvc. The org already has four private repos (`tvc-app`, `tvc-landing-page`, `tvc-app-next-gen`, `tvc-app-old`); leave them alone. The transferred repo will keep the name `tvc`, which doesn't clash.

### 3. Launch, Fri 10 Oct
8. Netlify > Domain management: add theventurecollective.com and www.theventurecollective.com.
9. Cloudflare DNS: point the root and `www` records at Netlify, using the values Netlify shows. Change **only** those records. Leave the MX records (email) and the nameservers alone.
10. Wait for Netlify's HTTPS certificate, then check the live site and send a test through the contact form.
11. Switch form notifications to hello@theventurecollective.com.

### 4. Handover, Mon 13 Oct
12. ~~GitHub: transfer the repo to the TheVentureCollective organization.~~ Done 8 Oct, made public.
13. ~~Netlify: reconnect the project to the repo's new location.~~ Done 8 Oct. The Netlify GitHub app is installed on TheVentureCollective with access to `tvc` only.
14. Netlify team:
    - Invite Cat as Owner. If the Personal plan won't allow a second member, upgrade to Pro ($20) for the handover; Netlify only lets an Owner leave once another Owner exists.
    - Cat replaces Lisa's card under billing.
    - Lisa leaves the team.
    - Cat can move back to Personal afterwards. The repo is public, so Personal builds it. If TVC wants the repo private, they need Pro.
15. Lisa leaves the Cloudflare account and the GitHub organization.

**Cost to Lisa:** about $9 for October, plus a few prorated dollars if Pro is needed for the handover. After that, nothing.

**What Cat does:** sends two invites, accepts the Netlify invite and adds her card, each under her own login.

## Waiting on Cat (content due 3 Oct)

- **Photos for Nicole and Colin:** Lisa found these herself. Cat to confirm they're OK, or send others.
- **The Cloudflare invite** above (GitHub done 6 Oct).
- Open copy approvals in `docs/design_handoff_tvc_site/Sign-off list.md`.
- Whether to use the two group photos (removed from the site build; originals are in `docs/`).
