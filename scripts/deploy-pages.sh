#!/usr/bin/env bash
#
# Build the site and publish it to the `gh-pages` branch, which GitHub Pages
# serves at https://vjrngn.github.io/founder-agentops-workshop/.
#
# This is a manual deploy (no GitHub Actions required). Run it with:
#
#   pnpm deploy:pages
#
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[deploy] Building production bundle..."
pnpm build

REMOTE="$(git remote get-url origin)"
# Use this repo's configured identity (not the global one) for the deploy commit.
NAME="$(git config user.name)"
EMAIL="$(git config user.email)"
TMP="$(mktemp -d)"

echo "[deploy] Staging dist/ on an orphan gh-pages branch..."
cp -R dist/. "${TMP}/"
touch "${TMP}/.nojekyll" # tell Pages not to run Jekyll over the build

pushd "${TMP}" >/dev/null
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.name="${NAME}" -c user.email="${EMAIL}" \
  commit -q -m "Deploy to GitHub Pages ($(date -u +%Y-%m-%dT%H:%MZ))"
echo "[deploy] Force-pushing gh-pages to ${REMOTE} ..."
git push -q -f "${REMOTE}" gh-pages
popd >/dev/null

rm -rf "${TMP}"
echo "[deploy] Done. Live at https://vjrngn.github.io/founder-agentops-workshop/"
