# Frontend Master Skill

An open-source skill that stops AI from producing generic, messy frontends.

Ask an AI agent to "enhance this page" and you usually get one of two results: a padding tweak, or a redesign that wipes out the brand and breaks the forms. This skill gives the agent a senior designer's process, strict rules, and a way to check its own work before it says it's done.

## How it works

Most rulebooks make AI code cleaner and designs plainer. This skill is built to avoid that trade-off:

- **Design at full ambition, engineer it cleanly.** Rules decide how a design is built, never how much design there is.
- **Slice first.** Hero and navigation are built at final quality, motion included, before anything else. The rest of the page matches that bar.
- **Motion is planned, not bolted on.** Every build writes a motion inventory up front and ships ready-made primitives (`Reveal`, `Stagger`, `TextReveal`, `Parallax`).
- **An expression toolkit, not just bans.** Scale contrast, depth, texture, masks, pinned stories, each with a clean Tailwind implementation.
- **The no-rules duel.** Before finishing, the agent imagines the version it would build with no rules and builds those ideas the clean way.
- **Gates that require ambition.** A page with no motion or a template layout fails the checklist, even if the code is perfect.

## What it enforces

- **Distinctive design**: signature move, varied layouts, real navigation with mega menus, no template look
- **Motion**: load sequences, varied entrances, hover on everything, one showpiece, gentle reduced-motion fallbacks
- **Tailwind-first code**: tokens for every repeated value, `@utility` for effects, components a junior can change
- **Testing that matters**: interaction tests, route smoke tests with axe, critical flows; no snapshot noise
- **WCAG 2.2 AA** and green Core Web Vitals
- **Verification**: screenshots at 375 / 768 / 1280 / 1440 and honest reporting
- **Human copy**: no AI phrasing, with before/after rewrites
- **Curated sources**: 60+ inspiration sources, 11 icon sets, 50 component libraries

## Structure

| Folder | Purpose |
| --- | --- |
| `SKILL.md` | Entry point: non-negotiables, routing, definition of done |
| `skills/` | 13 focused skills (design, motion, architecture, testing, accessibility, copywriting, and more) |
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

Claude Code reads `.claude/skills/`, not the shared `.agents/skills/` folder, so select it in the list or add `-a claude-code`.

**Update or uninstall:**

```bash
npx skills update frontend-master        # get the latest version
npx skills remove frontend-master        # uninstall (add -g if installed globally)
```

Installed manually? Delete the `frontend-master` folder from your skills folder.

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

### Troubleshooting

**`SyntaxError: ... does not provide an export named 'styleText'`** or **`EBADENGINE Unsupported engine`**: your Node.js is older than 22.20, which `npx skills` needs. Check with `node -v`, then upgrade:

```bash
nvm install --lts && nvm alias default lts/*   # with nvm
brew upgrade node                              # with Homebrew
```

Or skip Node entirely and use the manual install above.

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
