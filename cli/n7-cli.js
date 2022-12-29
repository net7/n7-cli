#!/usr/bin/env node

const program = require("commander");
const inquirer = require('inquirer');
const helpers = require('./utils/helpers');
const config = require('./utils/config');
const CommandNew = require("./commands/new");
const CommandLayout = require("./commands/layout");
const CommandComponent = require("./commands/component");
const CommandDatasource = require("./commands/datasource");
const CommandEventhandler = require("./commands/eventhandler");
const CommandTranslationsExtract = require("./commands/translations-extract");
const CommandTranslationsLoad = require("./commands/translations-load");
const CommandTranslationsSearch = require("./commands/translations-search");
const CommandSls = require("./commands/sls");
const { version } = require("../package.json");
const updateCheck = require("./update-check");

// DESCRIPTION
// ---------------------------------------------------------->
program
  .version(version)
  .description("A command line interface for n7-framework");

// NEW
// ---------------------------------------------------------->
program
  .command("new")
  .description("creates a new n7-cli app")
  .option("-n, --name <name>", "project name")
  .option("-t, --type <type>", "project type <base|dataviz|arianna|muruca>", "base")
  .option("-p, --prefix <prefix>", "project prefix", "app")
  .option("-v, --verbose", "output extra info")
  .option("-y, --silent", "disable interactive input prompts")
  .action(
    (options) => {
      let prompt$;

      if (!!options.silent) {
        prompt$ = Promise.resolve({});
      } else {
        prompt$ = inquirer.prompt([{
          type: 'input',
          name: 'name',
          message: 'What name would you like to use for the new workspace and project?',
          default: typeof options.name === 'string' ? options.name : null
        }, {
          type: 'list',
          name: 'type',
          message: `Which type of project would you like to create?`,
          choices: ["base", "dataviz", "arianna", "muruca"],
          default: options.type
        }, {
          type: 'input',
          name: 'prefix',
          message: 'What prefix would you like to use for project components and layouts?',
          default: options.prefix
        }]);
      }

      prompt$.then((answers) => {
        Object.keys(answers).forEach((key) => {
          if (answers[key]) {
            options[key] = answers[key];
          }
        });

        new CommandNew(options.name, options.type, options.prefix, !!options.verbose);
      })
      .catch((error) => {
        if (error.isTtyError) {
          new CommandNew(options.name, options.type, options.prefix, !!options.verbose);
        } else {
          console.error(error);
          helpers.error('Command "new" prompt error');
        }
      });
    }
  );

// LAYOUT / COMPONENT / DATASOURCE / EVENTHANDLER
// ---------------------------------------------------------->
[
  { item: 'layout', path: 'src/app/layouts', klass: CommandLayout },
  { item: 'component', path: 'src/app/components', klass: CommandComponent },
  { item: 'datasource', path: 'src/app/data-sources', klass: CommandDatasource },
  { item: 'eventhandler', path: 'src/app/event-handlers', klass: CommandEventhandler },
]
.map(({ item, path, klass }) => (
  { 
    item, 
    klass, 
    path: config.get(`${item}.path`, path), // config check
  }
))
.forEach(({ item, path, klass }) => {
  program
    .command(item)
    .description(`adds a new ${item}`)
    .option("-n, --name <name>", `${item} name`)
    .option("-p, --path <path>", `${item} parent folder`, path)
    .option("-v, --verbose", "output extra info")
    .option("-y, --silent", "disable interactive input prompts")
    .action((options) => {
      let prompt$;
  
      if (!!options.silent) {
        prompt$ = Promise.resolve({});
      } else {
        prompt$ = inquirer.prompt([{
          type: 'input',
          name: 'name',
          message: `What name would you like to use for the new ${item}?`,
          default: typeof options.name === 'string' ? options.name : null
        }, {
          type: 'input',
          name: 'path',
          message: `What directory path would you like this ${item} to be created?`,
          default: options.path
        }]);
      }
  
      prompt$.then((answers) => {
        Object.keys(answers).forEach((key) => {
          if (answers[key]) {
            options[key] = answers[key];
          }
        });
  
        new klass(options.name, options);
      })
      .catch((error) => {
        if (error.isTtyError) {
          new klass(options.name, options);
        } else {
          console.error(error);
          helpers.error(`Command "${item}" prompt error`);
        }
      });
    });
});

// TRANSLATION EXTRACT
// ---------------------------------------------------------->
program
  .command("translation-extract")
  .alias("xi18n")
  .description("extract lang translations from source files")
  .option("-s, --source <source-code>", "source language code")
  .option("-t, --target <target-code>", "target language code")
  .option("-v, --verbose", "output extra info")
  .option("-y, --silent", "disable interactive input prompts")
  .action(
    (options) => {
      let prompt$;

      if (!!options.silent) {
        prompt$ = Promise.resolve({});
      } else {
        prompt$ = inquirer.prompt([{
          type: 'input',
          name: 'source',
          message: 'Enter the source language code',
          default: typeof options.source === 'string' ? options.source : null
        }, {
          type: 'input',
          name: 'target',
          message: 'Enter the target language code',
          default: typeof options.target === 'string' ? options.target : null
        }]);
      }

      prompt$.then((answers) => {
        Object.keys(answers).forEach((key) => {
          if (answers[key]) {
            options[key] = answers[key];
          }
        });

        new CommandTranslationsExtract(options.source, options.target, options)
      })
      .catch((error) => {
        if (error.isTtyError) {
          new CommandTranslationsExtract(options.source, options.target, options)
        } else {
          console.error(error);
          helpers.error('Command "translation-extract" prompt error');
        }
      });
    }
  );

// TRANSLATION LOAD
// ---------------------------------------------------------->
program
  .command("translation-load")
  .alias("li18n")
  .description("load lang translations from source files")
  .option("-l, --lang <language-code>", "language code")
  .option("-v, --verbose", "output extra info")
  .option("-y, --silent", "disable interactive input prompts")
  .action(
    (options) => {
      let prompt$;

      if (!!options.silent) {
        prompt$ = Promise.resolve({});
      } else {
        prompt$ = inquirer.prompt([{
          type: 'input',
          name: 'lang',
          message: 'Enter the language code',
          default: typeof options.lang === 'string' ? options.lang : null
        }]);
      }

      prompt$.then((answers) => {
        Object.keys(answers).forEach((key) => {
          if (answers[key]) {
            options[key] = answers[key];
          }
        });

        new CommandTranslationsLoad(options.lang, options)
      })
      .catch((error) => {
        if (error.isTtyError) {
          new CommandTranslationsLoad(options.lang, options)
        } else {
          console.error(error);
          helpers.error('Command "translation-load" prompt error');
        }
      });
    }
  );

// TRANSLATIONS SEARCH
// ---------------------------------------------------------->
program
  .command("translations-search")
  .alias("si18n")
  .description("search for translations in project files")
  .option("-f, --folder <folder-path>", "folder path to search in", "src")
  .option("-t, --target <target-file>", "target translation file", "src/app/config/i18n/it.ts")
  .option("-v, --verbose", "output extra info")
  .option("-y, --silent", "disable interactive input prompts")
  .action(
    (options) => {
      let prompt$;

      if (!!options.silent) {
        prompt$ = Promise.resolve({});
      } else {
        prompt$ = inquirer.prompt([{
          type: 'input',
          name: 'folder',
          message: 'What directory path would you like to search for translation labels?',
          default: options.folder
        }, {
          type: 'input',
          name: 'target',
          message: 'Enter the relative path of the translation file to be checked',
          default: options.target
        }]);
      }

      prompt$.then((answers) => {
        Object.keys(answers).forEach((key) => {
          if (answers[key]) {
            options[key] = answers[key];
          }
        });

        new CommandTranslationsSearch(options.folder, options.target, options);
      })
      .catch((error) => {
        if (error.isTtyError) {
          new CommandTranslationsSearch(options.folder, options.target, options);
        } else {
          console.error(error);
          helpers.error('Command "translations-search" prompt error');
        }
      });
    }
  );

// SLS
// ---------------------------------------------------------->
program
  .command("sls")
  .description("creates a new muruca serverless project")
  .option("-n, --name <name>", "project name")
  .option("-v, --verbose", "output extra info")
  .option("-y, --silent", "disable interactive input prompts")
  .action(
    (options) => {
      let prompt$;

      if (!!options.silent) {
        prompt$ = Promise.resolve({});
      } else {
        prompt$ = inquirer.prompt([{
          type: 'input',
          name: 'name',
          message: 'What name would you like to use for the new serverless workspace and project?',
          default: typeof options.name === 'string' ? options.name : null
        }]);
      }

      prompt$.then((answers) => {
        Object.keys(answers).forEach((key) => {
          if (answers[key]) {
            options[key] = answers[key];
          }
        });

        new CommandSls(options.name, !!options.verbose);
      })
      .catch((error) => {
        if (error.isTtyError) {
          new CommandSls(options.name, !!options.verbose);
        } else {
          console.error(error);
          helpers.error('Command "sls" prompt error');
        }
      });
    }
  );


// check version
updateCheck.run().then(() => {
  // load commander
  program.parse(process.argv);
})
