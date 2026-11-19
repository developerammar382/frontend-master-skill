---
name: frontend-master-performance
description: Hit Core Web Vitals targets with optimized images, fonts, bundles, and rendering. Use before shipping and whenever adding heavy media, animation, or 3D.
---

# Performance

A beautiful site that loads slowly loses half its visitors. Fast is part of the design.

## Targets

| Metric | Target (75th percentile, mobile) |
| --- | --- |
| LCP | under 2.5s |
| INP | under 200ms |
| CLS | under 0.1 |
| Lighthouse Performance | 90+ on mobile |
| JS shipped on landing pages | under 200KB gzipped |

## Images

- Use `next/image` (or `<img>` with `width`, `height`, `loading="lazy"`, `decoding="async"`).
- Hero/LCP image: `preload` (Next 16+, `priority` on older versions) or `fetchpriority="high"`, never lazy.
- Serve AVIF/WebP. Size with `sizes` so phones don't download desktop images.
- Always set dimensions or `aspect-*` to prevent layout shift.
- SVG for icons and logos. Compress with SVGO.

## Fonts

- Self-host with `next/font` or Fontsource. No render-blocking Google Fonts `<link>` chains.
- Load only the weights you use (usually 2-3). Prefer variable fonts.
- `font-display: swap`, and preload the display font used in the hero.
- Use `size-adjust` / `next/font` fallback metrics to avoid layout shift on swap.

## JavaScript

- Server Components by default; `"use client"` only on interactive leaves.
- Lazy-load heavy, below-the-fold pieces: `next/dynamic` for 3D, charts, maps, video players.
- Import only what you use: `import { ArrowRight } from "lucide-react"`, never the whole set. Don't fetch icons from the Iconify API at runtime in production; bundle them.
- Check bundles: `npx next analyze` (Next 16.1+ with Turbopack), the `@next/bundle-analyzer` plugin (webpack), or `npx vite-bundle-visualizer`.
- Don't ship a 3D library for one spinning logo. Use a video or CSS.

## Rendering

- Static generation or ISR for marketing pages.
- Stream slow data with `Suspense` and skeletons.
- Debounce search inputs, virtualize lists over ~100 rows (TanStack Virtual).
- Avoid layout thrash in scroll handlers. Use IntersectionObserver or ScrollTrigger.

## Video

- Autoplay hero video: `muted playsInline loop`, poster image, compressed under ~3MB, `preload="none"` below the fold.
- Offer a static image under reduced motion and on Save-Data.

## Testing

```bash
npx lighthouse http://localhost:3000 --preset=desktop --view
npx lighthouse http://localhost:3000 --view   # mobile is the default
```

Also test production builds only (`next build && next start`). Dev mode numbers are meaningless.
