---
name: Pawfect Pet Studio
description: A stack of flat candy-colour posters, each owned by one black pet silhouette and a slab headline.
colors:
  marigold: "#ffb400"
  pink: "#ff5fa2"
  teal: "#12b5b0"
  lilac: "#7b5cff"
  ink: "#14110f"
  paper: "#fffefc"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Caprasimo, Cooper Black, Georgia, serif"
    fontSize: "clamp(2.9rem, 9.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Caprasimo, Cooper Black, Georgia, serif"
    fontSize: "clamp(2.35rem, 6.2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Caprasimo, Cooper Black, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "Caprasimo, Cooper Black, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  field: "16px"
  card: "24px"
  panel: "32px"
  pill: "999px"
spacing:
  gutter: "20px"
  gutter-wide: "32px"
  section-y: "80px"
  section-y-wide: "112px"
  container: "1280px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.marigold}"
    rounded: "{rounded.pill}"
    padding: "15px 27px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "15px 27px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  booking-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "40px"
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.marigold}"
---

# Design System: Pawfect Pet Studio

## Overview

**Creative North Star: "The Push Pin Poster Wall"**

The site is a stack of full-bleed posters, one per service. Each poster is a single flat candy field with a slab headline, and a black one-colour pet silhouette (or a duotone photo in a flat frame) owns it. The page should be recognisable with all copy removed: colour fields, a soft slab face, ribbons, bursts, arch and circle frames, thick ink outlines.

Everything is flat. There are no shadows and no gradients anywhere in the build; depth comes from colour-field contrast, 3px ink outlines, slight rotations, and overlap. Headlines tilt a degree or two on desktop, pills tilt on hover, art sits askew in the poster corner. The tone is joyful, hand-made, warm, and never clinical.

**Key Characteristics:**
- Five candy fields (marigold, pink, teal, lilac) plus ink and paper, each section a full-bleed field.
- Caprasimo display over Figtree body; display is never set above 6rem.
- Ink-black silhouettes with candy ribbons, authored as SVG, are the only illustration language.
- 3px ink outlines on pills, fields, and panels; no shadows, no gradients.
- Photos are natural stock images in rounded, arch, circle, or leaf frames, optionally duotoned into a candy field.
- Demo content is labelled as sample where a visitor could take it for fact.

## Colors

A saturated flat candy palette on warm black and bright paper; the page never goes pastel and never blends.

### Primary
- **Marigold Field** (`{colors.marigold}`): The page default (body background), hero and Training/Testimonials posters, the ink nav's text and logo colour, and the hero's marquee text.
- **Bubblegum Pink** (`{colors.pink}`): Booking, Services, Groomers posters; ribbons, bursts, the scrollbar thumb, and the booking active-step text on ink.

### Secondary
- **Pool Teal** (`{colors.teal}`): Grooming and Pet-gallery posters; ribbons and comb/hat emblem parts.
- **Push-Pin Lilac** (`{colors.lilac}`): Boarding poster and ribbons. The only field that takes white text (`{colors.white}`), via `on-lilac`.

### Neutral
- **Ink** (`{colors.ink}`): All text on candy and paper fields, the nav bar, the Membership poster, all outlines, silhouettes, and the html background behind the page.
- **Paper** (`{colors.paper}`): FAQ and Shop posters, booking panel, text on ink, and the white ribbon.
- **White** (`{colors.white}`): Form field fill and focus rings on ink and lilac only.

### Named Rules
**The Flat Field Rule.** One colour per poster, edge to edge. No shadows, no gradients, no tints other than ink at reduced opacity for secondary text and `marigold/20` or `/30` for hover and focus fills.

**The Ink Text Rule.** Text on marigold, pink, teal, paper is ink. Text on lilac is white, on ink is paper or marigold. Never pair candy on candy for text.

## Typography

**Display Font:** Caprasimo (with Cooper Black, Georgia, serif), loaded from Google Fonts in the layout.
**Body Font:** Figtree (with ui-sans-serif, system-ui, sans-serif), loaded from Google Fonts in the layout.

**Character:** A chunky Cooper-style soft slab shouts and wobbles over a clean humanist sans that stays out of the way. The pairing is a poster headline over a flyer's small print.

### Hierarchy
- **Display** (400, clamp 2.9rem to 6rem, 0.98): Hero headline only, slanted -2deg on desktop.
- **Headline** (400, clamp 2.35rem to 4.5rem, 0.98): Every poster h2, slanted -1deg on desktop.
- **Title** (400, clamp 1.75rem to 2.75rem, 0.98): Sub-headings, confirmation headings.
- **Subtitle** (400, clamp 1.35rem to 1.75rem, 0.98): Form step prompts and legends. Display face also sets nav wordmark (1.5rem), service labels (1.5rem), and the marquee (1.875rem).
- **Body** (400, 1.0625rem, 1.55): Figtree running text; keep leads to about 36rem to 42rem.
- **Lead** (500, 1.125 to 1.25rem): Poster intro paragraph under the headline.
- **Label** (800, 1.1rem, no tracking, sentence case): Pill buttons. Bold 700 for nav links and form labels.

### Named Rules
**The Headline Weight Rule.** Headings are always weight 400 Caprasimo with balanced wrap; never faux-bolded, never uppercase, never above 6rem.

## Layout

Each section is a full-bleed Poster: a `max-w-7xl` (1280px) container, 20px gutters (32px from `sm`), 80px vertical padding (112px from `md`). Headline sits top-left in a max 56rem block with a lead beneath; optional art (a silhouette in a 9 to 11rem box) rotates +6deg into the top-right on desktop only. Content grids below vary per poster; there is no uniform card grid. The hero is a two-column grid (1.05fr / 0.95fr) that stacks art-first on mobile, ending in an ink marquee band with 3px ink borders. The booking form is a three-step linear flow with a step rail (column on desktop, row on mobile). Mobile-first; scroll padding 5.5rem under the sticky nav. Motion: sections rise 28px on view with an expo-out ease (`cubic-bezier(.16,1,.3,1)`, 0.8s), ribbons draw as paths over 1.4s, reduced-motion collapses all durations to near zero.

## Elevation & Depth

Flat, with no shadows and no gradients anywhere. Depth is made from adjacent colour fields, 3px ink outlines, rotations (about 2.5deg tilts), overlap of a circular photo or burst on the hero art, and the sticky ink nav bar separated by a 3px ink border.

### Named Rules
**The Zero Shadow Rule.** No `box-shadow`, `drop-shadow`, or gradient fill. Lift is expressed by `translateY(-3px) rotate(-1.5deg)` on hover.

## Shapes

Soft, pill and arch geometry with thick ink strokes. Radii: 16px for form fields and option tiles, 24px (`rounded-3xl`) for photo rects and cards, 32px for the booking panel, fully round for pills, circle photos, and step badges. Photo frames come in rect, arch (top fully rounded, bottom 24px), circle, pill, and leaf (opposite corners round). Outline weight is 3px ink on pills, fields, panels, nav; a 6px ink ring on the hero vignette. Duotone photos grayscale-multiply into a candy field; plain photos sit on ink. Bursts are 24-point star badges; squiggles and ribbons use round linecaps. Authored SVG only: DogHead, CatHead, RabbitHead silhouettes in ink with candy eyes and noses, service emblems, groomer emblems, a stroke icon set (3px, round caps), and a logo mark (dog head with pink and teal ribbons).

## Components

### Buttons (Pill)
- **Shape:** Fully round (999px), 3px ink border, min-height 3.25rem, padding .95rem 1.7rem, weight 800.
- **Ink:** Ink fill with marigold text; hover flips to paper with ink text.
- **Outline:** Transparent with ink text; hover fills ink with paper text.
- **Hover / Active / Focus:** Hover lifts 3px and tilts -1.5deg (0.35s expo-out); active settles to scale .98; focus is a 3px ink outline, 3px offset (white on ink and lilac fields).
- **Disabled:** Transparent, dashed border, ink at 72% opacity, no transform.
- **In nav:** Marigold fill and border with ink text, hover pink.

### Navigation
A sticky ink bar with a 3px ink bottom border; marigold Caprasimo wordmark with the ribbon logo mark; links are bold, fully rounded, invert to marigold with ink text on hover. Below `lg`, links collapse to a bordered details menu with a 24px-radius ink panel and marigold outline; the booking pill stays visible at all widths.

### Poster (section)
Full-bleed colour field from the tone map (marigold, pink, teal, lilac, ink, paper), tilted slab h2, lead, optional corner silhouette.

### Photo Frames
Stock photo with descriptive alt, lazy loaded (eager on the hero); shapes as in Shapes; credited as stock.

### Inputs / Fields
White fill, 3px ink border, 16px radius, 18px medium text, ink at 50% placeholder; focus uses marigold at 20% fill plus the global ink outline. Labels are bold above fields. Option tiles are radio labels with a 3px ink border that fill ink with marigold text when chosen.

### Signature: Ribbon Emblem
A black pet silhouette crowned with thick round-capped ribbons in pink, teal, lilac, and paper that draw themselves in. Used as the hero art and echoed by the logo mark.

### Burst Badge
A 24-point star in a candy colour with ink display-face text, used for price calls ("Grooming mulai Rp 150k") and confirmations.

## Do's and Don'ts

### Do:
- **Do** give every section one flat candy field (or ink or paper) edge to edge and one silhouette or photo as its owner.
- **Do** set text in ink on candy and paper, white on lilac, paper or marigold on ink.
- **Do** outline pills, fields, and panels with 3px ink and keep radii on the 16 / 24 / 32 / 999 steps.
- **Do** label sample content as sample (prices, testimonials, groomers, form behaviour) and credit stock photography.
- **Do** author illustrations as flat SVG with ink silhouettes and candy accents.
- **Do** respect reduced motion and keep copy visible without JS (Reveal only translates).

### Don't:
- **Don't** add shadows or gradients of any kind.
- **Don't** use uppercase eyebrow labels or kicker text above headings; the build has none.
- **Don't** use emoji or glyph characters as icons; use the authored SVG icon set.
- **Don't** set display type above 6rem or use a system display face.
- **Don't** fall back to the cream-and-orange rounded-card pet template or a same-size service-card grid.
- **Don't** put candy text on a candy field or on lilac in ink.
