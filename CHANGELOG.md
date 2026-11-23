# Changelog

All notable changes to this skill. Versions follow [Semantic Versioning](https://semver.org):

- **Major**: changes that alter how the agent works by default (new spine, removed workflow)
- **Minor**: new skills, workflows, rules, examples, or eval cases
- **Patch**: fixes, link updates, wording, outdated APIs

## [Unreleased]

### Added
- `CHANGELOG.md`, issue templates, pull request template
- `evals/lint-skill.sh`: checks frontmatter, internal file references, and em dashes
- CI: skill lint on every push and pull request, weekly link check

## [1.1.0] - 2026-11-22

Design ambition and engineering quality, without a trade-off.

### Added
- Slice-first spine (Brief, Slice, Extend, Harden, Verify): hero and navigation ship at final quality, motion included, before the rest of the page
- Motion inventory required in every brief
- Motion primitives in `examples/motion/`: `Reveal`, `Stagger`, `TextReveal`, `Parallax`, shared timing tokens
- Expression toolkit and per-section ambition floor in `skills/design-intelligence`
- No-rules duel in `skills/visual-critique`
- `skills/testing`: test plan, interaction tests, route smoke tests with axe, critical flows
- Eval case 09 (portfolio) and a parity rule: the skill must match or beat no-skill output on every criterion
- Effect utilities and animation tokens in `examples/tokens.css`

### Changed
- Tailwind policy: arbitrary values are banned only when they duplicate a token; effects go in `@utility` blocks
- Ambition and Motion sections in `checklists/visual-quality.md` are now required
- `SKILL.md` rewritten around "design at full ambition, engineer it cleanly" (shorter than before)

### Fixed
- README install troubleshooting for Node.js versions older than 22.20
- README update and uninstall instructions for every agent

## [1.0.0] - 2026-11-19

Initial public release.

[Unreleased]: https://github.com/developerammar382/frontend-master-skill/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/developerammar382/frontend-master-skill/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/developerammar382/frontend-master-skill/releases/tag/v1.0.0
