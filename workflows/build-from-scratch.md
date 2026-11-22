# Workflow: Build From Scratch

Use for a new multi-page site or app. For a single marketing page or portfolio, use `workflows/build-landing-page.md`. For dashboards, use `workflows/build-dashboard.md`.

## 1. Brief (before any code)

- Identify product, audience, pages, and must-have features. If the product name or purpose is missing, ask once; otherwise assume and state it.
- Load `skills/design-intelligence` and `skills/animation-motion`. Write the design brief, including the signature and the motion inventory.
- Load `skills/frontend-architecture`. List pages, sections, and components; mark which are shared.

## 2. Slice (one complete screen at final quality)

- Scaffold: Next.js App Router, TypeScript, Tailwind (unless the stack differs).
- Tokens and effect utilities in `globals.css` (`skills/design-systems`, `examples/tokens.css`). Fonts with `next/font`.
- Copy `examples/motion/` into `components/motion/`.
- Build the layout (header, mobile menu, footer) and the most important screen, fully: real components, real copy, real motion.
- Screenshot at 375 and 1440 and run the no-rules duel (`skills/visual-critique`).

**Gate:** the slice sets the bar for every other screen. Don't move on until it's striking.

## 3. Extend

- Build remaining pages from the same primitives. Each section ships with its motion and states (hover, focus, loading, empty, error).
- New pattern used twice? Extract a component. Used once? Keep it inline.
- Page transitions or shared-element transitions between list and detail views where they help.

## 4. Harden

- `skills/accessibility`, `skills/performance`, `skills/testing`.
- Run the token audit (`evals/consistency-audit.sh`) and fix or justify every hit.

## 5. Verify and report

- `skills/browser-verification`, `skills/visual-critique`, all four checklists.
- Report: direction, what you built, what you verified, what's open.
