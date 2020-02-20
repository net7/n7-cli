#!/usr/bin/env node

const program = require('commander');
const CommandNew = require('./commands/new');
const CommandLayout = require('./commands/layout');

// DESCRIPTION
// ---------------------------------------------------------->
program
  .version('0.0.1')
  .description('A command line interface for n7-framework');

// NEW
// ---------------------------------------------------------->
program
  .command('new <name>')
  .alias('n')
  .description('creates a new n7-cli app')
  .option('-t, --type <type>', 'app type < arianna | muruca | dataviz | empty >', 'empty')
  .option('-p, --prefix <prefix>', 'app prefix', 'app')
  .option('-e, --embedded', 'is an embedded app')
  .action((name, { type, prefix, embedded }) => new CommandNew(name, type, prefix, !!embedded));

// LAYOUT
// ---------------------------------------------------------->
program
  .command('layout <name>')
  .alias('l')
  .description('adds a new layout')
  .option('-D, --no-datasource', 'without layout datasource')
  .option('-E, --no-eventhandler', 'without layout eventhandler')
  .action((name, { datasource, eventhandler }) => new CommandLayout(name, datasource, eventhandler));

program.parse(process.argv);