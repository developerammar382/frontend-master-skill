# Workflow: Redesign Existing UI

Use for "enhance this", "make it better", "redesign", "modernize", "make it look premium".

This is where AI usually fails: it either changes almost nothing or destroys the brand and breaks functionality. Do neither.

## 1. Audit before touching anything

- Read the existing code. Map the components, routes, data flow, and any business logic.
- Screenshot the current UI at 375 and 1280. This is your "before".
- Run `workflows/audit-frontend.md` quickly and list the top 10 problems, ranked by visual impact.

## 2. Identify what must stay

Write this list explicitly:
- **Brand**: logo, brand colors, fonts (if they're intentional), tone of voice
- **Content**: all copy, links, and data (improve wording only if asked, then follow `skills/copywriting`)
- **Functionality**: forms, auth, API calls, state, routing, analytics events
- **Structure the user relies on**: URLs, nav labels people know

If the brand colors are weak (e.g. default blue), keep the hue family but refine it: adjust lightness and saturation, add tuned neutrals. Mention it in the report.

## 3. Set the new direction

- Load `skills/design-intelligence`. Write a design brief that evolves the brand.
- Name the signature move. The user said "enhance", so the result must feel clearly, visibly better at first glance, not a padding tweak.

## 4. Fix the foundation first

In this order, because each step improves everything after it:
1. **Tokens**: introduce a consistent color, type, spacing, and radius system.
2. **Typography**: new pairing and scale (unless the brand font is fixed).
3. **Primitives**: rebuild Button, Input, Card, Badge on the tokens.
4. **Navigation**: upgrade to dropdowns/mega menu on desktop and a designed mobile menu.
5. **Hero**: rebuild with a visual anchor and proof near the fold.
6. **Sections**: vary layouts, fix rhythm and whitespace.
7. **Motion and polish**: hover states, reveals, micro-interactions.

## 5. Refactor safely

- Extract repeated JSX into components as you go.
- Keep props and behavior the same so nothing upstream breaks.
- Don't rename routes, change API contracts, or remove features.
- Run the build and existing tests after each major step.

## 6. Verify

- Screenshot "after" at the same widths. Compare side by side with "before".
- Ask: would the user be surprised by how much better this is? If not, push the hero, type, and navigation further.
- Full `skills/browser-verification` and `skills/visual-critique`.
- Confirm every original feature still works.

## 7. Report

- Before/after summary (top changes, by impact)
- What was preserved
- Any brand decisions you made that the user should confirm
