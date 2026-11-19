---
name: frontend-master-accessibility
description: Build to WCAG 2.2 AA by default - semantics, keyboard, focus, contrast, forms, and motion. Use on every UI task and when auditing.
---

# Accessibility

Accessible UI is better UI for everyone. Build it in from the start; retrofitting costs 10x.

## The core six

1. **Semantic HTML first.** `<button>` for actions, `<a>` for navigation, `<nav>`, `<main>`, `<header>`, `<footer>`, `<section aria-labelledby>`. A `<div onClick>` is a bug.
2. **Keyboard works everywhere.** Tab through the whole page. Every action is reachable, order is logical, nothing traps focus (except open modals, which must).
3. **Focus is visible.** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`. Never `outline-none` without a replacement.
4. **Contrast passes.** 4.5:1 for body text, 3:1 for large text (24px+, or 19px+ bold) and UI boundaries (inputs, icons, focus rings).
5. **Everything has a name.** Images have `alt` (empty `alt=""` if decorative). Icon buttons have `aria-label`. Inputs have `<label>`.
6. **Motion is optional.** Respect `prefers-reduced-motion`. Nothing flashes more than 3 times per second. Auto-playing content can be paused.

## Specifics

- One `<h1>` per page. Headings don't skip levels.
- Add a "Skip to content" link as the first focusable element.
- Set `lang` on `<html>`.
- Touch targets: 44x44px minimum (WCAG 2.2 requires 24x24; aim higher).
- Don't convey meaning by color alone. Add an icon or text to status colors.
- Form errors: announced (`aria-invalid`, `aria-describedby` pointing to the message), shown inline, and summarized on submit for long forms.
- Placeholders are not labels.
- Dropdowns and mega menus: open on click and keyboard (not hover only), close on Escape, arrow keys move between items.
- Modals: focus moves in, is trapped, Escape closes, focus returns to the trigger. Use Base UI, Radix, or Headless UI so this is handled.
- Live updates (toasts, async results): `aria-live="polite"`.
- Data tables: real `<table>`, `<th scope>`, caption or `aria-label`.
- Charts: provide a text summary or data table alternative.
- Text resizes to 200% without breaking layout. Use `rem`, not `px`, for font sizes.

## Testing

Automated (catches ~40% of issues):
```bash
npm i -D @axe-core/playwright
# Then in a Playwright test:
# const results = await new AxeBuilder({ page }).withTags(["wcag2a","wcag2aa","wcag22aa"]).analyze();
# expect(results.violations).toEqual([]);
```

Lighthouse accessibility score must be 100 (it's a floor, not proof).

Manual (required):
- [ ] Unplug the mouse. Complete the main user flow with keyboard only.
- [ ] Turn on VoiceOver (Cmd+F5 on macOS) or NVDA. Navigate by headings and landmarks.
- [ ] Zoom to 200%. Nothing overlaps or gets cut off.
- [ ] Enable reduced motion in OS settings. Confirm big animations stop.
- [ ] Check every color pair in the palette with a contrast checker.
