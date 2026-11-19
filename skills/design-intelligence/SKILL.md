---
name: frontend-master-design-intelligence
description: Art direction for any UI. Decide palette, typography, layout, hero, and navigation before writing code. Use at the start of every build or redesign.
---

# Design Intelligence

Good design is a set of decisions made on purpose. Make them before you write code, and write them down.

## Step 1: Read the product

Answer these in two lines each. If the user didn't say, infer from the content and state your assumption.

- **What is it?** Product, audience, price point.
- **What should it feel like?** Pick 3 adjectives. Not "modern, clean, professional" (that describes everything). Try "precise, calm, expensive" or "loud, playful, fast".
- **Who are 2 real competitors or references?** Look at how they present themselves, then do something different.
- **What brand assets exist?** Logo, colors, fonts, photos, tone of voice. These are fixed constraints.

## Step 2: Write a design brief

Put this at the top of your response or in `design-brief.md` before building:

```
Direction: <one sentence, e.g. "Editorial fintech: serif headlines, ink-on-paper neutrals, one electric accent">
Palette:   <base / surface / text / muted / accent / accent-contrast with hex values>
Type:      <display font> + <body font> (+ <mono> if needed), with scale
Icons:     <one set and stroke, e.g. "Phosphor light" (see references/icons-and-assets.md)>
Voice:     <three words, e.g. "direct, precise, dry" (see skills/copywriting)>
Radius:    <one value system, e.g. 6 / 10 / 16>
Spacing:   <base unit, e.g. 4px grid>
Motion:    <mood, e.g. "slow, weighted reveals; no bounce">
Signature: <the one thing people will remember, e.g. "hero headline that splits on scroll">
```

The **signature** is required. Every strong site has one memorable move. Pick one and execute it well rather than five half-done tricks.

## Color

### Rules
- Never use framework defaults as brand colors (`blue-500`, `green-600`, `indigo-600`, `#007bff`, `#3b82f6`).
- Build the palette from **one accent + tuned neutrals**. Most of the UI is neutral; the accent is rare and meaningful.
- Neutrals should carry a tint (warm, cool, or toward the accent hue). Pure `#000` on pure `#fff` looks cheap.
- Define colors in OKLCH or HSL so you can derive shades consistently.
- Every text/background pair must meet WCAG AA (4.5:1 body, 3:1 large text and UI parts).
- Status colors (success, warning, danger) are separate from brand and are muted to sit inside the palette.

### Palette starting points (adapt, never copy verbatim)

| Mood | Base | Text | Accent |
| --- | --- | --- | --- |
| Editorial / premium | warm paper `#F4F1EA` | ink `#1A1814` | oxblood `#7A1F2B` |
| Technical / dev tool | graphite `#0E0F11` | bone `#E8E6E1` | acid `#C6F432` |
| Calm / health | fog `#EEF1EF` | deep moss `#1F2A24` | clay `#C46A4A` |
| Finance / trust | stone `#F2F2EF` | navy-black `#0F1729` | brass `#B08A3E` |
| Playful / consumer | cream `#FFF7E8` | aubergine `#2A1533` | tangerine `#FF6A2B` |
| Luxury / dark | onyx `#0B0B0C` | champagne `#EDE6D6` | gold leaf `#C9A75D` |

## Typography

### Rules
- Never default to Inter, Roboto, Arial, Open Sans, Poppins, or Montserrat as the display face. They're fine for body text only when nothing better fits.
- Use at most **two families** (plus a mono if code appears).
- Pair by contrast: a characterful display face with a quiet, readable body face.
- Body text: minimum **16px** on mobile, 16-18px on desktop. Line height 1.5-1.7. Line length 60-75 characters (`max-w-prose` or `max-w-[65ch]`).
- Small text (labels, captions) never below **13px**. Never below 12px, anywhere.
- Headlines: tight line height (1.0-1.15), slight negative tracking on large sizes (`tracking-tight`).
- Use `font-display: swap` and self-host via `next/font` or Fontsource.

### Pairings by product type

| Product | Display | Body |
| --- | --- | --- |
| SaaS / dev tools | Geist, Space Grotesk, JetBrains Mono (accents) | Geist, IBM Plex Sans |
| Premium / editorial | Fraunces, Instrument Serif, Playfair Display | Söhne-style: Inter Tight, Satoshi |
| Fintech / B2B | Manrope, General Sans, Sora | DM Sans, Plus Jakarta Sans |
| Creative / agency | Clash Display, Cabinet Grotesk, Syne | Satoshi, Switzer |
| Consumer / playful | Bricolage Grotesque, Gloock, Recoleta-style | Nunito Sans, Outfit |
| Luxury / fashion | Cormorant Garamond, Bodoni Moda | Jost, Montserrat (light weights) |

Fontshare (Satoshi, Clash, Cabinet, General Sans, Switzer) is free for commercial use. More free and open type sources are in `references/inspiration.md`. Check each font's license before shipping.

### Type scale
Use a modular scale and stick to it. Example (rem): `0.8125, 0.875, 1, 1.125, 1.25, 1.5, 2, 2.5, 3.5, 4.5, 6`.
Use `clamp()` for display sizes so they scale fluidly: `text-[clamp(2.5rem,6vw,5.5rem)]`.

## Layout

- Use a 12-column grid on desktop, 4 on mobile. Align everything to it.
- Vary section rhythm. Not every section is "heading, paragraph, 3 cards". Mix full-bleed, split, bento, asymmetric, and sticky-scroll layouts.
- Whitespace is a feature. Section padding: `py-20 md:py-28 lg:py-32` as a starting point.
- One clear focal point per screen. If everything is bold, nothing is.

## The hero (first impression)

The hero decides if people stay. It must never be "centered H1 + paragraph + two buttons on a white background".

Every hero needs:
1. A headline that states the value in under 10 words, set large in the display face.
2. Supporting line (max 2 lines) and one primary CTA. A secondary CTA is optional.
3. **A visual anchor**: product UI, 3D object, real photography, animated illustration, or interactive element. Text alone is not enough.
4. **Proof near the fold**: logos, a metric, a rating, or a testimonial.

Hero patterns to choose from:
- **Product-forward**: headline left, live/animated product UI right, slightly tilted or layered.
- **Editorial**: oversized serif headline across the full width, image cropped into the type.
- **Immersive**: full-bleed WebGL or video with headline overlaid and strong contrast scrim.
- **Interactive**: the hero *is* a demo (type a prompt, drag a slider, hover to reveal).
- **Bento hero**: headline plus a grid of feature tiles that animate in.

## Navigation

Navigation signals quality instantly. A row of plain text links is not acceptable for a real product site.

Desktop:
- Logo left, primary nav center or left, CTA right.
- Products/features/resources use **dropdowns** or a **mega menu** with icon, title, and one-line description per item, plus a featured card (new release, case study).
- Sticky header that shrinks or gains a blurred background (`backdrop-blur`) on scroll.
- Clear active and hover states. Visible focus ring.

Use a mega menu when there are more than 6 destinations or multiple products. Use simple dropdowns for 3-6 grouped items. Use plain links only for tiny sites (personal page, single product with 3 links).

Mobile navigation rules live in `skills/responsive-design`.

## Copy and detail

- Write real copy that fits the product. No "Lorem ipsum", no "Welcome to our website", no "Unlock the power of".
- Numbers beat adjectives: "Deploys in 41s" beats "Blazing fast".
- Follow `skills/copywriting` for every word on the page. It lists the AI phrases to avoid and how to replace them.

## Inspiration

Before designing, look at 3-5 references and write one line per reference naming the principle you're taking. The full, categorized list (galleries, sections, dashboards, motion, type, color, design systems) is in `references/inspiration.md`.

Fast starting points:
- https://godly.website and https://www.awwwards.com for high-end sites
- https://www.navbar.gallery and https://www.footer.design before building a header or footer
- https://mobbin.com and https://refero.design for app and dashboard patterns
- https://fontsinuse.com for type pairings

Take principles (rhythm, contrast, how they handle the hero), never copy a layout one to one.
