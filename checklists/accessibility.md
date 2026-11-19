# Checklist: Accessibility (WCAG 2.2 AA)

## Automated
- [ ] axe-core: 0 violations (`wcag2a`, `wcag2aa`, `wcag21aa`, `wcag22aa`)
- [ ] Lighthouse Accessibility: 100

## Keyboard
- [ ] Skip-to-content link is first and works
- [ ] Every interactive element reachable with Tab, in logical order
- [ ] Focus always visible and clearly styled
- [ ] Dropdowns/mega menu: open with Enter/Space, arrows move, Escape closes
- [ ] Modals and mobile menu trap focus, close on Escape, return focus to trigger
- [ ] No keyboard traps anywhere else

## Screen reader
- [ ] Landmarks present: `header`, `nav`, `main`, `footer`
- [ ] One `h1`; headings in order
- [ ] Images have meaningful `alt` or `alt=""` if decorative
- [ ] Icon-only buttons have `aria-label`
- [ ] Inputs have labels; errors announced via `aria-describedby` and `aria-invalid`
- [ ] Dynamic updates use `aria-live`
- [ ] Current page marked with `aria-current="page"` in nav

## Visual
- [ ] Text contrast 4.5:1 (3:1 for large text)
- [ ] UI component and focus ring contrast 3:1
- [ ] Information not conveyed by color alone
- [ ] Usable at 200% zoom and 320px width without horizontal scroll
- [ ] Text spacing can be increased without breaking layout

## Motion
- [ ] `prefers-reduced-motion` disables parallax, large movement, and autoplay
- [ ] Nothing flashes more than 3 times per second
- [ ] Auto-moving content (carousels, marquees) can be paused

## Touch
- [ ] Targets 44x44px minimum (24x24 absolute floor)
- [ ] No actions that require precise gestures without an alternative

## Manual sign-off
- [ ] Completed main flow with keyboard only
- [ ] Navigated with VoiceOver or NVDA by headings and landmarks
