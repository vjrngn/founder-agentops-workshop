#!/usr/bin/env bash
#
# Build the site and publish it to the `gh-pages` branch, which GitHub Pages
# serves at https://vjrngn.github.io/founder-agentops-workshop/.
#
# This is a manual deploy (no GitHub Actions required). Run it with:
#
#   pnpm deploy
#
set -euo pipefail

cd "$(dirname "$0")/.."

echo "▸ Building production bundle…"
pnpm build

REMOTE="$(git remote get-url origin)"
TMP="$(mktemp -d)"

echo "▸ Staging dist/ on an orphan gh-pages branch…"
cp -R dist/. "$TMP/"
touch "$TMP/.nojekyll" # tell Pages not to run Jekyll over the build

pushd "$TMP" >/dev/null
git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "Deploy to GitHub Pages ($(date -u +%Y-%m-%dT%H:%MZ))"
echo "▸ Force-pushing gh-pages to $REMOTE…"
git push -q -f "$REMOTE" gh-pages
popd >/dev/null

rm -rf "$TMP"
echo "✓ Deployed. Live at https://vjrngn.github.io/founder-agentops-workshop/"
