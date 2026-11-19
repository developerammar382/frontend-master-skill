---
name: frontend-master-ui-components
description: Choose component libraries, build reusable UI primitives, and pick icons. Use whenever creating buttons, forms, cards, menus, modals, tables, or animated and interactive elements.
---

# UI Components

## Library choice

Use an existing accessible primitive before writing your own. Pick **one** foundation per project, then add only what the design needs.

| Need | Default pick | Alternatives |
| --- | --- | --- |
| Foundation | **shadcn/ui** | Base UI, Radix, React Aria (hardest a11y), MUI (enterprise speed) |
| Before building anything complex | Search **21st.dev** | shadcn blocks, coss ui, Kibo UI |
| Animated sections and effects | **Magic UI** or **Motion Primitives** | Aceternity, React Bits, Animate UI, Skiper UI |
| 3D | **React Three Fiber** + drei | ThreeUI (ready-made), Spline (visual) |
| AI chat interface | **AI Elements** | assistant-ui, Prompt Kit |
| Tables | **TanStack Table** + shadcn data table | TanStack Virtual for long lists |
| Charts | **shadcn charts** (Recharts) | visx, Tremor |
| Forms | **React Hook Form + Zod** | TanStack Form |
| Toasts / command palette | **Sonner** / **cmdk** | |
| No React (plain HTML) | **HyperUI** | Preline, Flowbite |

The full list (50 sources, with links and what each is best at) is in `references/component-sources.md`. Load it when the table above isn't enough.

**Base UI or Radix?** `npx shadcn init` picks Base UI; `npx shadcn init -b radix` picks Radix. In an existing project, use whatever it already has; never switch bases as part of a UI task. Radix composes with `asChild`, Base UI with a `render` prop.

Don't mix MUI with shadcn in one project. Their styling models conflict.

Effects libraries are easy to overuse. One or two effects per page, tied to the signature in the design brief.

**Restyle everything.** shadcn's defaults are recognisable. Change radius, colors, fonts, and spacing to match the design tokens so it never looks like a stock shadcn site.

## Icons

Pick the set by the brand's personality, not by habit:

| Design feels | Set |
| --- | --- |
| Geometric, SaaS, dev tool | Lucide or Tabler, stroke 1.5 |
| Friendly, rounded, consumer | Phosphor regular or duotone |
| Editorial, serif, luxury | Phosphor light/thin or Iconoir |
| Dense dashboard | Radix Icons or Heroicons micro/mini |
| Enterprise | Carbon |

- Default to **Lucide** when nothing points elsewhere.
- Brand and tech logos: **Simple Icons** (https://simpleicons.org) or **svgl** (https://svgl.app) for color versions.
- One icon set per project. Never mix outline and filled styles.
- Never use emojis as icons in UI.
- Consistent sizing: `size-4` inline with text, `size-5` in buttons and nav, `size-6` for feature icons.
- Same `strokeWidth` everywhere (1.5 or 2, pick one).
- Decorative icons get `aria-hidden="true"`. Icon-only buttons need `aria-label`.

All icon sets, animated icons, logos, flags, illustrations, photos, and SVG tooling are in `references/icons-and-assets.md`.

## Building a primitive

Every primitive follows this shape: variants via `cva`, merged classes via `cn`, forwarded props. This matches shadcn's Radix Button, so `asChild` works for links. On a Base UI project, start from shadcn's Base UI Button instead and keep the same variants; it uses the `render` prop in place of `asChild`.

```tsx
import type { ComponentProps } from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition duration-150 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-ink hover:bg-accent/90",
        secondary: "border border-line bg-surface text-ink hover:bg-bg",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        // sm is for dense desktop UI; use md or lg on touch screens (44px minimum)
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

// type defaults to "button" so it never submits a form by accident
export function Button({ className, variant, size, asChild = false, type = "button", ...props }: ButtonProps) {
  // asChild renders the child (e.g. a Link) with button styles instead of a <button>
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      type={asChild ? undefined : type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

Usage: `<Button>Save changes</Button>`, `<Button asChild><Link href="/signup">Start free</Link></Button>`.

For async actions, add a loading state: disable the button, keep its width, and swap the label for a spinner plus text ("Saving...").

## Component checklist

Every interactive component must have:

- [ ] All states: default, hover, active, focus-visible, disabled, loading (if async)
- [ ] Touch target at least 44x44px on mobile
- [ ] Keyboard support (Enter/Space for buttons, Escape for overlays, arrows for menus)
- [ ] A visible focus ring that matches the brand
- [ ] Empty, loading, and error states (for anything showing data)
- [ ] Works in light and dark mode if the product has both
- [ ] Labels, errors, and empty states follow `skills/copywriting` ("Send invoice", not "Submit")
- [ ] Icons from the project's one set, at the standard sizes above

## Patterns that look premium

- Buttons with a subtle inner highlight or gradient border on primary CTAs
- Cards with 1px borders, soft shadows, and a hover lift (`hover:-translate-y-0.5`)
- Inputs with clear labels above (not placeholder-only), helper text, and inline errors
- Badges with tinted backgrounds (`bg-accent/10 text-accent`) instead of solid fills
- Skeleton loaders shaped like the real content, not spinners
- Icon plus label on key buttons (icon on the side the action moves toward, e.g. arrow right for "Next")

Before building any of these from scratch, search the registries in `references/component-sources.md`. Then restyle to your tokens.
