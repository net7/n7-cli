
const fs = require('fs-extra');
const ts = require('typescript');
const helpers = require('./helpers');

class CommandTranslationsExtract {
  constructor(sourceCode, targetCode, options) {
    const { verbose } = options;
    this.sourceCode = sourceCode;
    this.targetCode = targetCode;
    this.verbose = !!verbose;
    this.cwd = process.cwd();

    this.sourceFile = `./${this.sourceCode}.ts`;
    this.sourceJsFile = `./${this.sourceCode}-tmp.js`;
    this.targetFile = `./${this.targetCode}.ts`;
    this.targetJsFile = `./${this.targetCode}-tmp.js`;
    this.outputFile = `./${this.targetCode}.txt`;

    helpers.log('extracting translations...');
    this.sourceFileExists()
      .then(exists => {
        if(!exists){
          helpers.error(`${this.sourceFile} file does not exists in ${this.cwd}`);
        }
        return this.targetFileExists();
      })
      .then(exists => {
        if(!exists){
          helpers.error(`${this.targetFile} file does not exists in ${this.cwd}`);
        }
        return this.loadFile('source');
      })
      .then((sourceContents) => {
        const transpiledModule = this._transpile(sourceContents);
        return this.createJsFile('source', transpiledModule);
      })
      .then(() => {
        const { default: config } = this.getLangConfig('source');
        this.sourceConfig = config;
        if (!this.sourceConfig) {
          helpers.error(`${this.sourceFile} wrong translation file format`);
        }
        return this.loadFile('target');
      })
      .then((targetContents) => {
        const transpiledModule = ts.transpile(targetContents);
        return this.createJsFile('target', transpiledModule);
      })
      .then(() => {
        const { default: config } = this.getLangConfig('target');
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

  sourceFileExists() {
    const msg = 'default language file exists control';
    // info...
    this.printInfo(msg);
    
    return fs.pathExists(this.sourceFile).catch((err) => {
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

    try {
      return require(`${this.cwd}/${this[`${context}JsFile`]}`);
    } catch(err) {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    }
  }

  createOutputFile() {
    const msg = `creating ${this.outputFile} output file`;
    // info...
    this.printInfo(msg);

    const fileContent = [];
    Object.keys(this.sourceConfig).forEach(key => {
      fileContent.push(`[${this.sourceCode}][${key}]=${this.sourceConfig[key]}`);
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
    remove$.push(fs.remove(this.sourceJsFile));
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