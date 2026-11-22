# Checklist: Visual Quality

Every box must be checked by looking at real screenshots. "Probably fine" is not checked.

## Ambition (fail any box and the page isn't done)
- [ ] The signature move from the brief is visible on first load at 1440 and still works at 375
- [ ] At least 4 techniques from the expression toolkit (`skills/design-intelligence`) are used
- [ ] At least 3 different section layouts; no two neighbouring sections share one
- [ ] Display type is at least 4x the body size on desktop
- [ ] Every section meets the ambition floor table in `skills/design-intelligence`
- [ ] The no-rules duel in `skills/visual-critique` was run and its ideas were built

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
- [ ] One icon set, one stroke width, consistent sizes
- [ ] All buttons in a row share height; all buttons use the shared `Button` component
- [ ] Shadows from max 3 levels

## Detail
- [ ] Every interactive element has hover, active, and focus-visible states
- [ ] Loading, empty, and error states designed for data views
- [ ] No emojis used as icons
- [ ] No headings or list items starting with dashes, dots, or decorative symbols
- [ ] Real copy; no lorem ipsum, no "Welcome to our website"
- [ ] Copy passes the `skills/copywriting` checklist (no AI fingerprint words, verb-plus-object buttons)
- [ ] Icon set chosen to match the type (`references/icons-and-assets.md`)
- [ ] Images are sharp, correctly cropped, and consistent in style
- [ ] Favicon, page title, and OG image set

## Motion (required, not optional)
- [ ] The motion inventory from the brief is fully built (load sequence, section entrances, hover set, showpiece)
- [ ] At least 3 different entrance styles across the page
- [ ] Every interactive element has a hover and a press response
- [ ] Animations are smooth on 4x CPU throttle
- [ ] The hero starts moving within 200ms and settles within 1.2s
- [ ] Loops and scroll-linked motion use only `transform` and `opacity`
- [ ] Reduced motion gives gentler motion (short fades), not a broken or blank page

## Critique
- [ ] `skills/visual-critique` scores: every area 4+, average 4.3+
