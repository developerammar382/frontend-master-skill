---
name: frontend-master
description: Build, redesign, and audit production frontends that look hand-crafted by a senior design team. Use for any UI work - landing pages, websites, dashboards, admin panels, components, redesigns, "enhance this page", screenshot-to-code, or frontend audits in React, Next.js, TypeScript, and Tailwind.
---

# Frontend Master

You are designing for a product that will be judged in the first three seconds.
Generic output is a failure, even if it works. Messy code is a failure, even if it looks good.

This file is the entry point. Read it fully, then load only the files the task needs.

## Non-negotiables

These apply to every task. No exceptions unless the user explicitly overrides one.

1. **Components first.** Before writing any page, list the reusable components it needs. Build those, then compose the page.
2. **Junior-readable code.** A junior developer must understand any file in under two minutes. No clever abstractions, no deep generics, no magic.
3. **Short comments.** One line, only where the "why" isn't obvious. Never narrate what the code does.
4. **Tailwind only.** Custom CSS only for things Tailwind cannot do (complex keyframes, third-party overrides). Put it in one file.
5. **Design tokens before pixels.** Define color, type, spacing, and radius tokens first. Never hardcode a value that has a token.
6. **No generic look.** No default blue/green, no Inter-on-white, no centered-text-only hero, no flat link-row navbar, no emoji icons.
7. **Mobile first.** Write base styles for 375px, then scale up with `sm:` `md:` `lg:` `xl:`.
8. **Accessible by default.** Keyboard, focus, contrast, labels, reduced motion. Not an afterthought.
9. **Verify before you claim done.** Render it, screenshot it at four widths, run the checklists. See `skills/browser-verification`.
10. **Respect the brand.** If the product has a logo, colors, or voice, everything bends around them. Never override an existing brand with your taste.
11. **Human copy.** Every word is specific to this product. No AI phrasing ("seamless", "unlock", "elevate"). See `skills/copywriting`.

## Routing

Pick the workflow that matches the request, then follow it step by step.

| Request looks like | Workflow |
| --- | --- |
| "Build a site/app/page for X" | `workflows/build-from-scratch.md` |
| "Enhance / improve / redesign / modernize this" | `workflows/redesign-existing-ui.md` |
| A screenshot, Figma frame, or image of a UI | `workflows/screenshot-to-code.md` |
| Dashboard, admin panel, analytics, CRM, internal tool | `workflows/build-dashboard.md` |
| Landing page, marketing site, product launch page | `workflows/build-landing-page.md` |
| "Review / audit / what's wrong with this UI" | `workflows/audit-frontend.md` |

Load skills as the workflow tells you. Load rules for the stack in use:
`rules/react.md`, `rules/nextjs.md`, `rules/typescript.md`, `rules/tailwind.md`, `rules/accessibility.md`.

## Skill index

| Skill | Use it for |
| --- | --- |
| `skills/design-intelligence` | Art direction: palette, type, layout, hero, navigation concepts |
| `skills/design-systems` | Tokens, scales, theming, consistency rules |
| `skills/frontend-architecture` | Folder structure, component boundaries, state, data flow |
| `skills/ui-components` | Library choice, component patterns, icons |
| `skills/responsive-design` | Mobile-first layout, breakpoints, mobile navigation |
| `skills/animation-motion` | GSAP, Motion, Three.js, Lenis, timing and easing |
| `skills/accessibility` | WCAG 2.2 AA in practice |
| `skills/performance` | Core Web Vitals, images, fonts, bundle size |
| `skills/visual-critique` | Self-review against a senior designer's eye |
| `skills/browser-verification` | Rendering, screenshots, automated checks |
| `skills/frontend-debugging` | Layout bugs, hydration errors, z-index, overflow |
| `skills/copywriting` | Headlines, CTAs, empty states, errors: copy that sounds human |

## References

Load these when the workflow needs sources. They're lists, not instructions.

| File | Contains |
| --- | --- |
| `references/inspiration.md` | Site galleries, section galleries, app patterns, motion, type, color, design systems |
| `references/icons-and-assets.md` | Icon sets by personality, animated icons, logos, flags, illustrations, photos |
| `references/component-sources.md` | Primitives, copy-in component registries, specialized libraries |

## Definition of done

A task is done only when all of these are true:

- [ ] `checklists/visual-quality.md` passes
- [ ] `checklists/responsive-quality.md` passes at 375, 768, 1280, 1440
- [ ] `checklists/accessibility.md` passes
- [ ] `checklists/production-readiness.md` passes (for shipped work)
- [ ] Screenshots were taken and looked at, not assumed
- [ ] You can name what makes this design distinct from a template

If you could not verify something, say so plainly. Never report unverified work as finished.

## How to report back

Keep it short:
1. What you built or changed (one line per component or section)
2. The design direction in one sentence (palette, type, mood)
3. What you verified and how
4. Anything you could not verify or that needs a decision
