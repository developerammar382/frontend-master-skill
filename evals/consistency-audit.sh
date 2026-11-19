#!/usr/bin/env bash
# Counts design-token violations. Run from a project root.
set -u
DIRS=$(ls -d src app components 2>/dev/null)
[ -z "$DIRS" ] && { echo "No src/app/components folder found"; exit 1; }

count() { grep -rnE "$1" $DIRS --include=*.tsx --include=*.jsx 2>/dev/null | wc -l | tr -d ' '; }

arb=$(count '\b(p|m|px|py|pt|pb|mt|mb|ml|mr|gap|w|h|rounded)-\[[0-9]+px\]')
hex=$(count '#[0-9a-fA-F]{6}\b')
def=$(count '\b(bg|text|border|ring)-(blue|indigo|green|purple)-[0-9]{3}\b')
inl=$(count 'style=\{\{')
# perl instead of grep -P so it works on macOS too
emo=$(find $DIRS -name '*.tsx' -o -name '*.jsx' | xargs perl -CSD -ne 'print if /[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]/' 2>/dev/null | wc -l | tr -d ' ')

echo "Arbitrary px values:     $arb"
echo "Raw hex in components:   $hex"
echo "Default palette as brand: $def"
echo "Inline styles:           $inl"
echo "Emoji characters:        $emo"
echo "Total:                   $((arb + hex + def + inl + emo))"
