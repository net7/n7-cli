
const fs = require('fs-extra');
const ts = require('typescript');
const helpers = require('./helpers');

class CommandTranslationsExtract {
  constructor(defaultCode, targetCode, options) {
    const { verbose } = options;
    this.defaultCode = defaultCode;
    this.targetCode = targetCode;
    this.verbose = !!verbose;
    this.cwd = process.cwd();

    this.defaultFile = `./${this.defaultCode}.ts`;
    this.defaultJsFile = `./${this.defaultCode}-tmp.js`;
    this.targetFile = `./${this.targetCode}.ts`;
    this.targetJsFile = `./${this.targetCode}-tmp.js`;
    this.outputFile = `./${this.targetCode}.txt`;

    helpers.log('extracting translations...');
    this.defaultFileExists()
      .then(exists => {
        if(!exists){
          helpers.error(`${this.defaultFile} file does not exists in ${this.cwd}`);
        }
        return this.targetFileExists();
      })
      .then(exists => {
        if(!exists){
          helpers.error(`${this.targetFile} file does not exists in ${this.cwd}`);
        }
        return this.loadFile('default');
      })
      .then((defaultContents) => {
        const transpiledModule = this._transpile(defaultContents);
        return this.createJsFile('default', transpiledModule);
      })
      .then(() => {
        return this.getLangConfig('default');
      })
      .then((module) => {
        const { default: config } = (module || {}).default || {};
        this.defaultConfig = config;
        if (!this.defaultConfig) {
          helpers.error(`${this.defaultFile} wrong translation file format`);
        }
        return this.loadFile('target');
      })
      .then((targetContents) => {
        const transpiledModule = ts.transpile(targetContents);
        return this.createJsFile('target', transpiledModule);
      })
      .then(() => {
        return this.getLangConfig('target');
      })
      .then((module) => {
        const { default: config } = (module || {}).default || {};
        this.targetConfig = config;
        if (!this.targetConfig) {
          helpers.error(`${this.targetFile} wrong translation file format`);
        }
        return this.createOutputFile();
      })
      .then(() => {
        return this.cleanUp();
      })
      .then(() => {
        helpers.log(`new output translation file ${this.outputFile} created!`);
      })
      .catch(reason => {
        helpers.error(reason);
      });
  }

  defaultFileExists() {
    const msg = 'default language file exists control';
    // info...
    this.printInfo(msg);
    
    return fs.pathExists(this.defaultFile).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  targetFileExists() {
    const msg = 'target language file exists control';
    // info...
    this.printInfo(msg);
    
    return fs.pathExists(this.targetFile).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  loadFile(context) {
    const msg = `getting contents from ${context} file`;
    // info...
    this.printInfo(msg);
    
    return fs.readFile(this[`${context}File`], 'utf-8').catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  createJsFile(context, transpiledModule) {
    const msg = `writting ${context} js file (tmp)`;
    // info...
    this.printInfo(msg);

    return fs.writeFile(this[`${context}JsFile`], transpiledModule).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  getLangConfig(context) {
    const msg = `getting ${context} lang config as js module`;
    // info...
    this.printInfo(msg);

    return import(`${this.cwd}/${this[`${context}JsFile`]}`).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  createOutputFile() {
    const msg = `creating ${this.outputFile} output file`;
    // info...
    this.printInfo(msg);

    const fileContent = [];
    Object.keys(this.defaultConfig).forEach(key => {
      fileContent.push(`[${this.defaultCode}][${key}]=${this.defaultConfig[key]}`);
      fileContent.push(`[${this.targetCode}][${key}]=${this.targetConfig[key] || ''}`);
    });

    return fs.writeFile(this.outputFile, fileContent.join('\n')).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  cleanUp() {
    const msg = `clean up tmp files`;
    // info...
    this.printInfo(msg);

    const remove$ = [];
    remove$.push(fs.remove(this.defaultJsFile));
    remove$.push(fs.remove(this.targetJsFile));

    return Promise.all(remove$).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  printInfo(msg){
    if(this.verbose){
      helpers.info(msg);
    }
  }

  _transpile(contents) {
    const result = ts.transpileModule(contents, { 
      compilerOptions: { 
        module: ts.ModuleKind.CommonJS 
      }
    });
    return result.outputText;
  };
}

module.exports = CommandTranslationsExtract;