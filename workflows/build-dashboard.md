# Workflow: Build Dashboard or Admin Panel

Use for dashboards, admin panels, analytics, CRMs, and internal tools.

A dashboard is a tool people use for hours. Clarity beats decoration, but it must still look crafted.

## 1. Understand the user's job

- Who uses it, and what are the 3 questions they open it to answer?
- What are the main entities (users, orders, projects) and actions (create, filter, approve, export)?
- Put the answers to those 3 questions at the top of the overview page.

## 2. Shell first

Build the app shell before any page:

**Sidebar (always)**
- Logo/workspace switcher at top, grouped nav sections with labels, user menu at bottom.
- One icon set with labels (Lucide by default; Radix Icons or Heroicons micro for very dense UIs). Active item clearly highlighted (tinted background + accent indicator).
- Collapsible to icon-only on desktop (with tooltips), state remembered.
- Below `lg`: off-canvas sheet opened from a top bar hamburger. Same design, same groups.
- Keyboard accessible, `aria-current="page"` on the active item.
- shadcn `Sidebar` is a good base; restyle it to the tokens.

**Top bar**
- Page title or breadcrumbs, global search (⌘K with `cmdk`), notifications, user avatar.

**Content area**
- `max-w-screen-2xl`, consistent page padding, page header with title + primary action.

## 3. Overview page

- KPI row: 3-5 stat cards with value, label, change vs previous period (with arrow icon and color + text, not color alone), optional sparkline.
- One primary chart (trend over time), then supporting charts or tables.
- Recent activity or "needs attention" list.
- Don't repeat the same metric in a card, a chart, and a table. Each element earns its place.

## 4. Data pages

- Tables: TanStack Table with sorting, filtering, pagination, column visibility, row selection, bulk actions.
- Sticky header, readable row height (44-52px), numbers right-aligned in tabular figures (`tabular-nums`).
- Filters in the URL so views are shareable.
- On mobile: horizontal scroll with a sticky first column, or switch to cards.

## 5. States (required for every data view)

- **Loading**: skeletons shaped like the content
- **Empty**: illustration or icon, one sentence, and the primary action (copy rules in `skills/copywriting`)
- **Error**: what went wrong and a retry button
- **No results** (after filter): suggest clearing filters

## 6. Forms and detail views

- Labels above inputs, helper text, inline validation (React Hook Form + Zod).
- Group long forms into sections or steps. Sticky save bar on long forms.
- Destructive actions need confirmation dialogs that name the thing being deleted.
- Toasts (Sonner) for success; inline messages for errors.

## 7. Style for long sessions

- Calm neutral surfaces, one accent, muted status colors.
- Dense but not cramped: 14-15px for table text is acceptable, 16px for forms and body.
- Charts use the brand palette, consistent across the app, with accessible color pairs.
- Dark mode is expected for dashboards. Build both via tokens.
- Subtle motion only: hover, layout transitions, number transitions. No scroll theatrics.

## 8. Verify

- `skills/browser-verification` at all widths, including sidebar collapse and mobile sheet.
- Keyboard-only: navigate sidebar, open search, sort a table, submit a form.
- `checklists/accessibility.md` and `checklists/responsive-quality.md`.
- Test with realistic data volumes: 0 rows, 1 row, 1,000 rows, very long names.
