
const fs = require('fs-extra');
const ts = require('typescript');
const glob = require('glob');
const helpers = require('../utils/helpers');

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
        const { default: config } = this.getLangConfig();
        this.targetConfig = config;
        if (!this.targetConfig) {
          helpers.error(`${this.targetFile} wrong translation file format`);
        }
        return this.getAllTypescriptFiles();
      })
      .then(files => {
        return this.getFilesWithTranslations(files);
      })
      .then(filesWithTranslations => {
        return this.getTranslationsKeys(filesWithTranslations);
      })
      .then((diagnostic) => {
        this.diagnostic = diagnostic;
        return this.cleanUp();
      })
      .then(() => {
        this.outputDiagnostics();
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

    try {
      return require(`${this.cwd}/${this.targetJsFile}`);
    } catch(err) {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    }
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
    const msg = `searching files with translations`;
    // info...
    this.printInfo(msg);

    const filesWithTranslations = [];
    const stringSearch$ = files.map(file => {
      return fs.readFile(file, 'utf-8')
        .then(fileContent => {
          if(/\b_t\(|\btranslate.getTranslation\(/g.test(fileContent)) {
            filesWithTranslations.push(file);
          };
          return Promise.resolve(null);
        })
    });

    return Promise.all(stringSearch$).then(() => {
      return Promise.resolve(filesWithTranslations);
    }).catch((err) => {
      console.log(`${msg} fail`, err);
      throw new Error(`${msg} fail`);
    });
  }

  getTranslationsKeys(filesWithTranslations) {
    const msg = `get translations keys in files`;
    // info...
    this.printInfo(msg);

    const filesReadKeys$ = filesWithTranslations.map(file => {
      return fs.readFile(file, 'utf-8')
        .then(fileContent => {
          const result = ts.transpileModule(fileContent, { 
            compilerOptions: { 
              module: ts.ModuleKind.CommonJS 
            }
          });
          const keys = result.outputText.match(
            /(?<=\.(_t|translate.getTranslation)\(\').+(?=\')/g
          );
          return Promise.resolve({ file, keys });
        })
    });
    return Promise.all(filesReadKeys$);
  }

  outputDiagnostics() {
    const outputLine = [];
    const keysUnique = [];
    this.diagnostic.forEach(({ file, keys }) => {
      keys
        .filter(key => !this.targetConfig[key])
        .forEach(key => {
          outputLine.push(`${file}:${key}`);
          if (!keysUnique.includes(key)) {
            keysUnique.push(key);
          }
        });
    });

    let headerText = `There are ${keysUnique.length} keys with no translation on ${this.targetFile}`;
    if (keysUnique.length === 1) {
      headerText = `There is ${keysUnique.length} key with no translation on ${this.targetFile}`;
    }
    helpers[keysUnique.length === 0 ? 'info' : 'warn'](headerText);
    outputLine.forEach(line => {
      helpers.warn(line);
    });
  }

  cleanUp() {
    const msg = `clean up tmp files`;
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