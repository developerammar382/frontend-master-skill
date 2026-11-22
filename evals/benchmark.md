# Benchmark

How to measure whether this skill makes AI output better, and track it over time.

## Method

1. **Pick the model and harness** (e.g. Claude Code with a fixed model version). Record both.
2. **Run each test case twice**: once with the skill installed (treatment), once without (baseline). Same prompt, same starting files, fresh session each time.
3. **Score blind.** A reviewer (human or a separate model session) scores screenshots and code using `scoring-rubric.md` without knowing which run is which.
4. **Run each case 3 times** per condition and take the median, since outputs vary.
5. **Record results** in the table below and commit.

## Automated checks per run

Run inside each output project:

```bash
npm run build                                     # gate: must pass
npx tsc --noEmit                                  # types
npx playwright test tests/visual.spec.ts          # overflow, console errors, axe, screenshots
npx lighthouse http://localhost:3000 --output=json --output-path=./lh.json --quiet
bash <skill-path>/evals/consistency-audit.sh      # token violations count
```

These produce objective numbers for criteria 4, 5, 6, and 9. The rest is reviewer judgment backed by screenshots.

## Results

**Status: not yet measured.** The table below is empty until the suite has been run. Don't quote improvement numbers for this skill until it's filled in.

| Date | Model | Case | Baseline | With skill | Delta | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| | | 01-saas-landing | | | | |
| | | 02-redesign-generic-page | | | | |
| | | 03-analytics-dashboard | | | | |
| | | 04-screenshot-to-code | | | | |
| | | 05-enhance-vague-prompt | | | | |
| | | 06-mobile-navigation | | | | |
| | | 07-audit | | | | |
| | | 08-luxury-brand-site | | | | |
| | | 09-portfolio-design-vs-engineering | | | | |

## Targets

- With-skill median: **80+ (A)** on every case
- Delta vs baseline: **+20 points** or more on average
- Zero hard-gate failures with the skill
- **Parity:** with-skill scores equal or higher than baseline on every criterion in every case. Record per-criterion scores, not just totals, so a design regression can't hide behind better code.

## When a case regresses

Find which criterion dropped, trace it to the skill file that should have prevented it, tighten that instruction, and re-run only that case before running the full suite.
