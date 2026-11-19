# Rules: Accessibility

Target: WCAG 2.2 AA. These are blocking rules. Full guidance: `skills/accessibility`.

- [ ] Semantic elements: `button` for actions, `a` for navigation, landmarks (`header`, `nav`, `main`, `footer`).
- [ ] One `h1` per page; heading levels in order.
- [ ] Every image has `alt`. Decorative: `alt=""`.
- [ ] Every input has a visible `<label>`. Errors linked with `aria-describedby`.
- [ ] Icon-only buttons have `aria-label`. Decorative icons have `aria-hidden="true"`.
- [ ] Visible `focus-visible` styles on every interactive element. Never remove outlines without a replacement.
- [ ] Contrast: 4.5:1 text, 3:1 large text and UI components.
- [ ] Touch targets 44x44px minimum on mobile.
- [ ] All functionality works with keyboard only. Logical tab order. No keyboard traps (except open modals).
- [ ] Menus, dialogs, tabs, accordions use Base UI/Radix/React Aria/Headless UI/shadcn or follow WAI-ARIA patterns exactly.
- [ ] Mobile menu and dropdowns expose `aria-expanded` and close on Escape.
- [ ] `prefers-reduced-motion` respected for all non-essential motion.
- [ ] Color is never the only way information is shown.
- [ ] `lang` attribute on `<html>`. Skip-to-content link present.
- [ ] Page titles are unique and descriptive.
- [ ] axe-core reports zero violations.
