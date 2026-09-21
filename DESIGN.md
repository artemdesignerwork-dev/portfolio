---
name: Артем Мута — Portfolio
description: Quiet light-ground portfolio where large project mockups lead; one cobalt accent, hairline rules, no cards. One homepage plus five long-form case studies on the same system.
colors:
  paper: "#F4F4F2"
  paper-deep: "#EBEBE7"
  ink: "#121212"
  ink-2: "#4A4A47"
  ink-3: "#64645E"
  rule: "rgba(18,18,18,.10)"
  rule-2: "rgba(18,18,18,.18)"
  cobalt: "#1F3BE6"
  cobalt-ink: "#1027B4"
  cobalt-soft: "#E6E9FC"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(40px, 5.6vw, 76px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 46px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 30px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  subhead:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 30px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  body:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-compact:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "normal"
  caption:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
  mark:
    fontFamily: "Golos Text, Segoe UI, system-ui, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0"
rounded:
  focus: "4px"
  mark: "8px"
  logo: "14px"
  media: "20px"
  panel-compact: "22px"
  panel: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  gutter: "clamp(16px, 4vw, 48px)"
  column-gap: "clamp(16px, 2.5vw, 32px)"
  case: "clamp(32px, 4vw, 56px)"
  section: "clamp(56px, 7vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "52px"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 11px"
  case-frame:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.media}"
  figure-cell:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.logo}"
  brand-mark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.mark}"
    rounded: "{rounded.mark}"
    size: "28px"
  cta-panel:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "clamp(32px, 5vw, 72px)"
  contact-strip:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.media}"
    padding: "clamp(24px, 3vw, 36px)"
  callout:
    backgroundColor: "{colors.cobalt-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.media}"
    padding: "clamp(22px, 2.5vw, 32px)"
    width: "68ch"
  meta-list:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "14px 0"
  nav:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    height: "64px"
  nav-back:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  nav-back-hover:
    textColor: "{colors.ink}"
---

# Design System: Артем Мута — Portfolio

## Overview

**Creative North Star: "The Quiet Gallery Wall"**

The site is a light, cool off-white wall. On the homepage five large project mockups hang in a single column; each case study page is a long-form read where the screens carry the argument. The interface is deliberately recessive: near-black ink for everything that speaks, one cobalt accent that appears only at the point of action, and hairline rules instead of boxes to divide the wall into rooms. Density is editorial rather than dashboard: generous vertical rhythm between sections, tight-tracked heavy headings, and running text held to a measure (58–62ch on the homepage résumé, 68ch in case prose) so the pages read like a printed document.

The world refuses the dark hero with glow, the bento-card grid, and the Behance-style full-bleed image dump. Content is not boxed. Exactly three filled surfaces exist across the whole site: the cobalt closing panel on the homepage, the cobalt contact strip that ends every case page, and the pale cobalt callout that holds a case's key research findings. Rounded corners belong to imagery, pills, and those three fills. Depth exists only as a response to hover: a case frame lifts 6px and gains a soft shadow, a prev/next thumbnail lifts 4px, then everything settles flat again.

**Key Characteristics:**
- Cool off-white ground with near-black ink; two mid-grays for secondary and tertiary text
- One cobalt accent reserved for hover, focus, selection, the status dot, and the two cobalt contact fills; its pale tint is used once per case page, for the callout
- Single family (Golos Text, variable 400–900): heavy tight-tracked display, 17px regular body
- Hairline 1px rules at 10% ink divide sections, list rows, meta rows, and the sticky nav; no borders on content blocks
- 12-column grid: 7/5 split for hero and cases, 4/8 for résumé sections, 8/4 for the case hero; case prose at 68ch with figures breaking out to the full container
- Flat at rest; shadow and lift only on hover; one blur-to-sharp reveal per section or figure; long screens scroll inside their own frame

## Colors

A near-monochrome ink-on-paper palette with a single saturated cobalt held back for action, and one pale cobalt tint that appears exactly once per case page.

### Primary
- **Cobalt** (`{colors.cobalt}`): button hover fill, focus ring, text selection, the "open to projects" status dot, the full-bleed closing panel on the homepage, and the contact strip at the foot of every case page. It is never a rest-state text color on the light ground.
- **Cobalt Ink** (`{colors.cobalt-ink}`): darker cobalt used only as the hover color of inline text links and the "Открыть кейс" case link, where it must read as text against paper.
- **Cobalt Soft** (`{colors.cobalt-soft}`): the callout ground inside case prose, holding the key findings of a research section in full Ink. It is the only tinted content surface in the system and is used at most once per page; it never carries a border, a shadow, or cobalt text.

### Neutral
- **Paper** (`{colors.paper}`): page ground, nav ground (at 82% with backdrop blur), text on ink-filled buttons and the brand mark.
- **Paper Deep** (`{colors.paper-deep}`): rest fill behind every image frame while the raster loads: homepage case frames, case hero, single figures, grid cells, in-frame scroll containers, and the horizontal-scroll strip on phones.
- **Ink** (`{colors.ink}`): all primary text, headings, primary button fill, brand mark, hover-arrow disc, nav-link underline, pull quotes, callout text, result paragraphs, and bold runs inside case prose.
- **Ink 2** (`{colors.ink-2}`): secondary text: the role line in the H1, muted intro paragraph, case lede, case and job descriptions, case prose paragraphs and list items, nav links and the back link at rest, the status label.
- **Ink 3** (`{colors.ink-3}`): tertiary text: h4 labels and `.label` lines, meta-list terms, dates, captions and figure hints, step and list counters, prev/next direction lines, footer, list bullet dashes.
- **Rule** (`{colors.rule}`): 1px hairline between sections, list rows, jobs, meta-list rows, the persona block top edge, the result block top edge, prose rules, the nav bottom edge, and chip borders at rest.
- **Rule 2** (`{colors.rule-2}`): stronger hairline for ghost-button and tag borders, chip border on hover, the rest-state underline of inline links, and the top edge of each prev/next link.
- **White** (`{colors.white}`): chip fill, light button fill, all text inside the cobalt panel and contact strip.

### Named Rules
**The One Cobalt Rule.** Cobalt is a response, not a decoration. On the light ground it appears only on hover, focus, selection, and the 8px status dot; the only rest-state cobalt surfaces are the two contact fills (homepage closing panel, case contact strip), and each page carries exactly one of them.

**The One Tint Rule.** Cobalt Soft is a ground, never a text or border color. It appears at most once per page, as the callout behind a case's key findings, with Ink text on it. It is not a card style: no other block may borrow it.

**The Hairline Rule.** Division is a 1px line at 10% ink, never a box, a tint band, or a card edge. Emphasis raises the line to 18%, never to a solid.

## Typography

**Display Font:** Golos Text (with Segoe UI, system-ui, sans-serif)
**Body Font:** Golos Text (same family, weight 400)

**Character:** One variable family carries the whole site. Headings are heavy (700–800) and tight (−0.03 to −0.04em) so Cyrillic headlines sit as compact blocks; body is regular 17px with a relaxed 1.55 line-height. Numbers are tabular wherever dates or counts appear. No uppercase, no letter-spaced labels, no second family.

### Hierarchy
- **Display** (800, clamp(40px, 5.6vw, 76px), 1.0, −0.04em): the hero H1 only. Homepage: name on the first line, role on the second in Ink 2, max width 14ch. Case pages: the project title, max width 16ch.
- **Headline** (700, clamp(30px, 3.4vw, 46px), 1.06, −0.03em): section headings ("Ключевые проекты", "Опыт"), the panel headline, and case-study chapter h2s (clamp(56px, 7vw, 96px) above, 20px below). In résumé sections it is sticky at 96px from the top.
- **Title** (700, clamp(24px, 2.2vw, 30px), 1.15, −0.03em): case titles on the homepage, case-study h3 subsections, persona names, and prev/next project names (from 22px). Job titles use the same style fixed at 24px.
- **Subhead** (700, 22px, 1.15, −0.02em): the fixed step below Title, for headings that sit inside a section rather than lead one: the two-column strip headings ("Специализация", "Подход к работе"), the education title, and `.subhead` h3s inside case prose ("Цель").
- **Quote** (600, clamp(24px, 2.2vw, 30px), 1.3, −0.02em, Ink): the pull quote inside case prose; the one place where large type is 600 rather than 700, so it reads as a spoken line rather than a heading.
- **Lede** (400, clamp(18px, 1.5vw, 21px), 1.45): the first hero paragraph (full Ink on the homepage, Ink 2 under the case title at 60ch) and the paragraphs of a case's result block, in full Ink.
- **Body** (400, 17px, 1.55): everything else; descriptive paragraphs in Ink 2, held to 58–62ch in résumé sections and 68ch in case prose. Bold runs inside prose are 600 and return to full Ink.
- **Body Compact** (400, 16px, 1.55): the body size below 560px, so 17px copy does not crowd a phone column.
- **List row** (500, 18px, −0.01em): specialization and approach rows; 17px on phones.
- **Label** (600, 15px, Ink 3, no transform): h4 sub-labels ("Задача", "Что было сделано", "Работал над", "Языки"), the "Инструменты" heading over the tools chips, `.label` lines inside the principle grid and persona block, and meta-list terms. Sentence case; letter-spacing 0.
- **Small** (500, 15px): nav links, the back link, chips, dates, meta-list values; **Caption** (500, 14px): figcaptions, figure hints, tags, footer, step and list counters, prev/next direction lines.
- **Mark** (800, 12px, tracking 0): the two-letter initials inside the 28px brand mark only; the smallest type on the page, never used for running text. The favicon repeats the same initials at 26/64 on an ink square.

### Named Rules
**The Tight-Heavy Rule.** Anything larger than body is at least weight 600 and tracked negative (700–800 for headings, 600 only for the pull quote); anything body-sized or smaller is 400–600 and tracked normal. There is no light-weight large type.

**The Sentence-Case Rule.** Labels and sub-headings are sentence case in Ink 3 at 15px/600. No uppercase, no expanded tracking, no eyebrow strings. A heading element may carry the Label style (the tools h3, meta-list dt) but never the reverse: no label is promoted to heading size.

## Layout

A single `wrap` container: `min(100% − 2·gutter, 1280px)`, centered, with a fluid gutter of clamp(16px, 4vw, 48px). Inside it, a 12-column grid with column gap clamp(16px, 2.5vw, 32px).

Column recipes actually used:
- **Hero and case rows (homepage):** text 7 columns, media 5 columns (hero: text left, portrait right; cases: image left spanning 7, text right spanning 5).
- **Case hero:** title and lede in columns 1–8, meta list in 9–12, both aligned to the bottom edge; the hero image below spans the full container.
- **Résumé sections (experience, skills, education):** sticky heading in columns 1–4, body in columns 5–12.
- **Two-column strip:** two 6-column halves.
- **Jobs:** a 200px date column beside a fluid body.
- **Closing panel:** its own 12-column grid, text 1–7, actions 9–12 aligned to the bottom.
- **Case prose:** no grid. Text elements (paragraphs, lists, headings, quotes, the callout, the result block) are held to 68ch; figures, the principle grid (max 960px), and the persona block (max 1100px) break out to the container width. **Side layout** pairs a 68ch text column with a 300px figure column for a lone phone screen.
- **Figure grids:** `--n` tracks (phones 4, web-page pairs 2, a lone screen 1 at max-width 300px, a lone page at 760–900px), gap clamp(12px, 1.6vw, 20px); a wide landscape cell spans all tracks.
- **Prev/next:** two equal columns with the grid column gap; the contact strip below spans the container.

Vertical rhythm: sections pad clamp(56px, 7vw, 104px) and open with a hairline; case rows pad clamp(32px, 4vw, 56px) with 28px row gap; the two-column strip and closing block use clamp(40px, 5vw, 72px). Case pages: hero pads clamp(40px, 6vw, 80px) above with clamp(32px, 4vw, 56px) between the head and the image; the body pads clamp(48px, 6vw, 88px) above; figures sit 32px above and 40px below; the callout and persona blocks 28px above and 36px below; the result block opens clamp(56px, 7vw, 96px) below the last chapter with a hairline. Stacks inside blocks step 8 → 12 → 18 → 22 → 28px; the tools row sits 36px under the competency chips with a 14px stack. The sticky nav is 64px.

Breakpoints: at ≤900px the nav links hide (the "Написать" button remains the only nav action; on case pages the back link stays), every grid collapses to a single column, sticky headings become static with 28px below, the job date stacks above the body, the panel actions become a wrapping row, the case meta list turns into a wrapping row of 160px-minimum cells, the principle grid and side layout go single-column, figure grids cap at two tracks, and prev/next stacks. At ≤560px body drops to Body Compact (16px), the portrait switches to 4:5, the panel radius steps down to 22px, the languages grid to one column, the brand name hides leaving the 28px mark, phone grids stay at two tracks while page grids and lone screens go single-column, fixed-height frames drop to 380px, the persona grid goes single-column, and a wide landscape cell becomes a horizontal scroll strip 380px tall. The ≤1080px block restates the default 7/5 columns and has no visible effect.

## Elevation & Depth

Flat by default. The site has no rest-state shadows on content; depth is conveyed by the ground/paper-deep pairing, hairline rules, and the sticky nav's 82% paper with `backdrop-filter: saturate(160%) blur(14px)`. Shadows exist only as hover responses and vanish at rest or on `:active`. Case pages add one more form of depth without any shadow: tall screens are clipped in a Paper Deep frame and scroll inside it (max-height min(760px, 78vh) for free-height frames, 520px for fixed frames, 380px on phones), with a thin 8px scrollbar at 25% ink. The case hero, single figures, grid cells, callout, and contact strip carry no shadow at all.

### Shadow Vocabulary
- **Case rest hairline** (`box-shadow: 0 1px 0 rgba(18,18,18,.06)`): the only rest-state shadow, a 1px ground line under homepage case frames so the 20px-radius image edge reads on paper. Case-page figures do not use it.
- **Case lift** (`box-shadow: 0 24px 48px -28px rgba(18,18,18,.45), 0 1px 0 rgba(18,18,18,.06)`): with `translateY(-6px)`, on case-row hover.
- **Button lift** (`box-shadow: 0 8px 20px -12px rgba(18,18,18,.5)`): with `translateY(-1px)`, on primary button hover. Ghost buttons never shadow.
- **Light button lift** (`box-shadow: 0 8px 24px -10px rgba(0,0,0,.5)`): on the white button inside the cobalt panel and contact strip.

### Named Rules
**The Flat-At-Rest Rule.** No content surface carries a shadow at rest. Shadow and lift appear together on hover, and the hairline is the only thing that survives when the pointer leaves. A lift without a shadow is allowed where the element is small (prev/next thumbnails rise 4px, plain).

## Shapes

Radius is a signal of what kind of thing an element is, and it scales with the element's size. Full-width imagery (portrait, homepage case frames, case hero, single figures) is 20px, and the two soft containers that sit in the prose column share it (callout, contact strip). Imagery that sits inside a grid or beside text is 14px: figure-grid cells, in-frame scroll containers, the phone horizontal-scroll strip, prev/next thumbnails, and the 56px education logo. The 28px brand mark is 8px and the favicon is a 64-unit ink square at 16; the closing panel is 28px, stepping down to 22px on phones where the panel itself is narrower; every button, chip, and tag is a full pill (999px); the hover-arrow disc and status dot are circles; the focus ring rounds at 4px. Text blocks, sections, lists, jobs, meta lists, persona blocks, and the principle grid have no radius and no border; they are separated by hairlines only. Borders are 1px everywhere they exist (nav bottom, list rows, meta rows, chips, tags, ghost buttons, prev/next top edges). Images are clipped to their frame; aspect ratios are fixed where the frame leads (portrait 7:8, homepage case frames 5:4, prev/next thumbnails 16:10, the case hero from its own image via `--hero-ar`, clamped 1.45–1.7 at build time) and natural where the screen leads (grid cells and single figures keep the raster's height).

## Components

### Buttons
Pill, confident, ink-filled; they invert on hover and only the primary and light variants gain a shadow.
- **Shape:** full pill (999px), 1px border always present, 44px tall, 0 18px padding, 15px/600, −0.01em, 10px gap to a 16px stroke icon.
- **Primary:** Ink fill, Paper text, Ink border. **Hover:** Cobalt fill and border, White text, `translateY(-1px)` + button lift shadow. **Active:** no transform, no shadow.
- **Ghost:** transparent, Ink text, Rule 2 border. **Hover:** Ink fill, Paper text, no shadow.
- **Small:** 38px tall, 0 14px, 14px type (nav "Написать" on every page).
- **Light (on cobalt):** White fill, Ink text, 18px icon; 52px tall at 16px type inside the closing panel, the standard 44px/15px inside the case contact strip. **Hover:** Ink fill, White text, light lift shadow.
- **Outline light (on cobalt):** transparent, White text, border white at 45%. **Hover:** white at 12% fill, solid white border.
- **Focus:** global `outline: 2px solid` Cobalt, 3px offset, 4px radius.
- **Motion:** background/color 0.25s, transform/shadow 0.35s, all on the exponential ease-out.

### Chips
- **Competency chip:** White fill, 1px Rule border, Ink text, 15px/500, 9px 14px padding, pill. **Hover:** border to Rule 2 and `translateY(-1px)`; no fill change. Used for competencies and, under a Label-styled "Инструменты" heading, for tools.
- **Case tag:** transparent, 1px Rule 2 border, Ink text, 14px/500, 6px 11px, pill; static.
- **Panel tag:** transparent, border white at 40%, White text, 15px/500, 9px 14px, pill; static.
Chips are informational only; there is no selected state.

### Cards / Containers
There are no cards. Three filled containers exist, each with a fixed job:
- **Closing panel** (homepage): Cobalt fill, White text, 28px radius (22px on phones), clamp(32px, 5vw, 72px) padding, `overflow: hidden`, its own 12-column grid.
- **Contact strip** (case pages): Cobalt fill, White text, 20px radius, clamp(24px, 3vw, 36px) padding, a wrapping flex row with a 600-weight line at clamp(18px, 1.6vw, 22px)/−0.02em held to 30ch on the left and the light + outline-light buttons on the right; sits clamp(40px, 5vw, 64px) under the prev/next pair.
- **Callout** (case prose): Cobalt Soft fill, Ink text on every child, 20px radius, clamp(22px, 2.5vw, 32px) padding, 68ch measure, no border, no shadow; holds the key findings of a research chapter as paragraphs or a dash list.
Everything else is a hairline-separated block on the page ground.

### Inputs / Fields
None. The site has no forms; contact is a `mailto:` and a Telegram link.

### Navigation
- **Bar:** sticky, 64px, Paper at 82% with saturate/blur backdrop, 1px Rule bottom edge, `z-index: 50`.
- **Brand:** 28px Ink square at 8px radius carrying the Mark style (12px/800 Paper initials), then the name at 700/−0.02em. Below 560px the name hides and the mark stands alone.
- **Links (homepage):** 15px/500 Ink 2, 28px apart; on hover the text goes Ink and a 1.5px Ink underline scales in from the left over 0.35s. No active state. Hidden below 900px; there is no drawer.
- **Back link (case pages):** replaces the anchor links: a 14px left-arrow stroke icon and "Все проекты" at 15px/500 Ink 2, 8px gap; on hover the text goes Ink and the arrow nudges 3px left over 0.4s. It stays visible at every width.
- **Action:** small primary button on every page.

### Case Row (signature, homepage)
A 12-column article: image frame in columns 1–7 (5:4, 20px radius, Paper Deep fill, rest hairline shadow), text in 8–12 as a 22px stack: title row (Title link plus a 40px Ink circle arrow that is invisible at rest and fades/slides in on hover or focus-within), then labelled blocks (Label h4, Ink 2 paragraph, optional tags), then the "Открыть кейс" link (15px/600, arrow nudges 3px on hover). On hover the frame lifts 6px with the case lift shadow and the image scales 1.025 over 1.2s. One tab stop per case: the title link; the frame and text link are `tabindex="-1"` duplicates. When hover is unavailable or reduced motion is set, the arrow is always visible. Every case ships a real cover raster; there is no typographic fallback frame.

### Case Hero (signature, case pages)
Display H1 (16ch) and an Ink 2 Lede (60ch) in columns 1–8 with a 20px stack; a **meta list** in columns 9–12 aligned to the same baseline: `dl` rows of Label-styled `dt` over 15px/500 `dd`, 4px apart, 14px 0 padding, a Rule hairline above each row and below the last. Under the head, the hero image fills the container at 20px radius on Paper Deep, its aspect taken from the raster (`--hero-ar`, clamped 1.45–1.7). Hero children stagger the reveal by `--i`.

### Prose (case pages)
Headline h2 chapters, Title h3 subsections (44px above, 14px below), Subhead `.subhead` h3s (32px above, 10px below), Label h4/`.label` lines (28px above, 8px below), Ink 2 paragraphs 14px apart, dash lists (8px × 2px Ink 3 dash, 20px indent, 6px gap) and numbered lists (two-digit tabular counter in Ink 3 at 14px, 32px indent), a Quote block (28px above, 32px below), and a Rule hairline `hr` with 32px margins. Every text element is held to 68ch; figures are not.
- **Principle grid** (`.cols`): two equal columns, gap 8px × clamp(24px, 4vw, 56px), max 960px; each cell opens with a Label line and follows with body text. Single column below 900px.
- **Persona block:** opens with a Rule hairline and 24px padding, a Title h3 name, then an auto-fit grid of 220px-minimum columns (gap 12px × clamp(24px, 3vw, 40px)), each a Label line over short paragraphs or a dash list at 5px gap. Max 1100px.
- **Side layout:** `minmax(0, 68ch) 300px` with gap 24px × clamp(32px, 4vw, 64px); the figure column carries one phone screen at 14px radius in an in-frame scroll container. Single column below 900px.
- **Result block:** opens with a hairline and clamp(32px, 4vw, 48px) padding, a Headline h2 "Результат" with no top margin, and Lede-size paragraphs in full Ink.

### Figures (case pages)
- **Single figure:** full container width, 20px radius, Paper Deep ground, natural height.
- **Figure grid:** `--n` equal tracks (4 for phones, 2 for web-page pairs), gap clamp(12px, 1.6vw, 20px); every cell image is 14px radius on Paper Deep with natural height. A lone screen uses `--n:1` at max-width 300px; a lone web page uses `--n:1` at 760–900px. A wide landscape screen spans all tracks.
- **In-frame scroll** (`.fig__tall`): a 14px-radius Paper Deep container with `overflow-y: auto`, `tabindex="0"` so the keyboard can scroll it, thin scrollbar; free-height frames cap at min(760px, 78vh), fixed frames (`--fixed`, used for the 4-track phone strips) cap at 520px and 380px on phones. Inside the frame the image loses its own radius. A figure hint in Caption ("Длинные экраны прокручиваются внутри рамки.") sits 10px under such a figure where the scroll is not obvious.
- **Phone strip on phones:** a wide cell inside a strip becomes a 380px-tall horizontal scroll container with the image at natural width.
- **Captions:** Caption size, Ink 3, 12px above.
Each figure is a `.reveal` block: one blur-to-sharp entrance per figure.

### Prev/Next (case pages)
A two-column nav under a section hairline, padded clamp(40px, 5vw, 64px) above. Each link is a 14px stack opening with a Rule 2 hairline and 18px padding: a Caption-size Ink 3 direction line with a 14px arrow ("Предыдущий проект" / "Следующий проект"), the project name at Title size from 22px, then the target's hero raster at 16:10 and 14px radius. On hover the thumbnail rises 4px over 0.6s (no shadow) and the arrow nudges 3px in its direction. Single column below 900px.

### Hairline List (signature)
Rows 13px 0 with a hairline above (and below the last), 18px/500 −0.01em. The numbered variant prefixes a 14px Ink 3 tabular two-digit counter with a 20px gap. Used for specialization and approach, each under a Subhead.

### Résumé Block
Jobs: 200px tabular date column in Ink 3 (15px) beside a body of Title, Ink 2 paragraph at 62ch, Label h4, and a dash-bullet list (8px × 1.5px Ink 3 dash, 20px indent, 8px gap). Jobs separate with a hairline and 32px padding. Education: a 56px logo at 14px radius beside a Subhead, a tabular date line, and an Ink 2 paragraph at 60ch. Skills: competency chips, then 36px below a "Инструменты" heading in the Label style over a second chip row.

### Reveal (motion)
Every `.reveal` block enters once: from opacity 0, `translateY(18px)`, `blur(8px)` to sharp over 0.9s on `cubic-bezier(.16, 1, .3, 1)`, triggered by IntersectionObserver at 8% visibility. Hero children stagger 90ms via `--i` on both page types; on case pages every figure, the callout, and the meta list are reveal blocks as well. Under `prefers-reduced-motion` everything is static and instant.

## Do's and Don'ts

### Do:
- **Do** keep Cobalt as a hover/focus/selection response on the light ground; the closing panel and the case contact strip are the only rest-state cobalt surfaces, one per page.
- **Do** separate blocks with a 1px hairline at 10% ink (18% for emphasis) and leave content unboxed.
- **Do** set anything larger than body at weight 700–800 with −0.03 to −0.04em tracking (600/−0.02em only for the pull quote); keep body at 17px/1.55 (16px on phones), résumé paragraphs to 58–62ch, and case prose to 68ch while figures take the full container.
- **Do** make every button, chip, and tag a full pill with a 1px border; give full-width imagery a 20px radius and imagery inside grids, side columns, or thumbnails a 14px radius, all on a Paper Deep ground.
- **Do** keep surfaces flat at rest; pair lift (−1px buttons, −6px case frames) with a soft shadow only on hover and remove both on active or rest; small thumbnails may lift 4px without a shadow.
- **Do** let a tall screen scroll inside a 14px frame (520px fixed, 380px on phones) with `tabindex="0"` rather than shrinking it or cropping it.
- **Do** use tabular numerals for dates, counts, and counters, in Ink 3 at 14–15px.
- **Do** use Golos Text for everything, self-hosted with `font-display: swap`; inline 14–16px stroke SVGs for icons.

### Don't:
- **Don't** put content in cards, tinted bands, or bordered boxes; the three fills (cobalt panel, cobalt contact strip, one Cobalt Soft callout per case) are the whole inventory, and no new block may borrow them.
- **Don't** use uppercase, letter-spaced eyebrows or kickers; labels are sentence case, 15px/600, Ink 3.
- **Don't** add a dark hero, gradients, glows, or a second accent hue; Cobalt Soft is a ground, never a text or border color.
- **Don't** apply a rest-state shadow to any content surface; the 1px ground hairline under homepage case frames is the only exception, and case-page figures do not carry it.
- **Don't** introduce a second type family or a light-weight display size.
- **Don't** give chips a selected or filled state; they are informational pills.
- **Don't** lay case screens out as a full-bleed image dump; every figure sits in a measured grid (4 phones, 2 pages, or a 300px side column) with a caption or hint where the scroll is not obvious.
