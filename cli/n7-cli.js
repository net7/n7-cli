#!/usr/bin/env node

const program = require('commander');
const CommandNew = require('./commands/new');
const CommandLayout = require('./commands/layout');
const CommandTranslationsExtract = require('./commands/translations-extract');

// DESCRIPTION
// ---------------------------------------------------------->
program
  .version('2.2.0')
  .description('A command line interface for n7-framework');

// NEW
// ---------------------------------------------------------->
program
  .command('new <name>')
  .alias('n')
  .description('creates a new n7-cli app')
  .option('-v, --verbose', 'output extra info')
  .option('-t, --type <type>', 'app type < arianna | muruca | dataviz | empty >', 'empty')
  .option('-p, --prefix <prefix>', 'app prefix', 'app')
  .action((name, { verbose, type, prefix }) => new CommandNew(name, type, prefix, !!verbose));

// LAYOUT
// ---------------------------------------------------------->
program
  .command('layout <name>')
  .alias('l')
  .description('adds a new layout')
  .option('-v, --verbose', 'output extra info')
  .option('-p, --path <path>', 'layouts directory path', 'src/app/layouts')
  .action((name, options) => new CommandLayout(name, options));

// TRANSLATIONS EXTRACT
// ---------------------------------------------------------->
program
  .command('translation-extract <defaultCode> <targetCode>')
  .alias('xi18n')
  .description('extract translations from source files')
  .option('-v, --verbose', 'output extra info')
  .action((defaultCode, targetCode, options) => new CommandTranslationsExtract(defaultCode, targetCode, options));

program.parse(process.argv);

// if no arguments show help 
if (!program.args.length) {
  program.help();
}