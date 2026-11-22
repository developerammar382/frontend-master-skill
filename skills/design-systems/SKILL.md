---
name: frontend-master-design-systems
description: Define and enforce design tokens for color, type, spacing, radius, shadow, and motion so every screen stays consistent. Use before building any UI and when auditing consistency.
---

# Design Systems

Consistency is what separates a product from a pile of pages. Every value comes from a token. No exceptions.

## Token set (minimum)

Define these in `app/globals.css` with Tailwind v4 `@theme`, or in `tailwind.config.ts` for v3.

```css
@import "tailwindcss";

@theme {
  /* Color: semantic names, never "blue" */
  --color-bg: oklch(97% 0.01 85);
  --color-surface: oklch(99% 0.005 85);
  --color-ink: oklch(20% 0.02 60);
  --color-muted: oklch(50% 0.015 60);
  --color-line: oklch(90% 0.01 85);
  --color-accent: oklch(45% 0.15 25);
  --color-accent-ink: oklch(98% 0.01 85);

  /* Type */
  --font-display: "Fraunces", serif;
  --font-sans: "Satoshi", system-ui, sans-serif;

  /* Radius: one system */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --animate-marquee: marquee 40s linear infinite;

  /* Atmosphere: gradients and glows are tokens too */
  --gradient-hero: radial-gradient(60% 50% at 70% 30%, oklch(45% 0.15 25 / 0.18), transparent);
  --shadow-lift: 0 1px 2px oklch(20% 0.02 60 / 0.06), 0 12px 32px -12px oklch(20% 0.02 60 / 0.18);
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}
```

Effects with no Tailwind class (grain, grid lines, outlined text, custom masks) become named `@utility` blocks in the same file. See `rules/tailwind.md`. Tokens and utilities are how you keep a rich design consistent, not a reason to make it plainer.

Dark mode: override the same tokens under `.dark` or `@media (prefers-color-scheme: dark)`. Components never change; tokens do.

## Spacing

- Use the 4px grid only: Tailwind's default scale (`1` = 4px).
- Pick a small allowed set and stick to it. Example: `2, 3, 4, 6, 8, 12, 16, 20, 24, 32`.
- Arbitrary spacing (`p-[13px]`, `mt-[22px]`) is banned. Arbitrary composition (grid templates, `clamp()` type) is fine; see `rules/tailwind.md`.
- Inside a component, use `gap-*` over margins.

## Radius

- One radius system for the whole product. Buttons and inputs share a radius; cards use the next step up.
- Nested elements use a smaller radius than their parent: `inner = outer - padding`.
- Never mix sharp and round styles randomly.

## Elevation

- Max 3 shadow levels: `sm` (cards), `md` (dropdowns), `lg` (modals).
- Shadows should be soft and tinted toward the background, not grey `rgba(0,0,0,0.5)`.
- On dark themes, use borders and lighter surfaces instead of shadows.

## Type scale

- Define every text style once: `display`, `h1`, `h2`, `h3`, `body-lg`, `body`, `small`, `label`.
- Use only those. If a new size is needed, add it to the scale, don't inline it.

## Consistency audit

Run `bash <skill-path>/evals/consistency-audit.sh` from the project root for a quick count, or these greps for exact lines. Any hits need justification or a fix. The first grep also matches allowed composition (`clamp()`, grid templates); skip those.

```bash
# Arbitrary values (spacing, colors, sizes)
grep -rnE "\b(p|m|px|py|mt|mb|ml|mr|gap|w|h|text|rounded)-\[[^]]+\]" src app components

# Raw hex colors in components
grep -rnE "#[0-9a-fA-F]{3,8}\b" src app components --include=*.tsx

# Default Tailwind palette used as brand
grep -rnE "\b(bg|text|border|ring)-(blue|indigo|green|purple)-[0-9]{3}\b" src app components

# Inline styles
grep -rn "style={{" src app components
```

## Rules

- Semantic token names (`bg-surface`, `text-muted`), never visual names (`bg-gray-100`) in app code.
- Every component accepts the same size vocabulary: `sm | md | lg`.
- One icon set and one stroke width for the whole product. Record both in the design brief (`references/icons-and-assets.md`).
- Every interactive element has the same state set: default, hover, active, focus-visible, disabled, loading (where relevant).
- Document tokens in one place. If a value isn't in the token file, it doesn't exist.
