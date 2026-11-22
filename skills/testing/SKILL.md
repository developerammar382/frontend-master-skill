---
name: frontend-master-testing
description: Add meaningful tests to frontend work - unit tests for logic, interaction tests for components, and end-to-end smoke, accessibility, and layout checks per route. Use in the harden step of every build and whenever behavior changes.
---

# Testing

Test what can break and what users depend on. Skip what only proves the framework works.

## The test plan (write it before the harden step)

```
Logic:        <pure functions: pricing math, filters, formatters, validation schemas>
Interactions: <components with behavior: mobile menu, form, tabs, filter bar, theme toggle>
Routes:       <every page: renders, no overflow, no console errors, axe clean>
Flows:        <1-3 critical journeys: contact form submit, signup, checkout>
```

## Tools

| Layer | Tool | Runs |
| --- | --- | --- |
| Logic and components | Vitest + Testing Library (`@testing-library/react`, `user-event`) | Every save, in CI |
| Routes and flows | Playwright + `@axe-core/playwright` | Before shipping, in CI |
| Visual | Screenshots from `skills/browser-verification` | Every UI change |

```bash
npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
npm i -D @playwright/test @axe-core/playwright && npx playwright install chromium
```

Add scripts: `"test": "vitest run"`, `"test:e2e": "playwright test"`.

Test setup (`vitest.setup.ts`, referenced from `vitest.config.ts`):

```ts
import "@testing-library/jest-dom/vitest";
import { MotionGlobalConfig } from "motion/react";

// Animations finish instantly in tests, so content is never stuck at opacity 0
MotionGlobalConfig.skipAnimations = true;

// jsdom has no IntersectionObserver; scroll reveals need a stand-in
class IO { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
globalThis.IntersectionObserver = IO as unknown as typeof IntersectionObserver;
```

## What a good test looks like

Test behavior the way a user sees it. Find elements by role and label, not by class or test id.

```tsx
// components/layout/MobileMenu.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "./MobileMenu";

test("opens, shows nav links, and closes on Escape", async () => {
  const user = userEvent.setup();
  render(<MobileMenu />);

  await user.click(screen.getByRole("button", { name: "Open menu" }));
  expect(screen.getByRole("link", { name: "Pricing" })).toBeVisible();

  await user.keyboard("{Escape}");
  expect(screen.queryByRole("link", { name: "Pricing" })).not.toBeInTheDocument();
});
```

```ts
// tests/contact.spec.ts
import { test, expect } from "@playwright/test";

test("contact form shows errors, then submits", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Enter your email")).toBeVisible();

  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByLabel("Message").fill("Hello");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Thanks, we'll reply within a day")).toBeVisible();
});
```

Route smoke tests (overflow, console errors, axe at four widths) are already written in `skills/browser-verification`. Reuse them.

## Minimum for done

- [ ] Every pure function with branching logic has unit tests
- [ ] Every component with state or keyboard behavior has an interaction test
- [ ] Every route passes the smoke test at 375 and 1440, with zero axe violations
- [ ] Each critical flow has one end-to-end test
- [ ] `npm test` and `npm run test:e2e` pass

## Don't

- Don't snapshot markup. Snapshots break on every style change and catch nothing.
- Don't test that a component renders its props, or that Tailwind classes exist.
- Don't test animation timing. Test that content ends up visible.
- Don't mock what you can render. Mock only the network.
- Don't fight motion in tests. The setup above skips animations; scroll-triggered content that never enters view in jsdom should be asserted with `toBeInTheDocument()`, not `toBeVisible()`.
