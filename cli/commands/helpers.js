const chalk = require('chalk');

const kebabCaseRegexPattern = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

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
  },
  isKebabCase(str) {
    return kebabCaseRegexPattern.test(str);
  },
  snakeCaseToPascalCase(str) {
    return str.split('-').map(word => {
      return word.slice(0,1).toUpperCase() + word.slice(1, word.length);
    }).join('');
  }
}