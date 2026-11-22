---
name: frontend-master
description: Build, redesign, and audit production frontends that look hand-crafted by a senior design team and are engineered like a senior codebase. Use for any UI work - landing pages, portfolios, websites, dashboards, admin panels, components, redesigns, "enhance this page", screenshot-to-code, or frontend audits in React, Next.js, TypeScript, and Tailwind.
---

# Frontend Master

Two bars, equal weight. The result must look like an award-shortlisted site **and** read like a senior engineer's codebase. Hitting one and missing the other is a failure.

## The core rule

**Design at full ambition. Engineer it cleanly.**

Engineering rules decide *how* you implement a design. They never decide *how much* design there is. If a rule seems to block a visual idea (a gradient mesh, grain texture, masked headline, pinned scroll scene), the answer is never "drop the idea". It's "implement it the clean way": a token, a `@utility`, a motion primitive, a small component.

Before finishing, ask: *"With no rules at all, would I have built something more striking?"* If yes, take those ideas and build them cleanly. This is the most important check in the skill.

## Non-negotiables

1. **A signature and a motion plan before code.** Every build names one memorable move and lists its motion inventory (`skills/animation-motion`). No plan, no code.
2. **Slice first.** Build the hero and navigation at final quality, motion included, before anything else. Everything after matches that bar.
3. **Motion is part of each section, not a phase.** A section isn't done until its entrance, hover, and scroll behavior are done.
4. **Tailwind-first, tokens for every value.** Effects Tailwind can't express go in `@utility` blocks or `@theme` tokens, never inline styles or scattered CSS (`rules/tailwind.md`).
5. **Components a junior can change.** Small files, plain props, short "why" comments (`skills/frontend-architecture`).
6. **Accessible and fast.** WCAG 2.2 AA, Core Web Vitals green. Reduced motion gets gentler motion, not a broken page.
7. **Respect the brand and write like a human.** Existing logos, colors, and voice win over your taste (`skills/copywriting`).
8. **Verify, don't assume.** Screenshots at 375, 768, 1280, 1440, the tests in `skills/testing`, and an honest report.

## Routing

| Request looks like | Workflow |
| --- | --- |
| Landing page, marketing site, portfolio, personal site, launch page | `workflows/build-landing-page.md` |
| "Build a site/app for X" (multi-page or app) | `workflows/build-from-scratch.md` |
| Dashboard, admin panel, analytics, CRM, internal tool | `workflows/build-dashboard.md` |
| "Enhance / improve / redesign / modernize this" | `workflows/redesign-existing-ui.md` |
| A screenshot, Figma frame, or image of a UI | `workflows/screenshot-to-code.md` |
| "Review / audit / what's wrong with this UI" | `workflows/audit-frontend.md` |

Every build workflow follows the same spine: **Brief → Slice → Extend → Harden → Verify.** Load skills when a workflow step names them, not all at once.

## Skills

| Skill | Use it for |
| --- | --- |
| `skills/design-intelligence` | Art direction, the expression toolkit, hero and navigation |
| `skills/animation-motion` | Motion inventory, timing, the motion primitives |
| `skills/design-systems` | Tokens, `@theme`, `@utility` effects, theming |
| `skills/frontend-architecture` | Folders, component boundaries, state |
| `skills/ui-components` | Libraries, primitives, icons |
| `skills/responsive-design` | Mobile-first layout and mobile navigation |
| `skills/copywriting` | Copy that sounds human |
| `skills/accessibility` | WCAG 2.2 AA in practice |
| `skills/performance` | Core Web Vitals, images, fonts, bundles |
| `skills/testing` | What to test, with which tool, and what not to test |
| `skills/visual-critique` | Scoring against a real bar, the no-rules duel |
| `skills/browser-verification` | Screenshots and automated checks |
| `skills/frontend-debugging` | Layout bugs, hydration, overflow, jank |

Lists of sources live in `references/` (inspiration, icons and assets, component libraries). Working code to copy lives in `examples/` (tokens, header with mega menu, motion primitives).

## Definition of done

- [ ] `checklists/visual-quality.md` passes, including the ambition and motion sections
- [ ] `skills/visual-critique` passes, including the no-rules duel
- [ ] `checklists/responsive-quality.md` and `checklists/accessibility.md` pass
- [ ] Tests from `skills/testing` pass; build, lint, and types are clean
- [ ] `checklists/production-readiness.md` passes for shipped work

If you couldn't verify something, say so. Never report unverified work as finished.

## Report back

1. The design direction and signature, in two sentences
2. What you built (one line per section or component)
3. What you verified and how (commands, widths, scores)
4. What's unverified or needs a decision
