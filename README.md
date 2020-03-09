# n7-cli
A command line interface for n7-framework

## Install

`npm i git+ssh://git@github.com:net7/n7-cli.git#develop -g`

for help: `n7-cli --help`

## Command `new`

for help `n7-cli new --help`

to create a new n7 app:  

1) `n7-cli new <app-name> --type <app-type> --prefix <app-prefix> --verbose`

    - `<app-name>` mandatory, app name in kebab-case
    - `--type (-t) <app-type>` optional, allowed types are arianna | dataviz | empty (default "empty")
    - `--prefix (-p) <app-prefix>` optional, selectors prefix, including root selector (default "app")
    - `--verbose (-v)` optional (default false)

2) `cd <app-name>`

3) `npm i`

4) `ng serve`