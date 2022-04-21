#!/usr/bin/env node

const program = require("commander");
const CommandNew = require("./commands/new");
const CommandLayout = require("./commands/layout");
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
  .command("new <name>")
  .alias("n")
  .description("creates a new n7-cli app")
  .option("-v, --verbose", "output extra info")
  .option(
    "-t, --type <type>",
    "app type < base | dataviz | arianna | muruca >",
    "base"
  )
  .option("-p, --prefix <prefix>", "app prefix", "app")
  .action(
    (name, { verbose, type, prefix }) =>
      new CommandNew(name, type, prefix, !!verbose)
  );

// LAYOUT
// ---------------------------------------------------------->
program
  .command("layout <name>")
  .alias("l")
  .description("adds a new layout")
  .option("-v, --verbose", "output extra info")
  .option("-p, --path <path>", "layouts directory path", "src/app/layouts")
  .action((name, options) => new CommandLayout(name, options));

// TRANSLATION EXTRACT
// ---------------------------------------------------------->
program
  .command("translation-extract <defaultCode> <targetCode>")
  .alias("xi18n")
  .description("extract lang translations from source files")
  .option("-v, --verbose", "output extra info")
  .action(
    (defaultCode, targetCode, options) =>
      new CommandTranslationsExtract(defaultCode, targetCode, options)
  );

// TRANSLATION LOAD
// ---------------------------------------------------------->
program
  .command("translation-load <langCode>")
  .alias("li18n")
  .description("load lang translations from source files")
  .option("-v, --verbose", "output extra info")
  .action(
    (langCode, options) => new CommandTranslationsLoad(langCode, options)
  );

// TRANSLATIONS SEARCH
// ---------------------------------------------------------->
program
  .command("translations-search <folder> <targetFile>")
  .alias("si18n")
  .description("search for translations in project files")
  .option("-v, --verbose", "output extra info")
  .action(
    (folder, targetFile, options) =>
      new CommandTranslationsSearch(folder, targetFile, options)
  );

// SLS
// ---------------------------------------------------------->
program
  .command("sls <name>")
  .description("creates a new muruca serverless project")
  .option("-v, --verbose", "output extra info")
  .action((name, { verbose }) => new CommandSls(name, !!verbose));


// check version
updateCheck.run().then(() => {
  // load commander
  program.parse(process.argv);
  // if no arguments show help
  if (!program.args.length) {
    program.help();
  }
})
