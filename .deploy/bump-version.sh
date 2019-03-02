#!/bin/bash

# Description: bump version only if the previous master version was the same (not manually modified)
# Requirements: The local package.json must have an upper property "url" setted with the git url of the project
git config --global user.email "$EMAIL_ADDR" && git config --global user.name "SlaveGit" && git config --global push.default simple

echo "Fetch tags.."
git fetch

echo "Detach head.."
git checkout HEAD~1

PREVIOUS_PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo "PREVIOUS_PACKAGE_VERSION=${PREVIOUS_PACKAGE_VERSION}"

echo "Checking-out master branch.."
git checkout master

PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo "PACKAGE_VERSION=${PACKAGE_VERSION}"

BUMPED_PACKAGE_VERSION=$(cat ./package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g' \
    | awk -F '.' '{ print $1,$2,$3+1 }' \
    | sed 's/^ //' \
| sed 's/ /./g')
echo "BUMPED_PACKAGE_VERSION=${BUMPED_PACKAGE_VERSION}"

if [ "$PREVIOUS_PACKAGE_VERSION" == "$PACKAGE_VERSION" ]
then
    echo "Versions match, bumping the patch version from the old one: $BUMPED_PACKAGE_VERSION"
    npm version patch --force -m "CircleCi has bumped the patch version to $BUMPED_PACKAGE_VERSION [ci skip]" && git push
elif [ "$PREVIOUS_PACKAGE_VERSION" == "" ]
then
    echo "Previous version not found, applying estimated bumped version: $BUMPED_PACKAGE_VERSION"
    npm version patch --force -m "CircleCi has bumped the patch version to $BUMPED_PACKAGE_VERSION [ci skip]" && git push
else
    echo "Version wasn't bumped due to a modification of the major or minor version: $PACKAGE_VERSION"
    git commit --allow-empty -m "CircleCi has released a specific version $PACKAGE_VERSION [ci skip]" && git push --tags
fi
