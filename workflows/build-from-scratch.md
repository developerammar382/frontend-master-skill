# Workflow: Build From Scratch

Use when the user asks for a new site, app, or page.

## 1. Understand (no code yet)

- Read the request. Identify product, audience, pages, and must-have features.
- If key facts are missing (product name, what it does), ask once, briefly. Otherwise assume and state your assumptions.
- Load `skills/design-intelligence`.

## 2. Direct

- Write the design brief (direction, palette, type, radius, spacing, motion, signature).
- Pick 2-3 references from Godly, Landing Love, or Awwwards and name what you're taking from each.

## 3. Plan components

- Load `skills/frontend-architecture` and `skills/ui-components`.
- List every section per page, then every component. Mark which are reusable.
- Choose libraries: one component library, one animation approach, icons from Lucide + Simple Icons.

## 4. Set up the foundation

- Scaffold (Next.js App Router + TypeScript + Tailwind unless the user's stack differs).
- Load `skills/design-systems`. Write tokens first: colors, fonts, radius, shadows, easing.
- Load fonts with `next/font`.
- Build primitives: `Button`, `Container`, `Section`, `Badge`, `Card`, `Input`.
- Build layout: `Header` (with dropdowns or mega menu), `MobileMenu`, `Footer`.

## 5. Build sections

- Hero first. It sets the bar for everything else. Spend the most effort here.
- Then each section, mobile first (`skills/responsive-design`).
- Use real, specific copy that follows `skills/copywriting`. No lorem ipsum.

## 6. Add motion

- Load `skills/animation-motion`.
- Add the signature animation first, then reveals and micro-interactions.
- Reduced-motion support on everything.

## 7. Verify

- `skills/browser-verification`: build, screenshots at 4 widths, interaction checks, axe, Lighthouse.
- `skills/visual-critique`: score, fix, repeat until all areas are 4+.
- Run all four checklists in `checklists/`.

## 8. Report

What you built, the design direction, what you verified, what's left.
