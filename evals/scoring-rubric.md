# Scoring Rubric

Score every eval output on 10 criteria, 0-10 each. Total out of 100.

A score needs evidence: a screenshot, a file path, a command output, or a grep result. No evidence, no points.

| # | Criterion | 10 | 5 | 0 |
| --- | --- | --- | --- | --- |
| 1 | **Distinctiveness** | Could not be mistaken for a template; has a clear signature move | Polished but familiar | Generic default look |
| 2 | **First impression** | Hero and nav would stand next to an Awwwards site; mega menu/dropdowns where needed | Decent hero, plain nav | Text-only hero, link-row nav |
| 3 | **Typography and color** | Distinct font pairing, tuned palette, all contrast passes | Safe choices, minor issues | Defaults (Inter + blue-500) or contrast fails |
| 4 | **Consistency** | Token audit grep: 0 unjustified hits; one radius system, one icon set | A few stray values | No system |
| 5 | **Responsive** | Flawless at 375/768/1280/1440; designed mobile menu | Works but mobile feels squeezed | Overflow or broken layout |
| 6 | **Accessibility** | axe 0 violations, full keyboard support, reduced motion | Minor violations | Major barriers (no focus, unlabeled controls) |
| 7 | **Motion** | Smooth, purposeful, signature moment, reduced-motion fallback | Some motion, a bit generic or janky | None, or janky/blocking |
| 8 | **Code simplicity** | Components under 150 lines, flat props, junior-readable, short comments | Some large files or awkward abstractions | One giant file or over-engineered |
| 9 | **Correctness** | Build, lint, and types pass; zero console errors; all features work | Minor warnings | Build fails or features broken |
| 10 | **Verification honesty** | Screenshots taken, checklists run, unverified items stated | Partial verification | Claimed done without checking |

## Grades

| Total | Grade | Meaning |
| --- | --- | --- |
| 90-100 | S | Would make the user say "wow" |
| 80-89 | A | Production quality, clearly above typical AI output |
| 65-79 | B | Good, but noticeable generic or rough areas |
| 50-64 | C | Functional, looks AI-made |
| under 50 | F | Skill not followed |

## Automatic penalties

Apply after scoring:
- **-15**: brand colors or logo of an existing product were replaced in a redesign without being asked
- **-15**: existing functionality broken in a redesign
- **-10**: emojis used as icons
- **-10**: claimed verification that wasn't done
- **-5** each: AI fingerprint copy from `skills/copywriting` ("seamless", "unlock", "elevate"), lorem ipsum, default `blue-500`/`indigo-600` as brand, body text under 16px on mobile, horizontal scroll at any width

## Hard gates

The output fails regardless of score if:
- The build fails
- The page has horizontal scroll at 375px
- Any interactive element is unreachable by keyboard
