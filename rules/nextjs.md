# Rules: Next.js (App Router)

## Structure
- App Router only for new projects. Route files (`page.tsx`, `layout.tsx`) stay thin: fetch data, compose components.
- Use route groups `(marketing)`, `(app)` to separate layouts.
- Shared UI in `src/components`, not inside `app/`.

## Server and client
- Server Components by default.
- `"use client"` only on the smallest interactive leaf. Never on a layout or whole page without reason.
- Never import server-only code (DB, secrets) into client components. Use the `server-only` package to enforce.
- Fetch data in Server Components or Server Actions, not in client `useEffect`.

## Assets
- Images: `next/image` with `width`/`height` or `fill` + `sizes`. `preload` on the LCP image (Next 16+; use `priority` on Next 15 and older).
- Fonts: `next/font` (local or Google). Expose as CSS variables and map in Tailwind.
- Metadata: export `metadata` or `generateMetadata` on every page. Include title, description, Open Graph image.

## Performance
- `next/dynamic` with `ssr: false` for 3D, heavy charts, and browser-only libraries.
- Use `loading.tsx` and `Suspense` for streaming with skeletons.
- Add `error.tsx` and `not-found.tsx` designed to match the site.
- Static by default; use `revalidate` for content that changes.

## Proxy (formerly middleware)
- Next 16 renamed `middleware.ts` to `proxy.ts` (export `proxy`). Use `proxy.ts` in new code. Keep it light: redirects, rewrites, auth checks.

## Navigation
- `next/link` for internal links. `usePathname()` for active nav states.
- Close mobile menus on route change.

## Don't
- Don't use `pages/` and `app/` together in new code.
- Don't use `<img>` or `<a>` for internal assets/links.
- Don't put secrets in `NEXT_PUBLIC_*` variables.
- Don't silence TypeScript errors (`typescript.ignoreBuildErrors`) or skip linting to make the build pass. Next 16 removed `next lint`; run ESLint or Biome directly.
