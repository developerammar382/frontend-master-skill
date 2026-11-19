# Checklist: Responsive Quality

Check at **375, 768, 1280, 1440**. Spot-check 320 and landscape phone.

## Every width
- [ ] No horizontal scrolling
- [ ] No overlapping or clipped elements
- [ ] No text overflowing its container
- [ ] Images scale correctly, no stretching
- [ ] Spacing feels intentional, not cramped (mobile) or empty (desktop)

## Mobile (375px)
- [ ] Body text 16px minimum
- [ ] Headlines wrap cleanly, no word-per-line breaks
- [ ] Tap targets 44x44px minimum with space between
- [ ] Primary CTA visible without scrolling
- [ ] Forms usable: correct `type` and `inputMode` for keyboards, labels visible
- [ ] Hover-only interactions have tap equivalents
- [ ] Uses `min-h-dvh` not `h-screen` for full-height sections
- [ ] Bottom-fixed elements respect safe area insets

## Mobile navigation
- [ ] Designed menu (full-screen or sheet), not a plain dropdown of links
- [ ] Nested items grouped in accordions
- [ ] CTA inside the menu
- [ ] Button has `aria-label` and `aria-expanded`; icon animates open/close
- [ ] Body scroll locks while open
- [ ] Closes on Escape, link tap, and route change
- [ ] Focus moves into menu and returns on close

## Tablet (768px)
- [ ] Grids transition sensibly (2 columns, not stretched mobile or squeezed desktop)
- [ ] Navigation choice is appropriate (mobile menu or condensed desktop)

## Desktop (1280 / 1440)
- [ ] Content has a max-width; no paragraphs spanning the full screen
- [ ] Dropdowns and mega menus fit within the viewport

## Dashboards
- [ ] Sidebar collapses to an off-canvas sheet below `lg`
- [ ] Tables scroll horizontally in a wrapper or become cards
- [ ] Charts resize and remain legible

## Test
- [ ] Playwright responsive test passes (`skills/browser-verification`)
- [ ] Screenshots at all four widths reviewed by eye
