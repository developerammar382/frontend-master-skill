# Design Brief: Tracebit

**Product:** Finds slow database queries in production and suggests fixes. Audience: backend engineers and CTOs at 20-500 person startups.

**Feel:** precise, calm, quietly powerful.

**References:**
- Linear: restraint, sharp type, dark surfaces
- Vercel: product UI as hero, monochrome confidence
- Raycast: tactile details, keyboard-first feel

**Direction:** Graphite workspace with a single acid-lime signal color. Feels like a well-tuned instrument.

| Token | Value | Use |
| --- | --- | --- |
| bg | `#0E0F11` | page background |
| surface | `#16181C` | cards, menus |
| line | `#26292F` | borders |
| ink | `#E8E6E1` | primary text (15.4:1 on bg) |
| muted | `#8D9099` | secondary text (6.0:1 on bg) |
| accent | `#C6F432` | CTAs, highlights, chart signal |
| accent-ink | `#0E0F11` | text on accent |

**Type:** Geist (display, 600, tight tracking) + Geist (body, 400) + JetBrains Mono (queries, metrics). Scale: 13 / 14 / 16 / 18 / 20 / 24 / 32 / 48 / 72.

**Radius:** 6 / 10 / 16. **Spacing:** 4px grid. **Shadows:** none on dark; borders + surface steps.

**Motion:** quick and exact. 150ms UI, 600ms reveals, expo-out. No bounce.

**Signature:** Hero shows a live query timeline. A slow query bar turns lime, expands into a suggested index, and the bar shrinks from 2.4s to 38ms.

**Nav:** Product (mega menu: Query Insights, Index Advisor, Alerts, Integrations + featured changelog card), Docs, Pricing, Customers. CTA: "Start free".
