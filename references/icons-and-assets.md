# Icons and Visual Assets

Pick one icon set that fits the brand, then stick to it. Load this when choosing icons, logos, illustrations, or imagery.

## Choose the set by personality

Icons should match the type. The stroke weight should feel like the body font's weight.

| If the design is | Use | Why |
| --- | --- | --- |
| Geometric sans, SaaS, dev tools | **Lucide** or **Tabler** at stroke 1.5 | Clean, neutral, huge coverage |
| Friendly, rounded, consumer | **Phosphor** (regular or duotone) | Six weights, warm shapes |
| Editorial, serif, luxury | **Phosphor** (light or thin) or **Iconoir** | Thin strokes sit well next to serifs |
| Dense dashboards, small UI | **Radix Icons** (15px grid) or **Heroicons** (micro / mini) | Built for small sizes |
| Enterprise, data-heavy | **Carbon Icons** | Designed for complex products |
| Android / Material products | **Material Symbols** | Variable weight, fill, and grade |
| Expressive, modern, playful | **Hugeicons** (check tier) | Many styles in one family |

Default when nothing points elsewhere: **Lucide**. It ships with shadcn/ui.

## UI icon sets

| Set | Package | License | Notes |
| --- | --- | --- | --- |
| [Lucide](https://lucide.dev) | `lucide-react` | ISC | Default. Consistent 24px grid, adjustable stroke. |
| [Phosphor](https://phosphoricons.com) | `@phosphor-icons/react` | MIT | Thin, light, regular, bold, fill, duotone. |
| [Tabler](https://tabler.io/icons) | `@tabler/icons-react` | MIT | Very large set, outline and filled. |
| [Heroicons](https://heroicons.com) | `@heroicons/react` | MIT | From the Tailwind team. Outline, solid, mini, micro. |
| [Radix Icons](https://www.radix-ui.com/icons) | `@radix-ui/react-icons` | MIT | Crisp at 15px. Small set. |
| [Iconoir](https://iconoir.com) | `iconoir-react` | MIT | Light, elegant stroke style. |
| [Remix Icon](https://remixicon.com) | `@remixicon/react` | Check current license | Line and fill pairs. License changed in v4, read it. |
| [Hugeicons](https://hugeicons.com) | `@hugeicons/react` | Free tier + Pro | Many styles. Free tier covers only part of the set. |
| [Material Symbols](https://fonts.google.com/icons) | `@material-symbols/svg-400` | Apache 2.0 | Variable font or SVG. |
| [Carbon](https://carbondesignsystem.com/elements/icons/library) | `@carbon/icons-react` | Apache 2.0 | IBM's set for enterprise UI. |
| [Iconify](https://iconify.design) | `@iconify/react` or `unplugin-icons` | Per set | Over 200,000 icons from 150+ sets. Search at https://icones.js.org |

To search several React sets at once, use https://21st.dev/icons.

## Animated icons

Use animated icons for feedback (copy, success, toggle), not decoration. Respect `prefers-reduced-motion`.

| Source | Notes |
| --- | --- |
| [lucide-animated](https://lucide-animated.com) | Lucide icons animated with Motion. MIT, copy-paste. Pairs with a Lucide project. |
| [Lordicon](https://lordicon.com) | Polished Lottie icons. Free and paid tiers. |
| [useAnimations](https://useanimations.com) | Small set of micro-interaction icons. |
| [Rive community](https://rive.app/community) | Interactive, state-driven icons and illustrations. |

## Brand and tech logos

| Source | Notes |
| --- | --- |
| [Simple Icons](https://simpleicons.org) | 3,000+ brand logos, one color each. CC0 for the SVGs. `simple-icons` on npm. |
| [svgl](https://svgl.app) | Full-color brand logos and wordmarks, light and dark versions. |
| [theSVG](https://thesvg.org) | Large brand and cloud icon library with npm packages. |
| [Devicon](https://devicon.dev) | Programming languages and dev tools. |

Logos are trademarks. Follow each brand's guidelines: don't recolor, stretch, or redraw them. For "trusted by" rows, use logos only of real customers with permission.

## Flags

| Source | Notes |
| --- | --- |
| [flag-icons](https://flagicons.lipis.dev) | SVG country flags in 4:3 and 1:1. MIT. |
| `country-flag-icons` (npm) | React components, 3:2 ratio. |

Don't use flags to stand for languages. Use the language name ("Deutsch", "Español").

## Illustrations and 3D

Stock illustrations are one of the fastest ways to look generic. Prefer real product UI, photography, or custom art. If you must use them, pick a style and recolor it to the palette.

| Source | Notes |
| --- | --- |
| [Blush](https://blush.design) | Customizable illustration packs from many artists. |
| [Open Peeps](https://www.openpeeps.com) | Hand-drawn people. CC0. |
| [3dicons](https://3dicons.co) | 3D icon renders. CC0. |
| [unDraw](https://undraw.co) | Recolorable flat illustrations. Very common; use only for empty states. |
| [Spline](https://spline.design) | Build or remix interactive 3D for hero visuals. |

## Photography

| Source | Notes |
| --- | --- |
| [Unsplash](https://unsplash.com) | Free, high quality. Avoid the most popular shots everyone uses. |
| [Pexels](https://www.pexels.com) | Free photos and video. |

Rules for photos: crop on purpose, grade them to the palette (same warmth and contrast), and never use a handshake, a lightbulb, or people laughing at a laptop.

## Tooling

| Tool | Use it for |
| --- | --- |
| [SVGOMG](https://jakearchibald.github.io/svgomg) | Minify SVGs before committing. |
| [SVGR](https://react-svgr.com) | Turn custom SVGs into React components. |
| [unplugin-icons](https://github.com/unplugin/unplugin-icons) | Import any Iconify icon as a component, bundled at build time. |

## Rules

- **One set per project.** Never mix outline and filled styles in the same context. Filled is only for active or selected states, from the same set.
- **Import icons by name** (`import { Bell } from "lucide-react"`). Never `import *`. Bundle size matters.
- **Don't fetch icons at runtime in production.** Iconify's on-demand API is fine for prototypes. For shipped work, bundle with `unplugin-icons` or the set's own package.
- **Sizes:** `size-4` inline with text, `size-5` in buttons and nav, `size-6` for feature icons. Align icons to the text's cap height, not its box.
- **One stroke width everywhere** (1.5 or 2). Set it once in a wrapper or with CSS.
- **Accessibility:** decorative icons get `aria-hidden="true"`. Icon-only buttons need `aria-label`. Status icons need text beside them.
- **Never use emojis as UI icons.**
- **Custom icons** must match the chosen set's grid, stroke, corner radius, and end caps.
