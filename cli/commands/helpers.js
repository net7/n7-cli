const chalk = require('chalk');

module.exports = {
  error(msg) {
    console.log(`${chalk.red('ERROR:')} ${msg}`);
    process.exit(1);
  },
  log(msg) {
    console.log(`${chalk.gray('[>]')} ${chalk.white(msg)}`);
  },
  info(msg) {
    console.log(`${chalk.cyan('[i]')} ${chalk.white(msg)}`);
  },
  warn(msg) {
    console.log(`${chalk.yellow('WARN:')} ${chalk.white(msg)}`);
  }
}