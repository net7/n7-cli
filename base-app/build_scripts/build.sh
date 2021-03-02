#!/bin/bash

BUILD_CMD="npm install --force && npm run build -- --prod"

docker run -it -u 0 --rm --name ngcompile -v "$PWD"/..:/ng -w /ng node:14.15.5-stretch sh -c "$BUILD_CMD"