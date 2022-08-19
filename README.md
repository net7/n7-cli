# n7-cli
A command line interface for n7-framework

## Install

`npm i git+ssh://git@github.com:net7/n7-cli.git#master -g`

List of available commands: `n7-cli --help`


## Command `new`

for help `n7-cli new --help`

to create a new n7 app:  

1) `n7-cli new` <br /> *(with full options)* `n7-cli new --name <app-name> --type <app-type> --prefix <app-prefix> --verbose --silent`

    - `--name (-n) <app-name>`, project name in kebab-case
    - `--type (-t) <app-type>` optional, allowed types are base | dataviz | arianna | muruca (default "base")
    - `--prefix (-p) <app-prefix>` optional, selectors prefix, including root selector (default "app")
    - `--verbose (-v)` optional (default false)
    - `--silent (-y)` optional, no interactive prompt (default false)

2) `cd <app-name>`

3) `npm i`

4) `ng serve`


## Command `layout`

for help `n7-cli layout --help`

to create a new layout:

1) `cd <project-root-folder>`

2) `n7-cli layout` <br /> *(with full options)* `n7-cli layout --name <layout-name> --path <layouts-directory> --verbose --silent`

    - `--name (-n) <layout-name>`, layout name in kebab-case
    - `--path (-t) <layouts-directory>` optional, layouts directory path (default "src/app/layouts")
    - `--verbose (-v)` optional (default false)
    - `--silent (-y)` optional, no interactive prompt (default false)

3) add new layout to `app.routes.ts` config

4) add new layout to `app.module.ts` config


## Command `translation-extract`

for help `n7-cli translation-extract --help`

to extract a translation file:

1) `cd <translations-folder>`

2) `n7-cli translation-extract` <br /> *(alias)* `n7-cli xi18n` <br /> *(with full options)* `n7-cli translation-extract --source <source-lang-code> --target <target-lang-code> --verbose --silent`

    - `--source (-s) <source-lang-code>`, default language code (e.g. it)
    - `--target (-t) <target-lang-code>`, target language code (e.g. es)
    - `--verbose (-v)` optional (default false)
    - `--silent (-y)` optional, no interactive prompt (default false)

3) you can open `<target-lang-code>.txt` file to edit translations


## Command `translation-load`

for help `n7-cli translation-load --help`

to load a translation file:

1) `cd <translations-folder>`

2) `n7-cli translation-load` <br /> *(alias)* `n7-cli li18n` <br /> *(with full options)* `n7-cli translation-load --lang <lang-code> --verbose --silent`

    - `--lang (-l) <lang-code>`, language code (e.g. it)
    - `--verbose (-v)` optional (default false)
    - `--silent (-y)` optional, no interactive prompt (default false)

3) you can check the updated `<lang-code>.ts` file for changes


## Command `translation-search`

for help `n7-cli translation-search --help`

to search for keys with no translation:

1) `cd <project-root>`

2) `n7-cli translation-search` <br /> *(alias)* `n7-cli si18n` <br /> *(with full options)* `n7-cli translation-search --folder <folder> --target <target-translation-file> --verbose --silent`

    - `--folder (-f) <folder>`, search folder (default src)
    - `--target (-t) <target-translation-file>`, translation file to check (default src/app/config/i18n/it.ts)
    - `--verbose (-v)` optional (default false)
    - `--silent (-y)` optional, no interactive prompt (default false)

3) you can check a diagnostic output on shell


## Command `sls`

for help `n7-cli sls --help`

to create a new muruca serverless project:  

1) `n7-cli sls` <br /> *(with full options)* `n7-cli sls --name <project-name> --verbose --silent`

    - `--name (-n) <project-name>`, name in lowercase
    - `--verbose (-v)` optional (default false)
    - `--silent (-y)` optional, no interactive prompt (default false)

2) `cd <project-name>`

3) `npm i`

4) `npm run sls-conf`

5) `npm start`