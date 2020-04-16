#!/bin/bash

BUILD_CMD="npm install -g ng npm &&  npm install && ng build --prod"


docker run -it -u 0 --rm --name ngcompile -v "$PWD"/..:/ng -w /ng trion/ng-cli bash -c "$BUILD_CMD"
