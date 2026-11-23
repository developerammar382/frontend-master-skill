#!/usr/bin/env bash
# Checks the skill itself: frontmatter, internal file references, and writing style.
# Run from the skill root. CI runs it on every push and pull request.
set -u
fail=0

# 1. Every SKILL.md needs a name and a description
for f in SKILL.md skills/*/SKILL.md; do
  head -5 "$f" | grep -q '^name: ' || { echo "MISSING name:         $f"; fail=1; }
  head -5 "$f" | grep -q '^description: ' || { echo "MISSING description:  $f"; fail=1; }
done

# 2. Every internal path mentioned in markdown must exist.
# Paths that follow / or ~ are install locations, not repo files, so they are skipped.
refs=$(grep -rhoE '(^|[^/~A-Za-z0-9_.-])(skills|workflows|rules|checklists|references|examples|evals)/[A-Za-z0-9_./-]+' --include='*.md' . \
  | sed -E 's/^[^a-z]//; s/[.,:]+$//' | sort -u)
for ref in $refs; do
  [ -e "$ref" ] || { echo "BROKEN REF:           $ref"; fail=1; }
done

# 3. Writing style: no em dashes
if grep -rln $'\xe2\x80\x94' --include='*.md' --include='*.ts' --include='*.tsx' --include='*.css' . >/dev/null; then
  grep -rln $'\xe2\x80\x94' --include='*.md' --include='*.ts' --include='*.tsx' --include='*.css' . | sed 's/^/EM DASH:              /'
  fail=1
fi

[ $fail -eq 0 ] && echo "Skill lint passed."
exit $fail
