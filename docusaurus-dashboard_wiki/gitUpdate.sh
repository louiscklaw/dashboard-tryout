#!/usr/bin/env bash

set -ex

git add .
git commit -m"update docusaurus-dashboard_wiki,"
git push

echo "done"
