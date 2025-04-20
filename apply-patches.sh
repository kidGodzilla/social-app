#!/bin/bash
set -e  # Exit on error

echo "Fetching latest upstream..."
git fetch upstream
git checkout main
git reset --hard upstream/main

echo "Applying patches..."
for patch in patches/*.patch; do
  echo "Applying $patch"
  git apply "$patch"
done

echo "All patches applied."