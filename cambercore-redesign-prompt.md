# Camber & Core Systems — Complete Website Redesign

You are a senior product designer + frontend engineer redesigning the entire **cambercore.ca** website from scratch. Use the existing codebase as the technical scaffold (framework, build, routing, deployment), but treat **every page's visual design, layout, copy hierarchy, and component system as new work**. Do not preserve the current visual design. Do not preserve the current section ordering on the homepage. Start from the brand and from first principles.

---

## 1. Who Camber & Core Is (read this first, do not skip)

**Camber & Core Systems** is a Victoria, BC-based engineering firm. We build geospatial systems, LiDAR solutions, NG9-1-1 compliance software, and custom GIS tooling for **local governments and municipalities across British Columbia**.

**Tagline:** *Secure Local Intelligence.*

**Audience:** Municipal CIOs, GIS managers, emergency services directors, regional district planners, procurement officers. People responsible for public safety infrastructure, NENA compliance, and government RFPs. They are technical, careful, and skeptical of marketing fluff.

**Positioning:** Technical authority + public-sector trustworthiness + quiet confidence. Professional enough for government procurement, modern enough to signal innovation. We are not a flashy SaaS startup. We are not a consumer brand. We are not a freelance agency.

**Tonal anchors:** Think Esri, Mapbox enterprise, Palantir Foundry, McKinsey Digital — restrained, premium, technical, serious. **Not** Stripe, Linear, or Vercel (too playful/devtool-feel). **Not** typical consulting firm sites (too corporate-generic). **Definitely not** Bootstrap-era IT-services sites with cartoon illustrations.

---

## 2. Brand System (this is non-negotiable — match it exactly)

### Colors

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#0F1B2D` | Primary background (dark sections), logo, primary text on light |
| `--navy-deep` | `#0B1426` | Deeper navy for website backgrounds, dark-mode contexts |
| `--gold` | `#C9A24D` | Primary accent — ampersand, CTAs, dividers, highlights, eyebrows |
| `--gold-light` | `#D4B96A` | Decorative lines, subtle accents, hover states |
| `--gray-dark` | `#4A4A4A` | Body text on light backgrounds |
| `--gray-medium` | `#7A7A7A` | Secondary text, captions, metadata |
| `--white` | `#FFFFFF` | Page backgrounds, reversed text on dark |
| `--off-white` | `#FAFAFA` | Soft section backgrounds, card surfaces on light |
| `--border` | `#E8E8E8` | Hairline dividers on light |
| `--border-dark` | `rgba(201, 162, 77, 0.15)` | Hairline dividers on dark (gold at low opacity) |

**Gold is the only accent color.** Do not introduce green, blue, purple, or any other accent. Gold is rare and intentional — used for the ampersand, the divider rules, CTA buttons, eyebrow labels, and key highlighted words. Never use gold for body text or large fills.

### Typography

| Use | Font | Weight | Notes |
|---|---|---|---|
| Headings, logo, UI labels | **Calibri** (web fallback: `'Segoe UI', system-ui, sans-serif`) | 700 Bold | All caps for major H1/H2 section titles, sentence case for H3 |
| Body copy | **Georgia** (web fallback: `Georgia, 'Times New Roman', serif`) | 400 Regular | Yes, a serif body. This is intentional — it signals legal/government document gravitas. |
| Monospace (technical callouts, code, coordinates) | `'IBM Plex Mono', 'JetBrains Mono', monospace` | 400 / 500 | Reserved for IDs, technical specs, timestamps, code blocks |

**Type scale (desktop):**
- Hero display: 72px Calibri Bold, letter-spacing -1px, line-height 1.05
- H1: 48px Calibri Bold, letter-spacing -0.5px
- H2: 32px Calibri Bold
- H3: 22px Calibri Bold (often in gold)
- Body large: 18px Georgia, line-height 1.7
- Body: 16px Georgia, line-height 1.7
- Small: 14px Georgia
- Eyebrow: 12px Calibri Bold, letter-spacing 3px, uppercase, gold

**Mobile:** Hero 44px, H1 32px, H2 24px, H3 18px, body 16px.

### The signature device — the gold rule

The brand uses a **thin gold horizontal rule** as a recurring structural element. Use it generously:
- Under section titles (80px wide, 3px tall, gold, sits 24px below title)
- Between footer columns
- As the divider between hero copy and the CTA pair
- Under page numbers, dates, and metadata in headers

This rule is the single most distinctive brand asset. Use it like a signature.

### The ampersand

The "&" in "CAMBER & CORE" is **always gold** when the wordmark appears in full color on a light background, on dark, or anywhere else color is permitted. Single-color treatments (all navy on light, all white on dark) are allowed but the gold ampersand is the default. Treat the ampersand as a brand asset, not as a character.

---

## 3. Layout & Composition Principles

- **Generous whitespace.** Government buyers read carefully. Tight layouts feel cheap. Default section padding: 120px top/bottom desktop, 64px mobile.
- **Max content width: 1200px.** Centered. Wider feels web-ad-y.
- **Asymmetric grids over symmetric ones.** 7/5 or 8/4 column splits are more interesting than 6/6.
- **Restraint over decoration.** No gradient overlays on photos. No floating shapes. No "blob" backgrounds. No emoji. No cartoon illustrations under any circumstance.
- **One hero image or visual per page maximum.** The rest of the page is type and structured content.
- **Numbers are heroes.** Big stats (4+, 75+, 99%, 6+) get their own treatment — 64–96px Calibri Bold with a gold underline rule, label in 12px caps below.

### What to never do

- ❌ No cartoon people / vector illustrations of devs at laptops (this is the #1 way IT-services sites date themselves)
- ❌ No gradient backgrounds outside the gold-on-navy CTA buttons
- ❌ No floating particle effects, animated backgrounds, or "starfield" hero sections (we are not a crypto company)
- ❌ No purple, teal, neon green, or any non-brand color
- ❌ No emoji in UI copy
- ❌ No "Lorem ipsum" — write real content or label clearly as `{{placeholder}}`
- ❌ No drop shadows on the logo
- ❌ No stock photos of generic business meetings or handshakes

---

## 4. Pages to Redesign

Redesign all six pages. For each, produce a complete responsive layout with real copy (pulled from the existing site at cambercore.ca where applicable, sharpened where needed).

### 4.1 Home (`/`)

**Section order (this is intentional — do not reorder without reason):**

1. **Top bar** (thin, navy bg, 36px tall): centered eyebrow text in gold mono `SERVING BC LOCAL GOVERNMENTS` with phone number right-aligned in white.
2. **Nav** (white bg, 80px tall): wordmark left, links centered (Services, Projects, Products, About), `Contact Us` button right (gold fill, navy text, no border radius — sharp rectangle).
3. **Hero** (off-white bg, 120px padding):
   - Eyebrow: `SECURE LOCAL INTELLIGENCE`
   - Headline (72px Calibri Bold): *"Engineering precision for public service."* — with "precision" highlighted by a 3px gold underline rule.
   - Sub (18px Georgia, 60ch max-width): the existing site's intro, rewritten tighter: *"We build the geospatial systems, LiDAR solutions, and custom software that BC local governments depend on for smarter decisions and safer communities."*
   - CTA pair: primary `Explore our work →` (gold fill, navy text, sharp rectangle), secondary `Get in touch` (no fill, navy text, navy 1px border).
   - To the right of the headline column: a **single hero visual** — a low-poly geodesic mesh rendering of Vancouver Island or the Saanich Peninsula coastline, rendered in navy line-work on the off-white bg with gold highlight points marking key client municipalities (North Saanich, Columbia Shuswap Regional District). This is the signature visual. If you cannot render this in CSS/SVG, scaffold a placeholder SVG and add a clear `<!-- TODO: replace with geodesic BC coastline render -->` comment.
4. **Trust bar** (white bg, 80px padding): centered eyebrow `TRUSTED BY` then a horizontal row of 4–6 client names in navy Calibri Bold 18px, separated by thin gold vertical rules. Names: `District of North Saanich`, `Columbia Shuswap Regional District`, `URBAN Systems`. No logos — just typeset names. Government clients rarely allow logo use, and typeset names actually look more premium.
5. **Stats band** (navy bg, 120px padding, white text):
   - Eyebrow `BY THE NUMBERS` in gold
   - 4-column grid: `4+ Government Clients`, `75+ Hours Saved per Project`, `99% Data Accuracy`, `6+ Active Projects`
   - Each stat: 96px Calibri Bold white, 80px gold rule under, 12px caps gold label below.
6. **Services overview** (off-white bg, 120px padding):
   - H2 `What we do` left-aligned, gold rule under.
   - 2x3 grid (2 rows, 3 columns) of service cards: LiDAR & Remote Sensing, GIS & Spatial Analysis, NG9-1-1 Readiness, Custom Software, Data Automation, Compliance & QA.
   - Card style: white bg, 1px `--border` stroke, 40px padding, no shadow, no rounded corners. Title in Calibri Bold 22px navy. Description in Georgia 16px gray-dark. `Learn more →` in 14px Calibri Bold gold at bottom. Hover: 1px border becomes gold.
7. **Featured project — case study** (white bg, 120px padding):
   - H2 `Featured project` with gold rule.
   - Two-column 7/5 split: left column is a project image (placeholder for now) of a LiDAR-derived terrain map; right column has the project title (H3 navy), client name (gold eyebrow), 3-paragraph case description in Georgia, and a key metric in 48px Calibri Bold.
   - Below: `View all projects →` link in gold.
8. **Product spotlight — NG911 AutoConform** (navy-deep bg, 120px padding):
   - Eyebrow `OUR PRODUCT` in gold
   - H2 white `NG911 AutoConform`
   - Two-column: left has 4 feature bullets (Schema Guard, AI Field Deriver, Versioned Fix-Proposals, Dashboards & Audit Logs) with small gold checkmark-style markers. Right has a stylized terminal/code block on `--navy` bg showing the `ng911 validate` output exactly as on the current site, but in `IBM Plex Mono` with `✓` checks in gold instead of green.
   - CTA: `Request a demo →` in gold-on-navy.
9. **About teaser** (off-white bg, 100px padding):
   - Two-column 5/7: left is H2 `Engineering precision for public service.` (same line as hero, intentional refrain). Right is 3 short paragraphs about the team, founded 2024, Victoria BC, UVic Engineering roots.
   - Bottom row: 4-column meta block — Location / Focus / Founded / Education — each with gold eyebrow label and navy value, separated by thin gold vertical rules.
10. **CTA band** (navy bg, 80px padding):
    - H2 white centered: `Ready to modernize your geospatial operations?`
    - Sub in `--gray-medium`
    - Single CTA button `Start a conversation →` in gold.
11. **Footer** (navy-deep bg, 80px padding): see Section 5 below — used across all pages.

### 4.2 Services (`/services`)

- Hero: eyebrow `SERVICES`, H1 `Geospatial solutions, end to end.`, subhead, thin gold rule.
- Six full-width service sections, alternating image-left / image-right with text. Each: H2 service name, gold rule, 2-paragraph description in Georgia, bulleted capability list with gold dot markers, `Get in touch about [service] →` link.
- Six services: LiDAR & Remote Sensing, GIS & Spatial Analysis, NG9-1-1 Readiness, Custom Software, Data Automation, Compliance & QA.
- Bottom CTA band (reuse from home).
- Footer.

### 4.3 Projects (`/projects`)

- Hero: eyebrow `PROJECTS`, H1 `Work delivered for BC communities.`, gold rule, sub.
- Filter row (sticky on scroll): horizontal nav of filter pills — `All`, `NG9-1-1`, `LiDAR`, `GIS`, `Cartography`, `Automation`. Pill style: sharp rectangles, navy border 1px, navy text. Active state: gold fill, navy text. No rounded corners.
- Project grid: 3 columns, 12+ project cards.
- Card style: white bg, 1px border, 32px padding. Top: small project image (16:10 aspect, placeholder). Below: tag row (mono 11px gold caps, gap 8px), H3 project name navy, client name in gold mono eyebrow, 2-line description, gold key-metric line, `View case study →`.
- Featured cases: 4 known projects from current site — NG9-1-1 Readiness (North Saanich), Addressing Data Aggregation (Columbia Shuswap), LiDAR Processing & DEM Generation (North Saanich), Steep Slope Map Production (North Saanich).
- Footer.

### 4.4 Products (`/products`)

- Hero: eyebrow `PRODUCTS`, H1 `Purpose-built tools for public sector GIS.`, sub.
- **NG911 AutoConform feature section** (navy-deep bg, full-bleed): bigger version of the homepage spotlight. Left column has long-form description; right has a multi-screen mockup placeholder. Features listed as a 2x2 grid with gold icons (use simple line icons, navy outline, no fill). Below: feature comparison table with gold header bar, alternating row backgrounds (white / off-white), 8 capability rows.
- **Roadmap teaser**: H2 `What's next`, 3-column grid of upcoming products as faded/placeholder cards labeled `Coming 2026`.
- CTA band.
- Footer.

### 4.5 About (`/about`)

- Hero: eyebrow `ABOUT`, H1 `Built in Victoria. Engineered for BC.`, sub.
- **Mission** section: H2 `Our mission` with gold rule, single 3-paragraph block in Georgia 18px (the "Engineering precision for public service" content expanded).
- **Values** section (off-white bg): H2 `What we stand for`. 4-column grid of value cards — Precision, Trust, Service, Craft. Each: small gold number `01–04` in mono eyebrow, H3 value name navy, 2-line description Georgia.
- **Founder section**: photo placeholder left (4:5 aspect, sharp corners), bio right. H3 John Soliman, gold mono eyebrow `Founder & Principal`, 2-paragraph bio in Georgia, capability tags row (GIS, LiDAR, Node.js, Geospatial) in mono pills.
- **Company meta block**: 4-column with gold-rule separators — Location, Focus, Founded, Education.
- **Press / mentions** (optional, if you have any): a thin row of news outlet names, all navy Calibri Bold, gold vertical rule separators.
- CTA band.
- Footer.

### 4.6 Contact (`/contact`)

- Hero: eyebrow `CONTACT`, H1 `Let's talk about your data.`, sub.
- **Two-column 7/5 layout:**
  - Left (7): contact form on white bg, 1px `--border` stroke, 48px padding, no border radius. Fields: Name, Organization, Role, Email, Phone, Service of interest (dropdown of 6 services), Project description (textarea), `How did you hear about us` (dropdown). Field style: 1px border, navy text, gold focus state, label-on-top in Calibri Bold 12px caps. Submit button: full-width, gold fill, navy text Calibri Bold 16px, sharp corners, `Send your inquiry →`.
  - Right (5): contact details panel on off-white bg, 48px padding.
    - H3 `Reach us directly`
    - Phone, email, office address (Victoria, BC) — each with gold mono eyebrow label
    - H3 `Office hours` with M–F 9–5 PT
    - H3 `Procurement / RFP inquiries` with note that we respond within 1 business day
    - Bottom: thin gold rule and small text `Camber & Core Systems Inc.` in mono
- Footer.

---

## 5. Shared Components Spec

### Header / Nav
- White background, 1px bottom border `--border`.
- Wordmark left (CAMBER & CORE in Calibri Bold 22px navy, gold ampersand, with `S Y S T E M S` in 9px gray mono letter-spacing 6px underneath).
- Center links: `Services Projects Products About` — Calibri Medium 15px navy, gap 32px. Active page has gold 2px underline directly under the link, no offset.
- Right: `Contact Us` button — gold fill, navy text, sharp rectangle, 14px 24px padding.
- Mobile: hamburger right, wordmark left. Drawer opens full-screen with navy bg, white links 32px stacked.

### Footer
- `--navy-deep` background, white text, 80px padding.
- 4 columns: (1) wordmark + tagline + small "© 2026 Camber & Core Systems Inc."; (2) Services links; (3) Company links; (4) Contact info (Victoria BC, phone, email).
- Above the columns: thin gold rule.
- Below the columns: thin gold rule, then a row with `Privacy Policy` `Terms of Service` left, and `cambercore.ca` right in gold mono.

### Buttons
- **Primary:** gold fill (`--gold`), navy text, Calibri Bold 15px, 14px / 28px padding, sharp rectangle (0 radius), no shadow. Hover: `--gold-light` fill.
- **Secondary:** transparent fill, 1px navy border, navy text. Hover: navy fill + white text.
- **Inverse (on dark sections):** white fill, navy text. Hover: gold fill, navy text.
- **Text link:** navy text Calibri Medium with `→` arrow, gold on hover with arrow translateX(4px).

### Form fields
- 1px `--border` stroke, 0 radius, 14px / 16px padding, Georgia 16px text, navy color.
- Label above in Calibri Bold 12px caps gray-dark, letter-spacing 2px.
- Focus state: border becomes `--gold` 2px (no glow, no shadow).
- Error state: border becomes `#C0392B` 2px, error message below in 13px navy.

### Cards (universal)
- White or off-white background, 1px `--border` stroke, 0 radius, 32–40px padding, no shadow.
- Hover: border becomes `--gold` 1px (no transform, no shadow).

### Eyebrow labels
- Calibri Bold 12px (`IBM Plex Mono` when used as a technical callout), uppercase, letter-spacing 3px, color gold (on light) or gold (on dark).
- Always followed by 16px spacing then the heading.

### The gold rule (decorative)
- `<hr>` or `<div>`: 80px wide, 3px tall, `--gold` background, 0 border, 0 radius. Always 24px below its title.

### Stat block
- Layout: vertical stack, left-aligned.
- Value: 96px Calibri Bold (72px tablet, 56px mobile), color depends on bg.
- Gold rule directly under value.
- Label: 12px Calibri Bold caps, letter-spacing 3px, color gold.

---

## 6. Technical Requirements

- **Framework:** match the existing codebase (read package.json and infer — likely React, Next.js, Astro, or vanilla HTML/CSS — and stay within it). Do not migrate frameworks.
- **Styling:** use CSS variables for the brand tokens at `:root`. No Tailwind unless the project already uses it. If using Tailwind, extend the config to expose the brand colors as `navy`, `gold`, etc.
- **Fonts:** load Calibri via system stack with Segoe UI / system-ui fallback. Georgia is system-native. Self-host IBM Plex Mono from rsms.me or Google Fonts.
- **Accessibility:**
  - All interactive elements have visible focus states (2px gold outline, 2px offset).
  - Color contrast: navy on off-white passes AAA. Gold on white only used for accent text 14px+, gold on navy fine for all sizes.
  - Form labels are real `<label>` elements with `for` attributes.
  - Heading hierarchy is strict (one H1 per page, no skipping levels).
  - Skip-to-content link at top.
- **Responsive breakpoints:** mobile <640px, tablet 640–1024px, desktop >1024px. Mobile-first CSS.
- **Performance:** no client-side rendering for static content. Inline critical CSS. Images served as WebP with appropriate `sizes` attribute. No web fonts that aren't actually used.
- **No JavaScript libraries** for things CSS can do (no AOS, no jQuery, no animation libraries). If animation is needed, use CSS transitions only — 200ms ease-out is the default.
- **SEO:** meta description per page, OG tags, sensible page titles. Schema.org `Organization` markup in the homepage `<head>`.

---

## 7. Deliverables

Produce, in order:

1. **A brief written design rationale** (max 200 words) explaining how the redesign expresses the brand — *before* you write any code. This is to confirm direction.
2. The **CSS token file** (`tokens.css` or equivalent) with all brand variables.
3. The **shared layout** (header, footer, page shell).
4. The **six pages** in this order: Home → Contact → Services → Projects → Products → About. Home first (highest-leverage), Contact second (high-leverage and small).
5. A **README.md** documenting the brand system and how to add new pages or components.

After each page, **stop and summarize what you built** so I can review before you move on.

---

## 8. What Excellence Looks Like (calibration)

A reviewer comparing this redesign to the current cambercore.ca should immediately recognize:

- The site **feels more expensive** without using more visual elements (in fact, fewer)
- The brand is **unmistakably present** in every section (gold rules, the ampersand, the type pairing)
- A municipal CIO would feel **safe putting this in front of their council**
- It does not look like a SaaS landing page, a freelance portfolio, or a corporate template
- The geodesic BC coastline visual is **distinctive and ownable** — no other firm in the space has this

If your redesign feels generic, slick, or "modern startup-y," it is wrong. The reference points are government, civic, and editorial — not consumer tech.

---

**Start with the design rationale (step 1 of deliverables). Then wait for my approval before writing any code.**
