#!/usr/bin/env bash

set -ex

git config --global user.email "louiscklaw@users.noreply.github.com"
git config --global user.name "louiscklaw"


pushd docusaurus-dashboard_wiki
  yarn build
popd

yarn gh-pages -d docusaurus-dashboard_wiki/build
