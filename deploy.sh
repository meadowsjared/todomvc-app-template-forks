#!/usr/bin/env sh

# abort on errors
set -e

pnpm run build

cd dist

git init
git checkout gh-pages
git add -A
git commit -m 'new deployment'
git push -f ssh://git@github.com/Day-CHU/todomvc-app-template.git gh-pages:gh-pages

cd -
