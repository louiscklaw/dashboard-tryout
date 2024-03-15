#!/usr/bin/env bash

set -ex

sudo rm -rf ./node_modules
npm i -D
npm run build
npm run deploy_gh_pages
