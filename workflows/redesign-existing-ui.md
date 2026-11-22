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

## 4. Slice, then extend

1. **Foundation**: tokens, type pairing and scale, effect utilities (`skills/design-systems`). Copy `examples/motion/` into `components/motion/`.
2. **Slice**: rebuild navigation and hero at final quality, motion included. Screenshot next to the "before". It must look clearly better at first glance; if not, push it before going further.
3. **Primitives**: rebuild Button, Input, Card, Badge on the tokens, with hover, press, and focus states.
4. **Sections**: one at a time, each with varied layout and its own motion. Match the slice's bar.

## 5. Refactor safely

- Extract repeated JSX into components as you go.
- Keep props and behavior the same so nothing upstream breaks.
- Don't rename routes, change API contracts, or remove features.
- Run the build and existing tests after each major step.

## 6. Verify

- Screenshot "after" at the same widths. Compare side by side with "before".
- Ask: would the user be surprised by how much better this is? If not, push the hero, type, and navigation further.
- Full `skills/browser-verification` and `skills/visual-critique`, including the no-rules duel.
- Run the existing tests, then add the ones `skills/testing` asks for.
- Confirm every original feature still works.

## 7. Report

- Before/after summary (top changes, by impact)
- What was preserved
- Any brand decisions you made that the user should confirm
