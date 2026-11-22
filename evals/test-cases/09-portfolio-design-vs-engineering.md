# 09: Portfolio (design vs engineering balance)

**Workflow:** build-landing-page

This case reproduces the failure the skill is most likely to cause: rules improve the code but flatten the design. Run it with and without the skill and compare every criterion.

## Prompt
> Build a personal portfolio for Mara Okafor, a product designer who has shipped work for fintech and health startups. Include a hero, selected work (4 projects), about, services, testimonials, and contact. Next.js + Tailwind.

## Pass criteria: design
- [ ] Brief lists a signature move and a full motion inventory before any code
- [ ] Hero uses scale contrast and a load sequence (TextReveal or equivalent), done in 1.2s
- [ ] Work section uses mixed sizes or a case-study layout, with hover previews, not equal cards
- [ ] At least 4 expression toolkit techniques and 3 different entrance styles
- [ ] A showpiece scroll moment exists (pinned story, parallax depth, horizontal scroll, or similar)
- [ ] The no-rules duel is reported with at least 2 ideas built

## Pass criteria: engineering
- [ ] Motion primitives live in `components/motion/` and share timing from one file
- [ ] Effects are `@utility` blocks or tokens; zero inline styles except motion values
- [ ] Token audit: 0 unjustified hits
- [ ] No component over ~150 lines; project data lives in `lib/`, not in JSX
- [ ] Tests: contact form interaction test, mobile menu test, route smoke + axe at 375 and 1440
- [ ] Build, lint, types, and tests pass

## The parity rule
Score both runs with `evals/scoring-rubric.md`. The skill passes this case only if the with-skill run scores **equal or higher on every criterion**, including Distinctiveness, First impression, and Motion. Winning on engineering while losing on design is a fail.

## Fail signals
Static hero with no entrance, every section fading up the same way, a grid of identical project cards, no hover states, "Passionate designer crafting seamless experiences".
