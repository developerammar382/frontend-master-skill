# Rules: Tailwind CSS

## Setup
- Tailwind v4 with `@theme` tokens in `globals.css` (or v3 `tailwind.config.ts` `theme.extend`).
- Install `prettier-plugin-tailwindcss` for consistent class order.
- Use `cn()` (`clsx` + `tailwind-merge`) to merge classes. Use `cva` for variants.

## Tokens for repeated values, freedom for composition
- Colors from semantic tokens: `bg-surface`, `text-ink`, `text-muted`, `border-line`, `bg-accent`.
- No default palette colors for brand (`bg-blue-600`, `text-indigo-500`).
- **Banned arbitrary values:** ones that duplicate a token. Spacing (`p-[13px]`), colors (`text-[#333]`), radius (`rounded-[7px]`), shadows, and fonts.
- **Allowed arbitrary values:** composition that has no token. Fluid type with `clamp()`, grid templates (`grid-cols-[8rem_1fr]`), tight leading on display type (`leading-[0.9]`), em-based offsets, one-off transforms, and `bg-(image:--token)` for gradient tokens.
- Used the same arbitrary value three times? Make it a token.
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

## Effects Tailwind can't express
Put them in `globals.css` as named utilities, then use them like any class. This keeps the design expressive and the components clean:

```css
@utility bg-grain {
  /* Fine noise over flat color so large surfaces don't look digital */
  background-image: url("/textures/grain.png");
  background-size: 200px;
}

@utility text-outline {
  -webkit-text-stroke: 1px currentColor;
  color: transparent;
}
```

Also allowed in `globals.css`: `@keyframes` (registered as `--animate-*` tokens in `@theme`), third-party overrides, `::selection`, scrollbars, `@font-face`. One file. Comment why each block exists.

## Don't
- No inline `style={{}}` except for truly dynamic values (e.g. progress width from data, CSS variables).
- No `!important` (`!` prefix) unless overriding a third-party style.
- No `@apply` for component styles.
