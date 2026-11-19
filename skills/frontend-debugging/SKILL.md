---
name: frontend-master-debugging
description: Find and fix common frontend bugs - overflow, layout breaks, z-index, hydration errors, flicker, animation jank, and broken styles. Use when something looks or behaves wrong.
---

# Frontend Debugging

Reproduce first, guess never. Find the exact element and the exact cause, then make the smallest fix.

## Process

1. **Reproduce** at a specific width, browser, and state. Screenshot it.
2. **Isolate** the element in devtools. Check computed styles, not just classes.
3. **Find the cause** before editing. Name it in one sentence.
4. **Fix minimally.** Don't rewrite the component to fix one line.
5. **Verify** at all four widths, since fixes often break another breakpoint.

## Common bugs and fixes

| Symptom | Usual cause | Fix |
| --- | --- | --- |
| Horizontal scroll on mobile | Element wider than viewport: fixed widths, `w-screen` + padding, long words, negative margins, absolutely positioned decoration | Find it: `document.querySelectorAll('*').forEach(e => e.scrollWidth > innerWidth && console.log(e))`. Use `max-w-full`, `min-w-0`, `break-words`. Clip decorations with `overflow-hidden` on their parent (not `body`). |
| Flex child won't shrink, text overflows | Flex items default to `min-width: auto` | Add `min-w-0` to the flex child |
| Dropdown hidden behind content | Stacking context from `transform`, `filter`, `opacity`, or `overflow-hidden` on a parent | Render in a portal (Base UI and Radix do this) or fix the parent's stacking context. Don't escalate `z-[9999]`. |
| `position: sticky` doesn't stick | A parent has `overflow` set, or no `top` value | Remove `overflow` from ancestors, add `top-0` |
| Hydration mismatch | `Date`, `Math.random`, `window`, or locale formatting during render | Move to `useEffect`, or render on client only for that leaf. Check for invalid HTML nesting (`<div>` in `<p>`, `<a>` in `<a>`). |
| Flash of unstyled/hidden content | Animation initial state set after first paint | Set initial state in the animation library before paint, or use CSS that matches the first frame |
| Dark mode flash on load | Theme set after hydration | Use `next-themes` with `suppressHydrationWarning` on `<html>` |
| Layout shift on load | Images/fonts without dimensions or fallback metrics | Set `width`/`height` or `aspect-*`; use `next/font` |
| Janky scroll animation | Animating layout properties, too many ScrollTriggers, heavy filters | Animate `transform`/`opacity` only; batch triggers; remove `backdrop-blur` on large moving areas |
| Tailwind class not applied | Dynamic class strings (`bg-${color}-500`), or file not in content paths | Use full static class names in a map; check config/`@source` |
| Click does nothing | Invisible overlay on top, `pointer-events`, or wrong element | Inspect with devtools "pick element" at the click point |
| `100vh` cut off on mobile | Browser UI bars | Use `min-h-dvh` |
| Ghost ScrollTriggers after navigation | Not cleaned up | Use `useGSAP()` with `scope`, or `ctx.revert()` on unmount |

## Tools

- Chrome DevTools: Layout panel (grid/flex overlays), Rendering panel (paint flashing, layout shift regions), Performance panel (long tasks)
- React DevTools: Profiler for unnecessary re-renders
- `outline: 1px solid red` on `*` temporarily to see box boundaries: `[&_*]:outline [&_*]:outline-red-500`

## Rule

After any fix, re-run `skills/browser-verification`. Report the cause, the fix, and how you verified it.
