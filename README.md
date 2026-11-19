# Frontend Master Skill

An open-source skill that stops AI from producing generic, messy frontends.

Ask an AI agent to "enhance this page" and you usually get one of two results: a padding tweak, or a redesign that wipes out the brand and breaks the forms. This skill gives the agent a senior designer's process, strict rules, and a way to check its own work before it says it's done.

## What it enforces

- **Components first**, with code a junior developer can read and change
- **Distinctive design**: no default blue, no Inter-on-white, no text-only hero, no link-row navbar
- **Real navigation**: dropdowns and mega menus on desktop, a designed mobile menu
- **Design tokens** for color, type, spacing, and radius, checked with a grep audit
- **Mobile first** at 375 / 768 / 1280 / 1440
- **Smooth motion** with GSAP, Motion, Lenis, and Three.js, plus reduced-motion support
- **WCAG 2.2 AA** accessibility
- **Verification**: screenshots, Playwright, axe, and Lighthouse before reporting done
- **Human copy**: bans AI phrasing ("seamless", "unlock", "elevate") and gives before/after rewrites
- **Curated sources**: 60+ inspiration sources, 11 icon sets matched to brand personality, component registries, fonts, and color tools

## Structure

| Folder | Purpose |
| --- | --- |
| `SKILL.md` | Entry point: non-negotiables, routing, definition of done |
| `skills/` | 12 focused skills (design, architecture, motion, accessibility, copywriting, and more) |
| `references/` | Curated sources: inspiration, icons and assets, component libraries |
| `workflows/` | Step-by-step processes for 6 common jobs |
| `rules/` | Strict rules for React, Next.js, TypeScript, Tailwind, accessibility |
| `checklists/` | Pass/fail gates before shipping |
| `evals/` | Test prompts, scoring rubric, benchmark method, audit script |
| `examples/` | Reference code: design brief, tokens, mega menu header |

## Install

### Any agent (recommended)

One command works for Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, OpenCode, Cline, Antigravity, Kiro, and 70+ other agents. It detects the agents you have and asks where to install. Needs Node.js 22.20+.

```bash
# Install into the current project
npx skills add developerammar382/frontend-master-skill

# Install globally (every project)
npx skills add developerammar382/frontend-master-skill -g

# Install for one agent only, no prompts
npx skills add developerammar382/frontend-master-skill -a cursor -y
```

Agent names for `-a`: `claude-code`, `codex`, `cursor`, `github-copilot`, `gemini-cli`, `windsurf`, `opencode`, `cline`, `antigravity`, `kiro-cli`. Update later with `npx skills update`.

### Manual install

Clone the repo into your agent's skills folder and name the folder `frontend-master`:

```bash
git clone https://github.com/developerammar382/frontend-master-skill <skills-folder>/frontend-master
```

| Agent | Project folder | Global folder |
| --- | --- | --- |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex | `.agents/skills/` | `~/.agents/skills/` |
| Cursor | `.agents/skills/` | `~/.cursor/skills/` |
| GitHub Copilot | `.agents/skills/` | `~/.copilot/skills/` |
| Gemini CLI | `.agents/skills/` | `~/.gemini/skills/` |
| OpenCode | `.agents/skills/` | `~/.config/opencode/skills/` |
| Cline | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity | `.agents/skills/` | `~/.gemini/config/skills/` |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |
| Kiro CLI | `.kiro/skills/` | `~/.kiro/skills/` |

Example for Claude Code, global:

```bash
git clone https://github.com/developerammar382/frontend-master-skill ~/.claude/skills/frontend-master
```

### Agents without skill support

Clone the repo anywhere in your project, then add one line to your rules file (`AGENTS.md`, `.cursorrules`, or similar):

```
For any UI or frontend task, read frontend-master/SKILL.md first and follow it.
```

Install the whole repo, not a single file from `skills/`. The sub-skills link to the workflows, rules, and references around them.

## Use

Just ask normally:
- "Build a landing page for my AI note-taking app"
- "Enhance this page"
- "Build an admin dashboard for my store"
- "Turn this screenshot into code"
- "Audit our frontend"

The agent picks the matching workflow from `SKILL.md`.

## Measure it

Run the cases in `evals/test-cases/` with and without the skill, then score both blind using `evals/scoring-rubric.md`. See `evals/benchmark.md`.

Benchmark results haven't been published yet. If you run the suite, open a PR with your scores.

## License

MIT
