# Rules: Tailwind CSS

## Setup
- Tailwind v4 with `@theme` tokens in `globals.css` (or v3 `tailwind.config.ts` `theme.extend`).
- Install `prettier-plugin-tailwindcss` for consistent class order.
- Use `cn()` (`clsx` + `tailwind-merge`) to merge classes. Use `cva` for variants.

## Tokens only
- Colors from semantic tokens: `bg-surface`, `text-ink`, `text-muted`, `border-line`, `bg-accent`.
- No default palette colors for brand (`bg-blue-600`, `text-indigo-500`).
- No arbitrary values (`p-[13px]`, `text-[#333]`) unless matching an external spec. `clamp()` for fluid type is allowed.
- Spacing from the 4px scale. Radius from the radius tokens.

## Writing classes
- Mobile first: base classes for mobile, then `sm:` `md:` `lg:` `xl:`.
- Order: layout, box model, typography, color, effects, states (the Prettier plugin handles this).
- Long class lists: split variants into `cva`, not 300-character strings.
- Repeated class groups become a component, not an `@apply` rule.
- Use `gap-*` for spacing between children; `space-y-*` only for simple stacks.
- `size-*` for square elements.
- `text-balance` on headlines, `text-pretty` on paragraphs.
- Dynamic classes: use a full-class map, never string interpolation.
  ```ts
  const tone = { success: "bg-success/10 text-success", danger: "bg-danger/10 text-danger" };
  ```

## Custom CSS
Allowed only for:
- Complex keyframes not expressible in Tailwind
- Third-party widget overrides
- Things like `::selection`, scrollbar styling, `@font-face`

Put it in one file. Comment why each block exists.

## Don't
- No inline `style={{}}` except for truly dynamic values (e.g. progress width from data, CSS variables).
- No `!important` (`!` prefix) unless overriding a third-party style.
- No `@apply` for component styles.
