# Workflow: Build Landing Page

Use for marketing sites, product launches, startup landing pages, and portfolios.

The goal: a visitor understands the value in 5 seconds and wants to keep scrolling.

## 1. Brief

- Load `skills/design-intelligence`. Write the design brief with a clear signature move.
- Define the single conversion goal (sign up, book a demo, buy, join waitlist).
- Pull 3-5 references from `references/inspiration.md` (start with SaaS Landing Page, Godly, Navbar Gallery, Footer Design).
- Load `skills/copywriting`. Draft the headline, subhead, and CTAs before designing the hero.

## 2. Section plan

Pick and order sections for the story. A strong default:

1. **Navigation**: logo, dropdowns or mega menu, CTA. Sticky with blur on scroll.
2. **Hero**: headline under 10 words, subline, primary CTA, visual anchor, proof.
3. **Social proof**: customer logos (Simple Icons for known brands) with a metric.
4. **Problem/Value**: what changes for the user, in their language.
5. **Features**: bento grid, scroll-pinned story, or tabbed showcase. Not three equal cards.
6. **Product demo**: real UI, video, or interactive element.
7. **Testimonials**: real names, roles, photos. Wall, carousel, or single big quote.
8. **Pricing** (if relevant): 2-3 plans, highlighted recommended plan, monthly/yearly toggle.
9. **FAQ**: accordion, 5-8 real objections answered.
10. **Final CTA**: bold, full-width, repeat the primary action.
11. **Footer**: grouped links, socials, legal, newsletter (optional).

Vary layout every section. Alternate density, alignment, and background tone.

## 3. Build

- Tokens, then primitives, then `Header`, `MobileMenu`, `Footer`.
- Hero next. Iterate on it until it's genuinely striking at 375 and 1440.
- Then remaining sections, each as its own component in `components/sections/`.

## 4. Motion

- Hero intro sequence (under 1.5s), scroll reveals on sections, logo marquee, hover states.
- One standout scroll moment (pinned feature story, text reveal, 3D, or interactive demo).
- Lenis for smooth scroll if the site has scroll storytelling.
- Reduced motion fallbacks for all of it.

## 5. Conversion details

- Primary CTA visible on load at every width.
- CTA copy is specific: "Start free trial" not "Submit"; "Book a 15-min demo" not "Contact".
- Forms ask for the minimum (email only for waitlists).
- SEO: title, meta description, Open Graph image, semantic headings, `sitemap.xml`.

## 6. Verify

- Full `skills/browser-verification` and `skills/visual-critique`.
- Lighthouse mobile performance 90+ even with animations.
- 5-second test: show the hero screenshot; can you state what the product does and who it's for?
