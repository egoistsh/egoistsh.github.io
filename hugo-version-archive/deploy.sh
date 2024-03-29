#!/bin/zsh
# If a command fails then the deploy stops
set -e
printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"
# Build the project.
hugo -d docs # if using a theme, replace with `hugo -t <YOURTHEME>`
# Add changes to git.
#git add docs
git add .
# Commit changes.
msg="chore: rebuilding site $(date +'%Y/%m/%d %H:%M:%S')"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"
# Push source and build repos.
git push origin main
