#!/bin/bash

# Find all directories containing package.json from root and install dependencies
find . -name "package.json" -not -path "*/node_modules/*" | while read -r file; do
    dir=$(dirname "$file")
    echo "Installing dependencies in $dir"
    (cd "$dir" && npm install)
done

echo "All dependencies are installed 🥳"
