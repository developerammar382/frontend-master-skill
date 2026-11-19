# Checklist: Visual Quality

Every box must be checked by looking at real screenshots. "Probably fine" is not checked.

## First impression
- [ ] Hero has a visual anchor (product UI, 3D, photo, illustration, or interactive element), not text alone
- [ ] Headline is under 10 words, set in the display font, and states the value
- [ ] Proof (logos, metric, rating, testimonial) is visible near the fold
- [ ] Navigation has dropdowns or a mega menu (unless the site truly has 3 or fewer links)
- [ ] Header has a scroll state (shrink, blur, or border)
- [ ] Removing the logo, it would not pass for a template

## Typography
- [ ] Display and body fonts are distinct and suit the product; neither is a generic default for display
- [ ] Max 2 families (+ mono)
- [ ] Body text 16px+; nothing below 13px except legal fine print (never below 12px)
- [ ] Line length 60-75 characters for paragraphs
- [ ] Headlines have no single-word last lines (`text-balance`)
- [ ] Type sizes come from the defined scale only

## Color
- [ ] No framework default brand colors (`blue-500`, `indigo-600`, etc.)
- [ ] One accent, used sparingly for actions and emphasis
- [ ] Neutrals are tinted, not pure grey/black/white
- [ ] All text passes contrast

## Layout
- [ ] Sections vary in layout; no three repeated "heading + 3 cards" blocks
- [ ] Everything aligns to the grid; shared left edges
- [ ] Generous, consistent section spacing
- [ ] One focal point per screen

## Consistency
- [ ] Spacing from the token scale only
- [ ] One radius system; nested radii are smaller than parents
- [ ] One icon set (Lucide), one stroke width, consistent sizes
- [ ] All buttons in a row share height; all buttons use the shared `Button` component
- [ ] Shadows from max 3 levels

## Detail
- [ ] Every interactive element has hover, active, and focus-visible states
- [ ] Loading, empty, and error states designed for data views
- [ ] No emojis used as icons
- [ ] No headings or list items starting with dashes, dots, or decorative symbols
- [ ] Real copy; no lorem ipsum, no "Welcome to our website"
- [ ] Copy passes the `skills/copywriting` checklist (no AI fingerprint words, verb-plus-object buttons)
- [ ] One icon set, one stroke width, chosen to match the type (`references/icons-and-assets.md`)
- [ ] Images are sharp, correctly cropped, and consistent in style
- [ ] Favicon, page title, and OG image set

## Motion
- [ ] Animations are smooth on 4x CPU throttle
- [ ] Hero content readable within 300ms
- [ ] Only `transform` and `opacity` animated
- [ ] Reduced motion respected

## Critique
- [ ] `skills/visual-critique` scores: every area 4+, average 4.3+
