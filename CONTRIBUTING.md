# Contributing

Thanks for helping make AI frontends less generic.

## What we want

- Sharper rules that fix a real, repeated AI failure
- New eval test cases that expose weak spots
- Examples that pass every checklist
- Corrections when a library, API, or best practice changes

## What we don't want

- Long explanations where one rule would do
- Personal style preferences presented as rules
- Library promotion without a clear reason it beats the current pick

## Writing style

The skill must read like it was written by an experienced engineer, not generated.

- Short, direct sentences. Imperative voice: "Use", "Never", "Check".
- Concrete over abstract: "16px minimum" beats "readable text".
- Every rule must be checkable. If you can't verify it, rewrite it.
- No em dashes, no emojis, no filler words ("seamless", "robust", "leverage", "elevate").
- Tables for comparisons, checklists for gates, code for anything technical.

## Adding or changing a rule

1. Describe the failure: what AI does wrong, with a prompt that reproduces it.
2. Add or update the rule in the most specific file (skill, rule, or checklist).
3. Add an eval case or pass criterion that catches the failure.
4. Run the affected eval cases before and after. Include scores in your PR.

## Adding a source or link

- Add it to the right file in `references/`, in the right table.
- Say in one line what it's best for. "Great site" isn't a reason.
- Note the license if it's an asset (icons, fonts, images).
- Run `bash evals/check-links.sh` before opening the PR.

## Adding an example

- Lives in `examples/<name>/`.
- Must pass `checklists/visual-quality.md`, `responsive-quality.md`, and `accessibility.md`.
- Must follow `skills/frontend-architecture` (small components, plain props, short comments).
- Add a line to `examples/README.md`.

## Pull requests

- One topic per PR.
- Title says what changed: "Add mega menu keyboard rules to accessibility checklist".
- Include before/after eval scores for anything that changes agent behavior.
- Run `bash evals/lint-skill.sh` before opening the PR. CI runs it too.
- Add a line to `CHANGELOG.md` under Unreleased.

## Releases

Maintainers cut releases from `main`. Versions follow semver, as defined at the top of `CHANGELOG.md`.

1. Move the Unreleased entries under a new version heading with today's date, and update the compare links.
2. Commit, then tag: `git tag -a v1.2.0 -m "v1.2.0"` and `git push --follow-tags`.
3. Create a GitHub release from the tag and paste that version's changelog section as the notes.
