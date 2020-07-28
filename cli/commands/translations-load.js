
const fs = require('fs-extra');
const helpers = require('./helpers');

class CommandTranslationsLoad {
  constructor(langCode, options) {
    const { verbose } = options;
    this.langCode = langCode;
    this.verbose = !!verbose;
    this.cwd = process.cwd();

    this.sourceFile = `./${this.langCode}.txt`;
    this.targetFile = `./${this.langCode}.ts`;

    helpers.log('loading translations...');
    this.sourceFileExists()
      .then(exists => {
        if(!exists){
          helpers.error(`${this.sourceFile} file does not exists in ${this.cwd}`);
        }
        return this.loadSourceFile();
      })
      .then((contents) => {
        const translations = this.getTranslations(contents);
        return this.createOutputFile(translations);
      })
      .then(() => {
        helpers.log(`new translation file ${this.targetFile} created!`);
      })
      .catch(reason => {
        helpers.error(reason);
      });
  }

  sourceFileExists() {
    const msg = 'source language file exists control';
    // info...
    this.printInfo(msg);
    
    return fs.pathExists(this.sourceFile).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  loadSourceFile() {
    const msg = `getting contents from source file`;
    // info...
    this.printInfo(msg);
    
    return fs.readFile(this.sourceFile, 'utf-8').catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  getTranslations(contents) {
    const msg = `getting translations from source file contents`;
    // info...
    this.printInfo(msg);
    
    return contents.split('\n')
      .filter(line => line.indexOf(`[${this.langCode}]`) === 0)
      .map(line => {
        const parts = line.split(/=(.+)/);
        const label = (parts[1] || '')
          .replace('\'', '\\\'');
        const key = parts[0]
          .replace(`[${this.langCode}]`, '')
          .replace(/\[|\]/g, '')
          .replace('=', '');

        if (/\W/g.test(key)) {
          return `  '${key}': '${label}',`;
        }
        return `  ${key}: '${label}',`;
      })
  }

  createOutputFile(translations) {
    const msg = `creating translation ${this.targetFile} file`;
    // info...
    this.printInfo(msg);

    const fileContent = [
      'export default {',
      ...translations,
      '}\n',
    ];

    return fs.writeFile(this.targetFile, fileContent.join('\n')).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  printInfo(msg){
    if(this.verbose){
      helpers.info(msg);
    }
  }
}

module.exports = CommandTranslationsLoad;