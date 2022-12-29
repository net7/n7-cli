const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const helpers = require('../utils/helpers');

const nameRegexPattern = /^[a-z]*$/g;
const nameMinLimit = 3;
const nameMaxLimit = 20;
const filesToReplace = [
  'src/parsers/baseslsname-home.ts',
  'src/parsers/baseslsname-resources.ts',
  'src/parsers/baseslsname-search.ts',
];
const placeholdersToReplace = {
  pointer: ['name', 'nameUppercase', 'nameCamelcase'],
  from: [/baseslsname/g, /BASESLSNAME/g, /Baseslsname/g],
  files: [
    'package.json',
    'README.md',
    'src/parsers/baseslsname-home.ts',
    'src/parsers/baseslsname-resources.ts',
    'src/parsers/baseslsname-search.ts',
    'src/parsers/index.ts',
  ]
};
const additionalFilesToRemove = [
  'gitignore.tpl.txt',
];


class CommandSls {
  constructor(name, verbose) {
    this.name = name;
    this.verbose = verbose;
    this.targetPath = `${process.cwd()}/${this.name}-sls`;
    this.srcPath = path.join(path.dirname(fs.realpathSync(__filename)), '../../base-sls');
    
    // validation
    this.validate();

    // placeholder vars
    this.nameUppercase = this.name.toUpperCase();
    this.nameCamelcase = helpers.ucFirst(this.name);

    // init
    helpers.log('loading files...');
    this.directoryExists()
      .then((exists) => {
        if(exists){
          helpers.error(`directory already exists ${this.targetPath}`);
        } 
        return this.copy();
      })
      .then(() => {
        helpers.log(`loading .gitignore...`);
        return this.copyGitignore();
      })
      .then(() => {
        helpers.log(`setup ${this.name} files...`);
        return this.replaceFiles();
      })
      .then(() => {
        helpers.log(`cleaning up unused files...`);
        return this.cleanUpFiles();
      })
      .then(() => {
        helpers.log(`setting project name...`);
        return this.replacePlaceholders();
      })
      .then(() => {
        helpers.log(`new muruca sls project created! path: ${this.targetPath}`);
      })
      .catch(reason => {
        helpers.error(reason);
      });
  }

  validate(){
    // validate name
    if (typeof this.name !== 'string' || !this.name.trim()) {
      helpers.error('"name" option is mandatory');
    }

    if(!nameRegexPattern.test(this.name)){
      helpers.error(`name ${this.name} format error - allowed chars [a-z]`);
    }
    
    // validate name length
    if((this.name.length > nameMaxLimit) || (this.name.length < nameMinLimit)){
      helpers.error(`name ${this.name} length error - must be ${nameMinLimit} to ${nameMaxLimit} chars`);
    }
  }

  directoryExists() {
    // info...
    this.printInfo(`directory exists control: ${this.targetPath}`);
    
    return fs.pathExists(this.targetPath).catch((err) => {
      console.log('directory exists fail', err);
      throw new Error('directory exists fail');
    });
  }

  copy() {
    // info...
    this.printInfo(`copying files from ${this.srcPath} to ${this.targetPath}`);
    
    return fs.copy(this.srcPath, this.targetPath).catch((err) => {
      console.log('copy fail', err);
      throw new Error('copy fail');
    });
  }

  copyGitignore() {
    const src = this.srcPath + '/gitignore.tpl.txt';
    const target = this.targetPath + '/.gitignore';

    // info...
    this.printInfo(`copying gitignore from ${src} to ${target}`);
    
    return fs.copy(src, target).catch((err) => {
      console.log('copy .gitignore fail', err);
      throw new Error('copy .gitignore fail');
    });
  }

  replaceFiles() {
    // type files
    const files = [];
    filesToReplace.forEach((file) => {
      const src = file;
      const dest = file.replace('baseslsname', this.name);
      files.push({ src, dest })
    });

    // info...
    this.printInfo([
      'replacing files',
      ...files.map(({ src, dest }) => `- ${this.name}-sls/${src} => ${this.name}-sls/${dest}`)
    ].join('\n'));
    
    return Promise.all(
      files.map(({ src, dest }) => fs.copy(`${this.targetPath}/${src}`, `${this.targetPath}/${dest}`))
    ).catch((err) => {
      console.log('replace files fail', err);
      throw new Error('replace files fail');
    });
  }

  cleanUpFiles() {
    const files = [];
    filesToReplace.forEach((file) => {
      files.push(file)
    });

    // additional files to remove
    additionalFilesToRemove.forEach(file => {
      files.push(file);
    });

    // info...
    this.printInfo([
      'removing unused files',
      ...files.map((file) => `- ${this.name}-sls/${file}`)
    ].join('\n'));

    return Promise.all(
      files.map(file => fs.remove(`${this.targetPath}/${file}`))
    ).catch((err) => {
      console.log('clean up fail', err);
      throw new Error('clean up fail');
    });
  }

  replacePlaceholders() {
    const { pointer, from } = placeholdersToReplace;
    let { files } = placeholdersToReplace;
    files = files.map((file) => file.replace('baseslsname', this.name));

    // info...
    this.printInfo([
      'replacing project placeholders (name) in: ',
      ...files.map((file) => `- ${this.name}-sls/${file}`)
    ].join('\n'));

    return replace({
      from,
      to: pointer.map(point => this[point]),
      files: files.map(file => `${this.targetPath}/${file}`),
    }).catch((err) => {
      console.log('replace placeholders fail', err);
      throw new Error('replace placeholders fail');
    });
  }

  printInfo(msg){
    if(this.verbose){
      helpers.info(msg);
    }
  }
}

module.exports = CommandSls;