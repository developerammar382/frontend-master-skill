---
name: frontend-master-architecture
description: Structure frontend code so it stays simple, reusable, and easy for a junior developer to change. Use when starting a project, adding features, or refactoring messy UI code.
---

# Frontend Architecture

The goal is boring, predictable code. Someone new should find any file in seconds and change it without fear.

## Component-first planning

Before writing a page, write this list:

```
Page: Pricing
Reuses:   Button, Badge, Container, Section, SectionHeading
New:      PricingCard (props: plan, featured), PricingToggle (monthly/yearly), FeatureRow
Data:     plans[] from lib/pricing.ts
```

If a pattern appears twice, it becomes a component. If it appears once, keep it inline.

## Folder structure (Next.js App Router)

```
src/
  app/                    # routes only, thin pages
    (marketing)/page.tsx
    dashboard/layout.tsx
  components/
    ui/                   # primitives: Button, Input, Badge, Card (shadcn lives here)
    layout/               # Header, Footer, Sidebar, Container, Section
    sections/             # page sections: Hero, Features, Pricing, FAQ
    dashboard/            # feature components: StatCard, RevenueChart
  hooks/                  # useMediaQuery, useScrollDirection
  lib/                    # utils, constants, data, api clients
  styles/                 # only if custom CSS is truly needed
```

For Vite/React: same structure, with `pages/` or `routes/` instead of `app/`.

## Simplicity rules

- **One component per file.** File name matches component name: `PricingCard.tsx`.
- **Max ~150 lines per component.** Longer means it should be split.
- **Max 3 levels of JSX nesting** before extracting a sub-component.
- **Props are flat and named plainly.** `title`, `description`, `href`, not `config.meta.labelText`.
- **No prop drilling past 2 levels.** Use composition (`children`) first, context second.
- **No premature abstraction.** No factory functions, HOCs, or render props when a plain component works.
- **Data separate from markup.** Arrays of nav items, features, plans live in `lib/` or at the top of the file, then get `.map()`ed.
- **Early returns** over nested ternaries. One ternary in JSX is fine; two nested is not.
- **Descriptive names.** `isMenuOpen`, `handleSubmit`, `featuredPlan`. Never `data2`, `temp`, `flag`.

## Comments

- One line, explain *why*, not *what*.
- Good: `// Delay so the dropdown doesn't close while moving the cursor to it`
- Bad: `// This function handles the click event and sets the state`
- No commented-out code. No JSDoc essays on simple components.

## State

- Local state (`useState`) by default.
- Lift state only to the nearest shared parent.
- URL state (search params) for filters, tabs, pagination that should survive a refresh.
- Server state: TanStack Query or Next.js server components. Don't copy server data into `useState`.
- Global client state (Zustand) only for truly global UI: theme, sidebar collapsed, auth user.

## Server vs client (Next.js)

- Default to Server Components.
- Add `"use client"` only to the smallest leaf that needs interactivity (a toggle, not the whole page).
- Animations, event handlers, and browser APIs live in client components.

## Composition example

```tsx
// Good: simple, readable, reusable
export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-28">
      <Container>
        {eyebrow && <p className="text-sm font-medium text-accent">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-4xl md:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
```

## Red flags (fix on sight)

- A component that takes more than 8 props
- `any` types
- `useEffect` used to derive values from props or state
- Copy-pasted JSX blocks that differ by one string
- Business logic inside JSX
- A `utils.ts` file over 300 lines
