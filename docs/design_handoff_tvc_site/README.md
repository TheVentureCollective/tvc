# Handoff: The Venture Collective website

## Overview
A five-page marketing site for The Venture Collective (TVC), an early-stage venture firm. Pages: Home, Approach, Portfolio, ICYMI (news), Contact. It ships as a static site on Netlify, with code on GitHub and a Netlify Forms contact form that delivers to hello@theventurecollective.com.

Dates: all content in by Fri 3 Oct 2026, launch Fri 10 Oct, handover to Cat Middleton Mon 13 Oct.

## About the design files
Everything in `design/` is a **design reference built in HTML**. It shows the intended look and behavior but is not production code. `TVC Site.dc.html` runs on a prototype runtime (`support.js`) and should not be deployed.

The task is to rebuild the site as a real static site. No codebase exists yet. Recommended: **Astro** with static output. Reasons:
- It renders plain HTML at build time, which Netlify Forms requires to detect the form.
- It ships almost no JavaScript, so you add only the small interactive pieces listed below.
- Content can live in one data file, matching `content/site-data.js`.

Plain HTML with a little vanilla JS would also work. Avoid a client-rendered SPA, because Netlify can't detect forms that are rendered client-side.

To view the reference, open `design/TVC Site.dc.html` in a browser from a local server (for example `npx serve design`). Switch pages with `#home`, `#approach`, `#portfolio`, `#icymi`, `#contact`.

## Fidelity
**High fidelity.** Colors, type, spacing, copy and motion are final unless `Sign-off list.md` marks them open. Match them exactly.

The site uses TVC's brand. Do not apply the Pinecone design system.

## Design tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| bg | `#1B1019` | Page background (deep aubergine) |
| surface | `#2B1B27` | Hover fills, active panels, image and photo backgrounds |
| fg | `#ECECEE` | Primary text, filled-button background |
| fg-muted | `#9B8D98` | Body copy in cards, labels, footer |
| fg-filter | `#B4A8B2` | Inactive filter-chip text |
| placeholder | `#6B5E69` | Input placeholder |
| accent | `#FF8402` | Orange: eyebrows, numbers, the period ending headings, hover, focus, arrows |
| accent-soft | `#FFB066` | Tag pills (IPO, Exit, Unicorn, Active), form error text |
| line | `rgba(236,236,238,0.10)` | Section dividers |
| line-2 | `rgba(236,236,238,0.12)` | Row and card dividers, grid gutters |
| line-3 | `rgba(236,236,238,0.20)` | Top rule over lists and grids, chip borders |
| line-input | `rgba(236,236,238,0.25)` | Input borders, monogram rings |
| line-button | `rgba(236,236,238,0.40)` | Outline-button borders |

### Type
- **Figtree** (Google Fonts; 400, 500, 600; italic 400 and 500) for all text.
- **IBM Plex Mono** (400, 500) for eyebrows, labels, numbers, dates, tags and the footer.
- Antialiased (`-webkit-font-smoothing: antialiased`).

| Role | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| H1 (page hero) | `clamp(46px, 7.4vw, 108px)` | 500 | 0.98 | -0.045em |
| H2 (section) | `clamp(34px, 4.2vw, 58px)` | 500 | 1.04 | -0.035em |
| Approach principle title | `clamp(28px, 3.2vw, 44px)` | 500 | 1.08 | -0.03em |
| Stat number | `clamp(44px, 4.6vw, 68px)` | 500 | 1 | -0.045em, tabular-nums |
| Lead paragraph | `clamp(17px, 1.4–1.5vw, 19–20px)` | 400 | 1.5–1.55 | 0 |
| Card title | 20–26px | 500–600 | 1.3 | -0.015em |
| Body (muted) | 14–15px | 400 | 1.55–1.6 | 0 |
| Eyebrow (mono) | 12px | 400 | — | 0.14em, uppercase |
| Label or tag (mono) | 10–11px | 400 | — | 0.12–0.14em, uppercase |

Headings use `text-wrap: balance` and paragraphs use `text-wrap: pretty`. Every H1 and H2 ends with an orange period: `<span style="color:#FF8402">.</span>` (a question mark in the footer CTA).

### Layout
- Content max-width is **1320px**. Side padding is `clamp(20px, 4vw, 40px)`.
- Section padding is `clamp(60px, 8vw, 96px)` vertical. Page heroes use `clamp(72px, 11vw, 160px)` top padding.
- Every section has a 1px top border in `line`.
- **Split grid** (most sections): `minmax(0,5fr) minmax(0,7fr)`, gap `28px 64px`. Heading on the left, lead text on the right.
- **Corner radius is 0 everywhere** except circles (monograms, founder photos).
- No shadows and no gradients, except the marquee's edge fade mask.

### Breakpoints
| Name | Width | Changes |
|---|---|---|
| Phone | ≤640px | Everything goes to one column. The hero rotating word drops to its own line. Filter chips use short labels. The ICYMI arrow is hidden. |
| ≤860px | | 3-column grids become 2 columns. The ICYMI lead story stacks. |
| Tablet | ≤1080px | Split grid goes to one column. 4-column grids become 2 columns. "Where we invest" switches from sticky scroll to accordion. |

### Buttons
- **Filled:** height 48px, padding `0 24px`, background `#ECECEE`, text `#1B1019`, 15px weight 600. Hover background `#FF8402`.
- **Outline:** same size, 1px `line-button` border, text `#ECECEE`. Hover border `#ECECEE`.
- **Text link:** 15px weight 600, 1px `#FF8402` bottom border, 3px padding-bottom, with a trailing ↗.
- Hover transitions are `.2s`. Card background transitions are `.45s`.

## Global components

**Header:** a 1px bottom border, with the wordmark "The Venture Collective." on the left (18px, 600, -0.02em, orange period). Nav links on the right are Home, Approach, Portfolio, ICYMI and "Get in touch" (14px, 500). The current page shows in `#FF8402`. "Get in touch" always has a 1px bottom border, `line-button` by default and orange on the Contact page. The header is not sticky.

**Footer CTA** (every page except Contact): H2 "Building in a legacy industry?" with a filled "Get in touch" button.

**Footer bar:** 10px mono, uppercase, `#9B8D98`. "© 2026 The Venture Collective" on the left. Home, Approach, Portfolio, ICYMI, LinkedIn ↗ and Medium ↗ on the right.
- **Footer LinkedIn should be** `https://www.linkedin.com/company/hellotvc` (pending Cat's confirmation). The reference still shows an older URL.
- **Medium should be** `https://medium.com/@helloTVC`.

**Eyebrow pattern:** each section on Home has a numbered mono eyebrow in orange ("01 — Who we are" through "08 — News").

## Screens

### Home (`#home`)
1. **Hero:** eyebrow "Early-stage venture · Pre-seed to Series A". The H1 has three lines: "Backing founders / transforming *[word]* / industries." The italic word (Figtree italic 400) rotates through `heroWords`. A filled "Meet the portfolio" button and an outline "Get in touch" button sit in the right column of the split grid.
2. **Logo marquee:** every company logo with a logo file, in a row of white logos at 0.7 opacity (1.0 on hover), each linking to the company. The edges fade with a mask: `linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)`. The row moves at a constant 140s per loop and pauses on hover. Logos are sized optically (see Assets).
3. **01 Who we are:** split grid. The right side has three rows (label 200px | body) with a source line underneath.
4. **02 Market:** four stat columns that count up from 0 when scrolled into view, with a source line.
5. **03 Where we invest:** four industries with icons (Lucide: factory, server, dna, shield-check at stroke 1.5).
   - **Desktop, sticky scroll:** the left column (5fr) is sticky at top 48px and holds the H2, the lead and a four-row index. The active row turns its number orange, its title white and shows a 2px orange bar. The right column (7fr) has four panels, each `min-height: 72vh`. The active panel has the `#2B1B27` background at full opacity. The others are transparent at 0.35 opacity. A panel becomes active when it crosses the middle 10% of the viewport. Clicking an index row smooth-scrolls to its panel.
   - **≤1080px, accordion:** rows open on hover or tap. They animate through `grid-template-rows` from 0fr to 1fr over .45s. An open row shows an "Active" pill, the body and portfolio chips.
6. **04 Approach:** four numbered principles (`short` text), with a link to the Approach page.
7. **05 Portfolio snapshot:** the 8 companies marked `featured` (ordered 1–8) in a 4-column grid with 1px gutters. Each card has a logo, an optional tag pill, the name, a description (`short`) and a sector footer with ↗. Cards fill to `#2B1B27` on hover. A "View all companies" link follows.
8. **06 Team:** 9 people in a 4-column grid.
   - Square photo, grayscale with `contrast(1.05)`, `object-position: top center`, scaled to 1.04 from the top to crop out light borders.
   - No photo: an initials monogram in a ring.
   - Below: name (19px, 600), role (mono, orange) and three bio lines. The link reads "LinkedIn ↗" by default; Nicole's says "Wikipedia ↗".
9. **07 Venture partners:** 9 people in 3 columns. Each has a 48px initials circle, name and bio, and links out.
10. **08 News:** 3 cards. Each has a 16:10 grayscale image (Power100 uses `contain` on white), source, title, body and link. A "View all updates" link follows.

### Approach (`#approach`)
1. **Hero:** "Being early is the easy part."
2. **Principles:** four large rows (number + `longTitle || title` | `body` + an orange mono "proof" line).
3. **What we actually do:** four support cards (People, Customers, Risk, Capital).
4. **From our founders:** three quote cards. Each has a 56px circular grayscale photo, the company logo, the quote and the name and role. Colin and Pedro have no photos yet.
5. **From intro to term sheet:** a four-step timeline (Week 0–3). Each step has a 9px orange square plus a hairline. Then a filled "Pitch us" button and an outline "See who we've backed" button.

### Portfolio (`#portfolio`)
1. **Hero:** "Nuclear reactors. Space stations. Longevity."
2. **Filter bar** (sticky at top 0, bg colored): "All" plus the four sectors.
   - Chips are 34px tall. The active chip is filled orange with dark text. Inactive chips have a `line-input` border and `#B4A8B2` text.
   - Phone labels: Industrial, Energy & AI, Healthcare & Bio, Aerospace & Defense.
   - A count on the right reads "N companies".
3. **Grid:** 3 columns with 1px gutters. Cards are at least 300px tall and show a logo (or a mono monogram), a tag, name, description, sector and "Visit ↗". The arrow turns orange on hover.
   - Hover images are **out of scope**. Ignore `hoverImg`.

### ICYMI (`#icymi`)
1. **Hero:** "The latest and greatest." with a "Read us on Medium ↗" link (`https://medium.com/@helloTVC`).
2. **Lead story:** image on the left (7fr) and text on the right (5fr), stacking at ≤860px.
3. **News list:** rows of [32px source monogram + date and source] | [title + body] | ↗. The left column is 260px.

### Contact (`#contact`)
1. **Hero:** "Tell us what you're building." Lead: "Send a short note and the team will get back to you."
2. **Form** (max-width 880px, two columns, one on phone): Name\* and Email\* side by side, then Company, then "What are you building?"\* as a 5-row textarea with the placeholder "A few lines is plenty. Links to a deck are welcome.", then a filled "Send" button.
   - Inputs are 52px tall with a transparent background, a 1px `line-input` border, no radius and 16px text. The border turns orange on focus.
   - Labels are 10px mono uppercase in `#9B8D98`.
   - The booking or calendar panel was **removed**. No Calendly for now.

### Mobile fixes (not in the reference, do these in the build)
The reference reflows, but it hasn't been tested on a phone. Fix these, then test at 375px and 390px width on real iOS Safari and Android Chrome:
1. **Hero H1 overflow:** each line is `white-space: nowrap`, so "Backing founders" can be wider than the screen at the 46px minimum. On phone, allow wrapping or lower the minimum size (for example `clamp(38px, 11vw, 108px)`). There must be no horizontal scroll.
2. **Mobile nav:** below 640px, collapse the five header links into a menu button (44px tap target) that opens a full-width panel using the same link styles. The current page stays orange.
3. **Tap targets:** make every interactive element at least 44px tall on touch, including filter chips (currently 34px), footer links, venture partner rows and nav links.
4. **Portfolio filter bar:** on phone, keep the chips in a single row that scrolls sideways (`overflow-x: auto`, no visible scrollbar, `scroll-snap` optional) so the sticky bar stays one row tall. Hide the company count or move it beside the chips.

## Interactions and behavior
- **Scroll reveal** (`design/js/motion.js`): elements with `data-reveal` start at opacity 0 and `translateY(20px)`, then animate in over `.8s cubic-bezier(.2,.7,.2,1)` when 12% visible (rootMargin `0 0 -6% 0`). They animate once only. `data-delay` staggers siblings by grid column, about 90ms per step by default. This file is plain JS and can be reused as-is.
- **Hero word swap:** every 2.8s the word fades out and moves up 0.2em over .38s, the next word enters from 0.2em below, then settles.
- **Count-up:** stats animate from 0 to their value over 1.4s with an ease-out cubic curve, starting at 40% visibility. They keep their prefix, suffix and decimal places ("$47.4B").
- **Reduced motion:** when `prefers-reduced-motion: reduce` is set, skip reveals, the word swap and the count-up, and show final values. The marquee should also stop.
- **Contact form (Netlify):**
  - The form markup must exist in the built HTML: `name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"`, with hidden `form-name=contact` and a hidden `bot-field` honeypot.
  - Submit with `fetch("/", {method: "POST", body: URLSearchParams})`.
  - States:
    - idle
    - sending: the button reads "Sending…" and is disabled
    - sent: the form is replaced by a panel reading "Thanks. We have your note." on `#2B1B27`
    - error: inline `#FFB066` text reading "Couldn't send just now. Try again, or email hello@theventurecollective.com."
  - In Netlify, add an email notification to hello@theventurecollective.com (Site settings > Forms > Form notifications).
- **Routing:** the reference uses hash routes in one file. Build five real pages (`/`, `/approach`, `/portfolio`, `/icymi`, `/contact`) and set `<title>` and meta description per page.

## State (client-side only)
- Portfolio: the active sector filter.
- Home: the active industry index (from scroll position or hover).
- Contact: form status.
Everything else is static content.

## Content
`design/content/site-data.js` holds all copy and data. Move it into the new project's content layer as is. Fields:
- **companies:** name, logo slug, ratio, desc, short (Home), sector, tag, homeTag, featured (1–8), url
- **team:** name, role, photo, bio[], optional url and linkLabel
- **partners, points, stats, industries, principles, supports, quotes, steps, homeNews, lead, news**
- **heroWords, sectors**
- `TVC_UTIL` holds the helpers: initials, `logoBox` optical sizing and responsive columns.

### Content changes not yet in the reference (approved by Cat)
- **Concert Bio:** the URL should be `https://www.concert.bio/`. The data still points to liferaft.cc.
- **Terrion:** add it as a new portfolio company in Aerospace, Defense & Critical Materials. Logo, one-liner and URL are still to come from Cat. It already appears in the Home industry chips.
- **Ines:** delete `assets/team/ines.jpeg`. She is not on the site.
- **Footer links:** LinkedIn and Medium, as listed above.
- **Contact:** remove the `contact.bookingUrl` and `bookingLabel` fields.

## Assets
- `design/assets/logos/white/*.png`: white-on-transparent trimmed logos (53). `ratio` in the data is width ÷ height.
  - **Optical sizing:** `h = √(area / ratio)`, `w = h × ratio`, then cap to the max size.
  - Area and max (width × height) by placement:
    - marquee: area 2200, max 150 × 44
    - Home card: area 3400, max 160 × 52
    - Portfolio card: area 3800, max 180 × 58
    - quote card: area 1800, max 120 × 40
  - Use `phasic-energy-trim.png` for Phasic.
- `design/assets/team/`: headshots shown in grayscale. `general-partners-1/2.jpg` are group photos with no placement yet. `ines.jpeg` should be deleted.
- `design/assets/founders/augie.jpeg`: founder quote photo.
- `design/assets/news/`: Home news and ICYMI lead images.
- Icons: Lucide (factory, server, dna, shield) at stroke 1.5. Arrows are the text glyph ↗.
- Fonts: Google Fonts (Figtree, IBM Plex Mono).

## Still missing (from Cat)
- Domain registrar and login
- Headshots for Nicole, Colin and Pedro. Use initials or drop the photo spots if they don't arrive by 3 Oct.
- Terrion logo, description and URL
- Confirmation of the LinkedIn URL
- Whether to use the two group photos
- Open copy approvals: see `Sign-off list.md`

## Files
- `design/TVC Site.dc.html`: all five pages (reference only).
- `design/content/site-data.js`: all content.
- `design/js/motion.js`: scroll reveal and stagger (reusable).
- `design/support.js`, `design/image-slot.js`: prototype runtime only. Don't port.
- `design/assets/`: images used by the site.
- `Sign-off list.md`: copy and link approvals with their status.
