---
name: frontend-master-browser-verification
description: Render the UI in a real browser, capture screenshots at key widths, and run automated accessibility and visual checks. Use before declaring any UI task done.
---

# Browser Verification

Code that compiles is not a working UI. Open it, look at it, test it.

## Step 1: Run it

```bash
npm run dev          # or pnpm dev / bun dev
npm run build        # must pass with zero errors and zero type errors
npm run lint
```

If the build fails, fix it before anything else.

## Step 2: Screenshot at four widths

If a browser tool is available (Playwright MCP, Chrome DevTools MCP, Claude in Chrome, or similar), use it to open the page and take full-page screenshots at 375, 768, 1280, and 1440. **Look at every screenshot.** Then run `skills/visual-critique`.

Otherwise, add this Playwright test to the project:

```ts
// tests/visual.spec.ts
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const widths = [375, 768, 1280, 1440];
const routes = ["/"]; // add every page you built

for (const route of routes) {
  for (const width of widths) {
    test(`${route} @ ${width}px`, async ({ page }) => {
      // Collect runtime errors before the page loads
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));

      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      await page.waitForLoadState("networkidle");

      // No horizontal overflow
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      );
      expect(overflow, "page scrolls horizontally").toBe(false);

      await page.screenshot({ path: `screenshots/${route.replace(/\//g, "_") || "home"}-${width}.png`, fullPage: true });
      expect(errors).toEqual([]);
    });
  }

  test(`${route} has no a11y violations`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
```

```bash
npm i -D @playwright/test @axe-core/playwright
npx playwright install chromium
npx playwright test tests/visual.spec.ts
```

## Step 3: Interaction checks

Do these in the browser, not in your head:

- [ ] Open and close every dropdown and the mega menu (mouse and keyboard)
- [ ] Open the mobile menu at 375px; tap every link; press Escape
- [ ] Tab through the page from top to bottom; focus is always visible
- [ ] Submit every form empty, then with bad data, then valid
- [ ] Toggle dark mode (if present) and re-screenshot
- [ ] Scroll the full page; animations trigger once and smoothly
- [ ] Emulate `prefers-reduced-motion: reduce`; big motion stops
- [ ] Check the console: zero errors, zero hydration warnings

## Step 4: Performance check

```bash
npm run build && npm run start
npx lighthouse http://localhost:3000 --view
```

Targets: Performance 90+, Accessibility 100, Best Practices 100, SEO 100.

## Step 5: Visual regression (optional, for ongoing projects)

```ts
await expect(page).toHaveScreenshot(`home-${width}.png`, { maxDiffPixelRatio: 0.01 });
```

Commit baselines. Re-run after every UI change.

## Reporting

State exactly what you ran and what you saw. Example:
"Build and lint pass. Screenshots at 375/768/1280/1440 reviewed: no overflow, menu works. axe: 0 violations. Lighthouse mobile: 94/100/100/100. Not verified: Safari."

If you could not run a browser, say so and list what the user should check.
