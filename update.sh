#!/bin/bash

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Check if there are any changes to commit
if [[ -z $(git status -s) ]]; then
    echo "No changes to commit!"
    exit 0
fi

# Add all changes
git add .

# Get the commit message from the user or use a default one
if [ "$1" ]; then
    # Use the provided message
    COMMIT_MSG="$1"
else
    # Use a timestamp-based message
    COMMIT_MSG="Update $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Commit and push
git commit -m "$COMMIT_MSG"
git push origin $BRANCH

echo "✨ Successfully pushed to $BRANCH" 