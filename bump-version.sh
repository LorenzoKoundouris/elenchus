#!/bin/bash

# Description: bump version only if the previous master version was the same (not manually modified)
# Requirements: The local package.json must have an upper property "url" setted with the git url of the project
git config --global user.email "$EMAIL_ADDR" && git config --global user.name "LorenzoKoundouris" && git config --global push.default simple

git fetch
git checkout HEAD~1

PREVIOUS_PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo "PREVIOUS_PACKAGE_VERSION=${PREVIOUS_PACKAGE_VERSION}"

git checkout master

PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo "PACKAGE_VERSION=${PACKAGE_VERSION}"

if [ "$PREVIOUS_PACKAGE_VERSION" == "$PACKAGE_VERSION" ]
then
    npm version patch -m "CircleCi has bumped the patch version to $BUMPED_PACKAGE_VERSION [ci skip]" && git push
    echo "Version bumped from the old one"
elif [ "$PREVIOUS_PACKAGE_VERSION" == "" ]
then
    npm version patch -m "CircleCi has bumped the patch version to $BUMPED_PACKAGE_VERSION [ci skip]" && git push
    echo "Version bumped wasn't able to find the previous one"
else
    git commit --allow-empty -m "CircleCi has released a specific version $PACKAGE_VERSION [ci skip]" && git push
    echo "Version wasn't bumped due to a modification of the major or minor version"
fi