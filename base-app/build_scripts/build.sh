#!/bin/bash

BUILD_CMD="export NG_CLI_ANALYTICS=\"false\" && npm install --force && npm run build"

docker run -t -u 0 --rm --name ngcompile -v "$PWD"/..:/ng -w /ng node:20 sh -c "$BUILD_CMD"