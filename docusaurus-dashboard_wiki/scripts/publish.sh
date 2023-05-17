#!/usr/bin/env bash

set -ex

yarn clear

yarn build

yarn deploy_gh_pages
