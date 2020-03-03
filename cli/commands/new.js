const process = require('process');
const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const helpers = require('./helpers');

const nameRegexPattern = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
const prefixRegexPattern = /[a-z]/;
const prefixMinLimit = 2;
const prefixMaxLimit = 4;
const enabledTypes = ['empty', 'arianna', 'dataviz'];
const filesToReplace = [{
  path: 'src/styles/styles',
  ext: 'scss'
}, {
  path: 'src/app/app.routes',
  ext: 'ts'
}, {
  path: 'src/app/app.module',
  ext: 'ts'
}, {
  path: 'src/assets/app-config',
  ext: 'json'
}];
const placeholdersToReplace = {
  pointer: ['name', 'name', 'prefix'],
  from: [/baseappname/g, /BASEAPPNAME/g, /baseappprefix/g],
  files: [
    'package.json',
    'angular.json',
    'e2e/src/app.e2e-spec.ts',
    'karma.conf.js',
    'tslint.json',
    'src/index.html',
    'src/assets/app-config.json',
    'src/app/app.component.ts',
    'src/app/layouts/home-layout/home-layout.config.ts',
    'src/app/layouts/home-layout/home-layout.ts',
    'src/app/layouts/home-layout/home-layout.eh.ts',
  ]
};


class CommandNew {
  constructor(name, type, prefix) {
    this.name = name;
    this.type = type;
    this.prefix = prefix;
    this.targetPath = `${process.cwd()}/${this.name}`;
    this.srcPath = path.join(path.dirname(fs.realpathSync(__filename)), '../../base-app');

    // validation
    this.validate();

    // init
    this.directoryExists()
      .then((exists) => {
        if(exists){
          helpers.error(`new - directory already exists ${this.targetPath}`);
        } 
        return this.copy();
      })
      .then(() => {
        return this.replaceFiles();
      })
      .then(() => {
        return this.cleanUpFiles();
      })
      .then(() => {
        return this.replacePlaceholders();
      })
      .then(() => {
        console.log(`new n7 app created at ${this.targetPath}`);
      })
      .catch(reason => {
        helpers.error(reason);
      });
  }

  validate(){
    // validate name
    if(!nameRegexPattern.test(this.name)){
      helpers.error(`new - name ${this.name} should be kebab-case and lowercase`);
    }
    
    // validate type
    if(enabledTypes.indexOf(this.type) === -1){
      helpers.error(`new - type ${this.type} does not exists - allowed types ${enabledTypes.join(' | ')}`);
    }
    
    // validate prefix characters
    if(!prefixRegexPattern.test(this.prefix)){
      helpers.error(`new - prefix ${this.prefix} format error - allowed chars [a-z]`);
    }
    
    // validate prefix length
    if((this.prefix.length > prefixMaxLimit) || (this.prefix.length < prefixMinLimit)){
      helpers.error(`new - prefix ${this.prefix} length error - must be 2 to 4 chars`);
    }
  }

  directoryExists() {
    return fs.pathExists(this.targetPath).catch((err) => {
      console.log('new - directory exists fail', err);
      Promise.reject('new - directory exists fail');
    });
  }

  copy() {
    return fs.copy(this.srcPath, this.targetPath).catch((err) => {
      console.log('new - copy fail', err);
      Promise.reject('new - copy fail');
    });
  }

  replaceFiles() {
    // type files
    const copy$ = filesToReplace.map(({ path, ext}) => {
      const src = `${this.targetPath}/${path}.${this.type}.${ext}`;
      const dest = `${this.targetPath}/${path}.${ext}`;
      return fs.copy(src, dest);
    });
    // angular config
    copy$.push(fs.copy(`${this.targetPath}/angular.src.json`, `${this.targetPath}/angular.json`));
    
    return Promise.all(copy$).catch((err) => {
      console.log('new - replace files fail', err);
      Promise.reject('new - replace files fail');
    });
  }

  cleanUpFiles() {
    // type files
    const remove$ = [];
    enabledTypes.forEach(type => {
      filesToReplace.forEach(({ path, ext }) => {
        const src = `${this.targetPath}/${path}.${type}.${ext}`;
        remove$.push(fs.remove(src));
      });
    })
    // angular config
    remove$.push(fs.remove(`${this.targetPath}/angular.src.json`));

    return Promise.all(remove$).catch((err) => {
      console.log('new - clean up fail', err);
      Promise.reject('new - clean up fail');
    });
  }

  replacePlaceholders() {
    const { pointer, from, files } = placeholdersToReplace;

    return replace({
      from,
      to: pointer.map(point => this[point]),
      files: files.map(file => `${this.targetPath}/${file}`),
    }).catch((err) => {
      console.log('new - replace placeholders fail', err);
      Promise.reject('new - replace placeholders fail');
    });
  }
}

module.exports = CommandNew;