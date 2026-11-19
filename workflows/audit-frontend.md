# Workflow: Audit Frontend

Use for "review this UI", "what's wrong with this", "audit our frontend", or as step 1 of a redesign.

## 1. Collect

- Screenshots at 375, 768, 1280, 1440 (`skills/browser-verification`).
- Lighthouse report (mobile, production build).
- axe report.
- Read the component folder and token/config files.

## 2. Audit in seven passes

**Visual** (`skills/visual-critique`): score each area 1-5. List generic tells.

**Consistency** (`skills/design-systems`): run the grep audit. Count distinct font sizes, spacing values, radii, shadows, and colors used. More than ~10 font sizes or ~6 radii means no system.

**Responsive** (`checklists/responsive-quality.md`): overflow, tap targets, text size, mobile nav quality.

**Accessibility** (`checklists/accessibility.md`): automated results plus a keyboard pass.

**Code** (`skills/frontend-architecture`): component size, duplication, prop complexity, client/server split, `any` types, dead code.

**Performance** (`skills/performance`): Core Web Vitals, bundle size, image and font loading.

**Copy** (`skills/copywriting`): AI fingerprint words, vague headlines, generic buttons ("Submit", "Learn more"), missing empty and error copy.

## 3. Report

Use this format. Rank by impact; lead with what users notice most.

```
## Frontend Audit: <project>

Overall: <one-sentence verdict>
Scores: Visual x/5 · Consistency x/5 · Responsive x/5 · Accessibility x/5 · Code x/5 · Performance x/5 · Copy x/5

### Critical (fix first)
1. <issue> - where - why it matters - fix

### High
...

### Medium / Low
...

### Quick wins (under 30 min each)
...
```

Every issue needs a location (file, component, or screenshot + width) and a concrete fix. No vague advice like "improve spacing".

## 4. Offer next step

Offer to fix the critical and high issues, or to run `workflows/redesign-existing-ui.md`.
