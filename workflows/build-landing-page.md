# Workflow: Build Landing Page

Use for marketing sites, portfolios, personal sites, product launches, and startup landing pages.

The goal: a visitor gets the value in 5 seconds, feels the craft in 10, and keeps scrolling.

## 1. Brief (before any code)

Load `skills/design-intelligence`, `skills/animation-motion`, and `skills/copywriting`.

Write this, short:

```
Goal:       <one conversion: sign up, book a call, hire me, buy>
Direction:  <one sentence>
References: <3 from references/inspiration.md, one principle each>
Palette / Type / Icons / Voice: <from the design brief template>
Signature:  <the one move people will remember>
Motion:     <the inventory: load sequence, reveal styles, hover set, showpiece scene>
Sections:   <ordered list, each with its layout type>
```

Section layouts must vary. Pick from: full-bleed, split, bento, asymmetric, sticky-scroll, marquee, horizontal scroll, editorial grid, oversized type. No two neighbours share a layout.

Draft the headline, subhead, and CTA now. Design around real words.

## 2. Slice (hero + nav at final quality)

- Tokens in `globals.css` (`examples/tokens.css`), including effect utilities you'll need (`skills/design-systems`).
- Copy the motion primitives from `examples/motion/` into `components/motion/`.
- Build `Header`, `MobileMenu`, and the hero with its load sequence and signature move. Use real components from the start (`skills/frontend-architecture`), not a throwaway mockup.
- Screenshot at 375 and 1440. Run the no-rules duel from `skills/visual-critique` on the slice.

**Gate:** don't build anything else until the slice would hold up on Godly or Awwwards. If it wouldn't, push it now. The rest of the page inherits this bar.

## 3. Extend (one section at a time)

For each section, in order:
1. Build it from shared primitives, mobile first.
2. Give it its motion: entrance (vary the style, don't fade-up everything), hover states, scroll behavior.
3. Check it against the slice. Same bar, same voice.

Default story order (adapt it): nav, hero, proof, problem/value, features or work, demo or case study, testimonials, pricing (if relevant), FAQ, final CTA, footer.

Portfolios: the work is the hero. Projects get large media, a hover preview, and a real case-study layout, not a grid of identical cards.

## 4. Harden

- `skills/accessibility`: keyboard pass, focus, contrast, reduced-motion variant of every animation.
- `skills/performance`: Lighthouse mobile 90+ with motion on. Lazy-load 3D and heavy media.
- `skills/testing`: smoke, a11y, and interaction tests.
- SEO: title, description, Open Graph image, sitemap.
- Refactor anything duplicated twice into a component. Run the token audit.

## 5. Verify

- `skills/browser-verification` at four widths.
- `skills/visual-critique` including the no-rules duel. Fix the lowest score first.
- `checklists/visual-quality.md` and the other checklists.
- 5-second test: from the hero screenshot alone, can you say what this is and who it's for?
