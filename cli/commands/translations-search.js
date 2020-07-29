
const fs = require('fs-extra');
const ts = require('typescript');
const glob = require('glob');
const helpers = require('./helpers');

class CommandTranslationsSearch {
  constructor(folder, targetFile, options) {
    const { verbose } = options;
    this.folder = `./${folder}`;
    this.targetFile = `./${targetFile}`;
    this.targetJsFile = this.targetFile.replace('.ts', '-tmp.js');
    this.outputFile = './translations-report.txt';
    this.verbose = !!verbose;
    this.cwd = process.cwd();

    helpers.log('searching translations...');
    this.targetFileExists()
      .then(exists => {
        if(!exists){
          helpers.error(`${this.targetFile} file does not exists`);
        }
        return this.loadFile();
      })
      .then(fileContents => {
        const transpiledModule = this._transpile(fileContents);
        return this.createJsFile(transpiledModule);
      })
      .then(() => {
        return this.getLangConfig();
      })
      .then(module => {
        const { default: config } = (module || {}).default || {};
        this.targetConfig = config;
        if (!this.targetConfig) {
          helpers.error(`${this.targetFile} wrong translation file format`);
        }
        return this.getAllTypescriptFiles();
      })
      .then(files => {
        return this.getFilesWithTranslations(files);
      })
      .then(() => {
        helpers.log(`translation report ${this.outputFile} created!`);
      })
      .catch(reason => {
        helpers.error(reason);
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

  loadFile() {
    const msg = `getting contents from target file`;
    // info...
    this.printInfo(msg);
    
    return fs.readFile(this.targetFile, 'utf-8').catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  createJsFile(transpiledModule) {
    const msg = `writting target js file (tmp)`;
    // info...
    this.printInfo(msg);

    return fs.writeFile(this.targetJsFile, transpiledModule).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  getLangConfig() {
    const msg = `getting target lang config as js module`;
    // info...
    this.printInfo(msg);

    return import(`${this.cwd}/${this.targetJsFile}`).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  getAllTypescriptFiles() {
    const msg = `searching typescript files`;
    // info...
    this.printInfo(msg);

    const search$ = new Promise((res, rej) => {
      glob(`${this.folder}/**/*.ts`, {}, function (error, files) {
        if (error) {
          rej(error);
        }
        res(files);
      })
    });
    return search$.catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });;
  }
  
  getFilesWithTranslations(files) {
    console.log(JSON.stringify(files, null, 2));
    return Promise.resolve(null);
  }
  
  cleanUp() {
    const msg = `clean up tmp js file`;
    // info...
    this.printInfo(msg);

    return fs.remove(this.targetJsFile).catch((err) => {
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

module.exports = CommandTranslationsSearch;