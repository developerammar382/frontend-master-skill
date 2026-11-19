# Component Sources

The complete list of component libraries and registries. This is the single source of truth: `skills/ui-components` only summarizes it. Load this when choosing a library or building an interactive section.

## Foundation (pick one)

| Library | Use when |
| --- | --- |
| [shadcn/ui](https://ui.shadcn.com) | Default for React + Tailwind. You own the code. Includes blocks and charts. New projects use Base UI by default (since July 2026); `-b radix` for Radix. |
| [Base UI](https://base-ui.com) | Unstyled primitives from the team behind Radix and MUI. shadcn's default base. Package: `@base-ui/react`. |
| [Radix Primitives](https://www.radix-ui.com/primitives) | Mature, unstyled, accessible behavior. Install the single `radix-ui` package, not separate `@radix-ui/react-*` packages. |
| [React Aria](https://react-aria.adobe.com) | Accessibility matters most: complex widgets, date pickers, drag and drop, i18n. |
| [Headless UI](https://headlessui.com) | Small set of Tailwind-friendly primitives from the Tailwind team. |
| [Ark UI](https://ark-ui.com) | Headless components that work in React, Vue, Solid, and Svelte. |
| [MUI](https://mui.com) | Enterprise, data-heavy apps where speed beats a custom look. |

Pick one. Don't mix styling models (MUI with shadcn) in one project.

## shadcn-compatible registries

Code to paste and restyle. Most install through the shadcn CLI. Search here before building anything complex.

| Source | Strong at |
| --- | --- |
| [21st.dev](https://21st.dev) | Largest community registry. Search it first. |
| [shadcn blocks](https://ui.shadcn.com/blocks) | Official dashboards, sidebars, login pages, charts. |
| [coss ui](https://coss.com/ui) | Cal.com's components on Base UI (formerly Origin UI; originui.com redirects here). |
| [Kibo UI](https://www.kibo-ui.com) | Kanban, Gantt, color picker, code block, and other complex pieces. |
| [ReUI](https://reui.io) | Data grids, filters, and app blocks. |
| [Shadcnblocks](https://www.shadcnblocks.com) | Large library of marketing sections (paid tiers). |
| [Tailwind Plus](https://tailwindcss.com/plus) | Paid. Very well-built marketing and app UI from the Tailwind team. |

## Motion and effects

Effects are easy to overuse. One or two per page, tied to the signature in the design brief. Five glowing borders is a template, not a design.

| Source | Strong at |
| --- | --- |
| [Magic UI](https://magicui.design) | Marquees, bento grids, number tickers, animated beams. |
| [Aceternity UI](https://ui.aceternity.com) | Hero effects, spotlight cards, parallax, 3D cards. |
| [React Bits](https://reactbits.dev) | Animated text, backgrounds, and interactive components. |
| [Motion Primitives](https://motion-primitives.com) | Restrained Motion-based components for product UI. |
| [Animate UI](https://animate-ui.com) | Animated versions of shadcn components. |
| [Cult UI](https://www.cult-ui.com) | Animated blocks and full templates. |
| [Skiper UI](https://www.skiper-ui.com) | Uncommon components, good for a signature move. |
| [Eldora UI](https://www.eldoraui.site) | Landing page sections and templates. |
| [Hover.dev](https://www.hover.dev) | Animated components (free and paid). |
| [NumberFlow](https://number-flow.barvian.me) | Smooth animated numbers for prices, stats, and counters. |

## 3D

| Source | Strong at |
| --- | --- |
| [ThreeUI](https://threeui.com) | Ready Three.js components, shaders, and 3D sections. Community and Pro tiers. |
| [React Three Fiber](https://r3f.docs.pmnd.rs) + [drei](https://drei.docs.pmnd.rs) | Building custom 3D scenes in React. |
| [Spline](https://spline.design) | Designing 3D visually, then embedding it. |

Performance rules for 3D live in `skills/animation-motion`.

## AI and chat interfaces

| Source | Strong at |
| --- | --- |
| [AI Elements](https://elements.ai-sdk.dev) | Chat, reasoning, tool calls, and sources. Works with the Vercel AI SDK. |
| [assistant-ui](https://www.assistant-ui.com) | Complete chat UI: streaming, threads, attachments. |
| [Prompt Kit](https://www.prompt-kit.com) | Prompt inputs, messages, and response blocks. |
| [Kokonut UI](https://kokonutui.com) | AI app components on shadcn and Motion. |

## Plain Tailwind (no React needed)

| Source | Strong at |
| --- | --- |
| [HyperUI](https://hyperui.dev) | Free copy-paste Tailwind sections. |
| [Preline](https://preline.co) | Tailwind components with small JS plugins. |
| [Flowbite](https://flowbite.com) | Large Tailwind set. Restyle fully or it looks generic. |
| [Uiverse](https://uiverse.io) | Community HTML/CSS buttons, loaders, and toggles. |

## Specialized pieces

| Need | Use |
| --- | --- |
| Tables | [TanStack Table](https://tanstack.com/table) (+ shadcn data table) |
| Long lists | [TanStack Virtual](https://tanstack.com/virtual) |
| Charts | shadcn charts (built on [Recharts](https://recharts.org)), [visx](https://airbnb.io/visx), or [Tremor](https://tremor.so) (free and open source since Vercel acquired it) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev), or [TanStack Form](https://tanstack.com/form) |
| Date picker | [React DayPicker](https://daypicker.dev) |
| Date handling | [date-fns](https://date-fns.org) |
| One-time codes | [input-otp](https://input-otp.rodz.dev) |
| Toasts | [Sonner](https://sonner.emilkowal.ski) |
| Command palette | [cmdk](https://github.com/dip/cmdk) |
| Drag and drop | [dnd kit](https://dndkit.com) |
| Carousels | [Embla Carousel](https://www.embla-carousel.com) |
| Rich text | [Tiptap](https://tiptap.dev) |

## Before adding any library

- Does the existing stack already do this? Check `package.json` first.
- Is it maintained? Last release within a year, open issues answered.
- What does it cost in bundle size? Check https://bundlephobia.com.
- Is it accessible? Test it with the keyboard before you commit to it.
- Restyle it to the project's tokens. Library defaults are recognizable.
