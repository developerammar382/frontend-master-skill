---
name: frontend-master-animation-motion
description: Smooth, purposeful animation with GSAP, Motion, Lenis, and Three.js. Use when adding scroll effects, page transitions, micro-interactions, or 3D scenes.
---

# Animation and Motion

Motion makes a site feel alive and expensive. Bad motion makes it feel slow and cheap. Every animation needs a reason: guide attention, show a relationship, or give feedback. No motion at all is also a failure: the page feels like a static mockup.

## Motion inventory (required, written in the brief)

Plan motion before code, like color and type. Minimum per site type:

| | Marketing, portfolio, launch | App, dashboard |
| --- | --- | --- |
| **Load sequence** | Hero headline, support, CTA, and visual arrive in a choreographed order, done in 1.2s | Skeletons that resolve into content |
| **Section entrances** | Every section, at least 3 different styles across the page | Panels and lists fade or slide in once |
| **Hover and press** | Every interactive element: buttons, cards, links, nav | Same |
| **Showpiece** | One scroll moment people remember: pinned story, text reveal, parallax depth, 3D, or interactive demo | Not required |
| **State changes** | Tabs, filters, accordions, menus animate between states | Same, plus layout animation on reorder |

Write it like this in the brief:

```
Motion: load = TextReveal headline, stagger CTA + proof, parallax hero media
        sections = clip (work), blur (about), stagger (services), scale (contact)
        hover = card lift + image zoom, button press, link underline draw
        showpiece = pinned case-study scroll, image swaps per step
```

## Motion primitives (use these first)

Copy `examples/motion/` into `components/motion/`. They share timing from one file, handle reduced motion, and keep components clean:

| Primitive | Use for |
| --- | --- |
| `Reveal` | Section and block entrances. Variants: `up`, `fade`, `blur`, `scale`, `clip` |
| `Stagger` + `StaggerItem` | Lists, grids, hero sequences (`trigger="load"`) |
| `TextReveal` | Headlines that rise word by word from a mask |
| `Parallax` | Depth on media while scrolling |
| `motion.ts` | Shared easing, durations, and stagger. Change the site's feel here |

Build anything bigger (pinned scenes, horizontal scroll, 3D) as its own component that imports from `motion.ts`.

## Hover and press with Tailwind only

No JavaScript needed for most micro-interactions:

```tsx
// Card: lift, deepen shadow, zoom the image inside
<article className="group overflow-hidden rounded-lg transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
  <img className="transition duration-700 ease-out group-hover:scale-105" ... />
</article>

// Button: press feedback
<button className="transition active:scale-[0.97]">...</button>

// Link: underline that draws in
<a className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_1px]">...</a>
```

## Tool choice

| Need | Use |
| --- | --- |
| Component state, enter/exit, layout, gestures | **Motion** (`motion/react`, formerly Framer Motion) |
| Scroll-driven timelines, pinning, text splitting | **GSAP** + ScrollTrigger + SplitText (`@gsap/react`) |
| Smooth scrolling | **Lenis** |
| 3D scenes | **Three.js** via **React Three Fiber** + **drei** |
| Ready-made animated text/backgrounds | React Bits, Aceternity UI, Magic UI, Motion Primitives |
| Ready-made 3D components and shaders | ThreeUI |
| Animated icons | lucide-animated (Motion), Lordicon (Lottie) |
| Simple hover/focus transitions | Tailwind `transition-*` |
| Vector animations from designers | Lottie or Rive |

GSAP is free for all uses, including its formerly paid plugins. Don't load GSAP and Motion for the same job; Motion for UI, GSAP for scroll storytelling.

For ideas and working source code, see the motion section of `references/inspiration.md` (Codrops, GSAP showcase, Motion examples). Library links are in `references/component-sources.md`.

## Timing

| Type | Duration |
| --- | --- |
| Hover, press, toggle | 120-200ms |
| Dropdowns, tooltips | 150-250ms |
| Modals, sheets | 250-350ms |
| Section reveals | 500-900ms |
| Hero intro sequence | under 1.5s total |

- Ease out for entrances: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out).
- Ease in for exits, shorter than entrances.
- Stagger lists by 40-80ms. More than 10 items: cap total stagger at ~600ms.
- No bouncy springs on serious products. Springs with `bounce: 0` to `0.15` only.

## Smoothness rules

- Loops and scroll-linked motion: only `transform` and `opacity`. One-shot entrances may also use `filter` and `clip-path`. Never animate `width`, `height`, `top`, or `left`.
- Use `will-change` sparingly, only during the animation.
- Content must be readable without waiting. The hero starts moving within 200ms and settles within 1.2s.
- Text stays in the HTML even while it's visually hidden, so SEO is unaffected. Use `once: true` on scroll reveals so content never disappears again.
- Clean up: use `useGSAP()` from `@gsap/react` so ScrollTriggers die on unmount.
- Test on a throttled CPU (4x slowdown in devtools). If it stutters there, simplify.

## Reduced motion (required)

```tsx
// Motion
import { useReducedMotion } from "motion/react";
const reduce = useReducedMotion();
```

```ts
// GSAP
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  // scroll animations here
});
```

With reduced motion: no parallax, no auto-play, no large movement. Keep short fades so the page still feels finished. Gentler, not off. The primitives in `examples/motion/` already do this.

## Patterns worth using

- **Hero text reveal**: split lines, translate up from a mask, stagger 80ms.
- **Scroll-pinned feature story**: pin a product visual, swap content as sections scroll past.
- **Magnetic buttons** and cursor-follow effects (desktop only, `hover: hover`).
- **Marquee** for logos (pause on hover, duplicated for seamless loop).
- **Number counters** that run once when in view.
- **Layout animations** for tabs, filters, and reordering (`layout` prop in Motion).
- **Shared element transitions** between list and detail (View Transitions API or Motion `layoutId`).

## Three.js rules

- Lazy-load the canvas (`next/dynamic` with `ssr: false`) and show a static poster first.
- Cap `dpr={[1, 2]}`, use compressed GLB (Draco/Meshopt), keep scenes under ~1MB.
- Pause rendering when off-screen (`frameloop="demand"` or IntersectionObserver).
- Provide a static image fallback on low-power devices and reduced motion.

## GSAP + React example

```tsx
"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-reveal]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    });
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}
```
