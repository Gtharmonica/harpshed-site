#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
# add-student.sh
#
# Onboard a new student to HarpShed in one command:
#   1. Hashes their password (SHA-256, same algorithm the gate uses)
#   2. Adds them to STUDENT_HASHES in index.html
#   3. Adds an empty profile to SITE_CONTENT.students in content.js
#
# Usage:
#   ./scripts/add-student.sh "Colin" "their-chosen-password"
#
# After running, commit + push:
#   git add index.html content.js
#   git commit -m "Add student: Colin"
#   git push
# ─────────────────────────────────────────────────────────────────────

set -e

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 \"Student Name\" \"password\""
  echo "Example: $0 \"Colin\" \"colinpass123\""
  exit 1
fi

NAME="$1"
PASS="$2"
SLUG=$(echo "$NAME" | tr '[:upper:]' '[:lower:]' | tr -cd '[:alnum:]')

# Resolve project root regardless of where the script is called from
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INDEX="$ROOT/index.html"
CONTENT="$ROOT/content.js"

if [ ! -f "$INDEX" ] || [ ! -f "$CONTENT" ]; then
  echo "Could not find index.html or content.js at $ROOT"
  exit 1
fi

# Compute SHA-256 of the password (matches the in-page JS implementation)
HASH=$(printf '%s' "$PASS" | shasum -a 256 | awk '{print $1}')

echo "──────────────────────────────────────────────────"
echo "  Name : $NAME"
echo "  Slug : $SLUG"
echo "  Hash : $HASH"
echo "──────────────────────────────────────────────────"

# 1. Add to STUDENT_HASHES in index.html if not already there
if grep -q "name: '$NAME'" "$INDEX"; then
  echo "↺  $NAME already exists in STUDENT_HASHES — skipping that step."
else
  python3 - <<PYEOF
import re
with open("$INDEX") as f:
    src = f.read()

# Find the STUDENT_HASHES list and insert a new entry before the closing ];
pattern = re.compile(r"(var\s+STUDENT_HASHES\s*=\s*\[)([\s\S]*?)(\s*\];)")
m = pattern.search(src)
if not m:
    print("✖  Could not find STUDENT_HASHES in index.html")
    raise SystemExit(1)

new_entry = "    { name: '$NAME', hash: '$HASH' }"
inner = m.group(2).rstrip()
# add comma after the previous entry if needed
if inner and not inner.rstrip().endswith(','):
    inner = inner + ','
new_block = m.group(1) + inner + "\n" + new_entry + "\n  " + m.group(3).lstrip()
src = src[:m.start()] + new_block + src[m.end():]

with open("$INDEX", "w") as f:
    f.write(src)
print("✓  Added $NAME to STUDENT_HASHES in index.html")
PYEOF
fi

# 2. Add to SITE_CONTENT.students in content.js if not already there
python3 - <<PYEOF
import re, json
with open("$CONTENT") as f:
    src = f.read()

m = re.match(r'^var\s+SITE_CONTENT\s*=\s*', src)
data = json.loads(src[m.end():].rstrip().rstrip(';').rstrip())
if 'students' not in data:
    data['students'] = []

# Skip if slug already exists
for s in data['students']:
    if s.get('slug','').lower() == "$SLUG":
        print("↺  $NAME already exists in SITE_CONTENT.students — skipping.")
        raise SystemExit(0)

data['students'].append({
    "name": "$NAME",
    "slug": "$SLUG",
    "welcome": "Welcome, $NAME. Your lessons will appear here as we work through them.",
    "lessons": []
})

new = json.dumps(data, indent=2, ensure_ascii=False)
with open("$CONTENT", "w") as f:
    f.write("var SITE_CONTENT = " + new + ";\n")
print("✓  Added $NAME profile to SITE_CONTENT.students in content.js")
PYEOF

echo "──────────────────────────────────────────────────"
echo "  Done. $NAME can now log in with their password."
echo ""
echo "  Next steps:"
echo "    1. Verify the changes:   git diff index.html content.js"
echo "    2. Commit + push:        git add . && git commit -m \"Add student: $NAME\" && git push"
echo "    3. Send $NAME their password (over a secure channel, not email)."
echo "──────────────────────────────────────────────────"
