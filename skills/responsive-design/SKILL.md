---
name: frontend-master-responsive-design
description: Mobile-first layouts, breakpoints, fluid type, and properly designed mobile navigation. Use for every UI build and whenever something breaks on small screens.
---

# Responsive Design

Design for a 375px phone first. Desktop is the enhancement, not the default.

## Breakpoints to test

| Width | Device | Must check |
| --- | --- | --- |
| 375px | iPhone SE / mini | Nothing overflows, text readable, tap targets 44px |
| 768px | Tablet portrait | Grid transitions look intentional, not stretched |
| 1280px | Laptop | Primary design target for desktop |
| 1440px+ | Large desktop | Content doesn't float in a sea of space; max-width set |

Also spot-check 320px (smallest supported) and landscape phone (667x375).

## Mobile-first rules

- Base classes are mobile. Add `sm:` `md:` `lg:` for larger screens. Never write desktop styles and patch down.
- Use a `Container` with `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Stack on mobile, split on desktop: `grid gap-8 lg:grid-cols-2`.
- Fluid headings: `text-[clamp(2.25rem,8vw,5rem)]`. Never let a headline break into one word per line.
- Body text stays 16px minimum on mobile. Never shrink text to make it fit.
- No horizontal scroll, ever. Test with `overflow-x` off in devtools to find culprits.
- Images: `w-full h-auto` with explicit `aspect-*`. Use `object-cover` for crops.
- Use `min-h-dvh` instead of `h-screen` so mobile browser bars don't cut content.
- Tables on mobile: horizontal scroll inside a wrapper, or transform to stacked cards.
- Hover-only interactions need a tap equivalent. Use `@media (hover: hover)` for hover effects.

## Mobile navigation

The mobile menu must feel designed, not like a dropdown of links.

Requirements:
- Hamburger button with `aria-label="Open menu"`, `aria-expanded`, and `aria-controls`. Icon animates to a close state.
- Full-screen overlay or a side sheet (shadcn `Sheet`, or a `Dialog` from Base UI, Radix, or Headless UI).
- Large tap targets (min 48px tall rows), generous spacing, display font for top-level items.
- Grouped sections with accordions for nested items (mirror the desktop mega menu).
- Primary CTA pinned at the bottom of the menu.
- Staggered entrance animation (40-60ms per item), respects `prefers-reduced-motion`.
- Body scroll locked while open. Closes on Escape, on route change, and on link click.
- Focus moves into the menu on open and returns to the trigger on close.

Optional upgrades: secondary links and socials in the footer of the menu, search at the top, a featured card.

## App and dashboard mobile patterns

- Sidebar becomes an off-canvas sheet below `lg`, triggered from a top bar.
- For apps with 3-5 main sections, add a bottom tab bar on mobile.
- Sticky action bars at the bottom for primary actions on forms.
- Respect safe areas: `pb-[env(safe-area-inset-bottom)]`.

## Testing

```bash
# Playwright screenshots at each width (see skills/browser-verification)
npx playwright test tests/responsive.spec.ts
```

Manual check at each width: header, hero, every section, footer, open the menu, open a modal, fill a form.
