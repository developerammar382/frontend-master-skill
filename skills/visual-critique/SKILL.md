---
name: frontend-master-visual-critique
description: Review your own UI like a demanding senior designer, score it, and fix weaknesses before showing the user. Use after every build or redesign, before reporting done.
---

# Visual Critique

You will be tempted to call the first render good. Don't. Look at the screenshots and critique them as if a rival agency built them.

## The squint test

Blur your eyes (or scale the screenshot to 25%). Ask:
- Is there one clear focal point per screen?
- Can you see the hierarchy: headline, then support, then action?
- Does the page have rhythm, or is it one flat texture of same-sized blocks?

## The template test

Ask: "If I removed the logo, could this be any other startup's site?"
If yes, it's generic. Find the signature move from the design brief and push it harder.

Generic tells to hunt for:
- Centered hero with text only and a gradient blob behind it
- Purple-to-blue gradients, glassmorphism everywhere
- Three identical feature cards with an icon in a circle
- Default shadcn look: zinc grays, 0.5rem radius, Inter
- Stock 3D illustrations of people with laptops
- Every section the same height with the same padding and layout
- "Trusted by" row with greyscale logos and nothing else as proof
- Emojis as icons, or icons from mixed sets
- Icon set that fights the type (chunky 2px icons next to a thin serif)
- Copy that could be on any site: "Unlock the power of", "Seamless", "Ready to get started?"
- Every heading and feature card written in the same sentence shape

## Score each area (1-5)

| Area | 5 looks like |
| --- | --- |
| **First impression** | Hero and nav would hold up next to an Awwwards site of the day |
| **Typography** | Distinct pairing, clear scale, comfortable reading, no orphans in headlines |
| **Color** | Restrained, intentional, accent used sparingly, all contrast passes |
| **Layout and rhythm** | Varied sections, strong grid, generous whitespace, nothing cramped |
| **Consistency** | Same spacing, radius, shadows, icon style, and button styles everywhere |
| **Detail** | Hover and focus states, loading/empty states, polished micro-interactions |
| **Motion** | Smooth, purposeful, never blocks reading |
| **Mobile** | Feels designed for the phone, not squeezed |
| **Brand fit** | Every choice supports the brand and audience |
| **Copy** | Specific to this product, sounds like a person, passes `skills/copywriting` |

**Ship threshold: no area below 4, average 4.3+.** Anything lower: fix the lowest area first, re-screenshot, re-score.

## Fresh-eyes pass

If a reference from `references/inspiration.md` inspired the design, put your screenshot next to it. If they look like the same site, you copied a layout instead of a principle. Change it.

## Detail pass

Zoom to 200% on screenshots and look for:
- Misaligned edges (text, images, and cards should share left edges)
- Inconsistent gaps between similar elements
- Text that hugs container edges
- Icons not vertically centered with text
- Widows (one word on the last line of a headline): fix with `text-balance` or `text-pretty`
- Buttons of different heights in the same row
- Borders that double up where two elements meet
- Images that are blurry, stretched, or cropped awkwardly

## Report format

```
Critique (round 1): First impression 3, Typography 4, Color 4, Layout 3, Consistency 5, Detail 3, Motion 4, Mobile 4, Brand 4, Copy 3
Fixes: hero lacked visual anchor -> added product UI with layered screenshots; features section repeated card layout -> changed to bento grid; buttons missing hover states -> added; headline said "Unlock seamless invoicing" -> rewrote to "Send invoices in 20 seconds".
Critique (round 2): all 4+, avg 4.4. Ship.
```
