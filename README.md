# n7-cli
A command line interface for n7-framework

## Install

`npm i git+ssh://git@github.com:net7/n7-cli.git#develop -g`

for help: `n7-cli --help`


## Command `new`

for help `n7-cli new (n) --help`

to create a new n7 app:  

1) `n7-cli new (n) <app-name> --type <app-type> --prefix <app-prefix> --verbose`

    - `<app-name>` mandatory, app name in kebab-case
    - `--type (-t) <app-type>` optional, allowed types are arianna | dataviz | empty (default "empty")
    - `--prefix (-p) <app-prefix>` optional, selectors prefix, including root selector (default "app")
    - `--verbose (-v)` optional (default false)

2) `cd <app-name>`

3) `npm i`

4) `ng serve`


## Command `layout`

for help `n7-cli layout (l) --help`

to create a new layout:

1) `cd <project-root-folder>`

2) `n7-cli layout (l) <layout-name> --path <layouts-directory> --verbose`

    - `<layout-name>` mandatory, layout name in kebab-case
    - `--path (-t) <layouts-directory>` optional, layouts directory path (default "src/app/layouts")
    - `--verbose (-v)` optional (default false)

3) add new layout to `app.routes.ts` config

4) add new layout to `app.module.ts` config


## Command `translation-extract`

for help `n7-cli translation-extract (xi18n) --help`

to extract a translation file:

1) `cd <translations-folder>`

2) `n7-cli translation-extract (xi18n) <default-lang-code> <target-lang-code> --verbose`

    - `<default-lang-code>` mandatory, default language code (e.g. it)
    - `<target-lang-code>` mandatory, target language code (e.g. es)
    - `--verbose (-v)` optional (default false)

3) you can open `<target-lang-code>.txt` file to edit translations


## Command `translation-load`

for help `n7-cli translation-load (li18n) --help`

to load a translation file:

1) `cd <translations-folder>`

2) `n7-cli translation-load (li18n) <lang-code> --verbose`

    - `<lang-code>` mandatory, language code (e.g. it)
    - `--verbose (-v)` optional (default false)

3) you can check the updated `<lang-code>.ts` file for changes


## Command `translation-search`

for help `n7-cli translation-search (si18n) --help`

to search for keys with no translation:

1) `cd <project-root>`

2) `n7-cli translation-search (si18n) <folder> <translation-file> --verbose`

    - `<folder>` mandatory, search folder (e.g. src)
    - `<translation-file>` mandatory, translation file to check (e.g. src/app/config/translations/en.ts)
    - `--verbose (-v)` optional (default false)

3) you can check a diagnostic output on shell


## Command `sls`

for help `n7-cli sls (n) --help`

to create a new muruca serverless project:  

1) `n7-cli sls (n) <project-name> --verbose`

    - `<project-name>` mandatory, name in lowercase
    - `--verbose (-v)` optional (default false)

2) `cd <project-name>`

3) `npm i`

4) `npm run sls-conf`

5) `npm start`