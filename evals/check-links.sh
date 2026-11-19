#!/usr/bin/env bash
# Checks every https link in the skill's markdown files. Run from the skill root.
set -u
fail=0
links=$(grep -rhoE 'https://[^ )`"<>|]+' --include=*.md . | sed 's/[.,]$//' | grep -v 'github.com/developerammar382/frontend-master-skill' | sort -u)

for url in $links; do
  code=$(curl -sL -o /dev/null -w '%{http_code}' --max-time 15 -A 'Mozilla/5.0 (link-check)' "$url")
  case "$code" in
    2*|3*) ;;
    # Some sites block bots (403/429) but are fine in a browser; report, don't fail
    401|403|429) echo "BLOCKED $code  $url" ;;
    *) echo "BROKEN  $code  $url"; fail=1 ;;
  esac
done

[ $fail -eq 0 ] && echo "All links reachable (blocked ones need a manual check)."
exit $fail
