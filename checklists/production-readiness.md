# Checklist: Production Readiness

## Build
- [ ] `npm run build` passes with zero errors and zero warnings worth fixing
- [ ] `npm run lint` passes
- [ ] `tsc --noEmit` passes; no `any`, no `@ts-ignore`
- [ ] No `console.log` left in code
- [ ] No unused components, imports, or dependencies

## Runtime
- [ ] Zero console errors and zero hydration warnings
- [ ] `error.tsx` and `not-found.tsx` designed and working
- [ ] Every async view has loading, empty, and error states
- [ ] Forms validate on client and server; double-submit prevented

## Performance
- [ ] Lighthouse mobile Performance 90+ on production build
- [ ] LCP under 2.5s, CLS under 0.1, INP under 200ms
- [ ] LCP image is preloaded (`preload` on Next 16+, `priority` on older); below-the-fold images lazy
- [ ] Fonts self-hosted, only used weights loaded
- [ ] Heavy libraries (3D, charts, maps) lazy-loaded

## SEO and sharing
- [ ] Unique `title` and `description` per page
- [ ] Open Graph and Twitter images (1200x630)
- [ ] Favicon and apple-touch-icon
- [ ] `robots.txt` and `sitemap.xml`
- [ ] Semantic heading structure

## Accessibility
- [ ] `checklists/accessibility.md` fully passes

## Security
- [ ] No secrets in client code or `NEXT_PUBLIC_*`
- [ ] No `dangerouslySetInnerHTML` with user input
- [ ] External links with `target="_blank"` have `rel="noopener noreferrer"`

## Code quality
- [ ] Components follow `skills/frontend-architecture` (size, naming, one per file)
- [ ] Design token audit grep returns no unjustified hits
- [ ] A junior developer could find and change the hero headline, a nav item, and the accent color in under 2 minutes each

## Cross-browser
- [ ] Chrome, Safari, Firefox (latest)
- [ ] iOS Safari and Android Chrome
