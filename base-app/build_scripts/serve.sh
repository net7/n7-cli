#!/bin/bash

BUILD_CMD="export NG_CLI_ANALYTICS=\"false\" && npm install && npm start"

docker run -it -u 0 --net host --rm --name ngcompile -v "$PWD"/..:/ng -w /ng node:14.15.5-stretch sh -c "$BUILD_CMD"