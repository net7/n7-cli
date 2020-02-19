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
  .alias('c')
  .description('Creates a new n7-cli app')
  .action(name => new CommandNew(name));

// LAYOUT
// ---------------------------------------------------------->
program
  .command('layout <name>')
  .alias('l')
  .description('Adds a new layout')
  .option('-D, --no-datasource', 'Without layout datasource')
  .option('-E, --no-eventhandler', 'Without layout eventhandler')
  .action((name, { datasource, eventhandler }) => new CommandLayout(name, datasource, eventhandler));

program.parse(process.argv);