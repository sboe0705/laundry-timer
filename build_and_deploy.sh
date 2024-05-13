#!/bin/bash
source_dir=./dist
target_dir=../sboe0705.github.io/laundry-timer

# build
npm run build || exit 1

# deploy
rm -rf $target_dir/*
cp -r $source_dir/* $target_dir
