# Examples

Reference implementations that show the skill's standards in real code. Copy the patterns, not the styling.

| Example | Shows |
| --- | --- |
| `design-brief.md` | A complete design brief written before coding |
| `tokens.css` | Tailwind v4 token setup with light and dark themes |
| `header/` | Sticky header with mega menu and a designed mobile menu |

These are copy-in files, not a runnable app. Drop them into an existing Next.js project that already has shadcn/ui set up.

The header uses shadcn's **Radix** base (`npx shadcn init -b radix`), because it composes with `asChild`. On the Base UI base (shadcn's default since July 2026), replace each `asChild` with the `render` prop.

Requirements for the header example: Next.js App Router, Tailwind v4, shadcn/ui (`navigation-menu`, `sheet`, `accordion`), `lucide-react`, `motion`.

```bash
npx shadcn@latest add navigation-menu sheet accordion
```

Want to add an example? See `CONTRIBUTING.md`. Every example must pass all four checklists.
