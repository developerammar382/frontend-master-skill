# Workflow: Screenshot to Code

Use when the user provides a screenshot, mockup, or Figma frame to implement.

## 1. Analyze the image

Write down before coding:
- **Layout**: grid, columns, max-width, section breakdown top to bottom
- **Spacing**: estimate on a 4px grid; find the repeating gaps
- **Type**: identify or closest-match the fonts; list sizes and weights by role
- **Color**: sample hex values for background, surface, text, muted, accent, borders
- **Radius and shadow**: values and where each is used
- **Components**: every repeated element (buttons, cards, nav items, inputs)
- **Icons**: identify the set (Lucide, Phosphor, Heroicons, Tabler, Material) by stroke and corner shape, and use the same one. Fall back to Lucide. See `references/icons-and-assets.md`
- **Implied behavior**: what's a dropdown, tab, carousel, hover state

## 2. Clarify fidelity

- Default: match the screenshot closely, but convert to a consistent token system (snap 15px to 16px, unify near-identical greys).
- If the screenshot has obvious issues (contrast fails, tiny text), keep the look but fix the issue and mention it.
- The screenshot shows one width. Design the other breakpoints yourself, mobile first.

## 3. Build

- Tokens from your analysis first, then primitives, then sections.
- Follow `skills/frontend-architecture`: components, not one giant file.
- Add states the screenshot can't show: hover, focus, active, loading, empty, error.

## 4. Verify fidelity

- Screenshot your build at the same width as the source.
- Compare side by side. Check alignment, spacing, sizes, colors, font weight.
- List differences and fix them until you can't spot any at normal zoom.
- Then run responsive checks at 375/768/1280/1440 and `checklists/accessibility.md`.

## 5. Report

What matches, what was intentionally adjusted (and why), and which breakpoints you designed beyond the screenshot.
