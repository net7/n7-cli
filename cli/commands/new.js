const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const helpers = require('./helpers');

const prefixRegexPattern = /[a-z]/;
const reservedPrefixes = ['n7', 'aw', 'dv', 'mr'];
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
  constructor(name, type, prefix, verbose) {
    this.name = name;
    this.type = type;
    this.prefix = prefix;
    this.verbose = verbose;
    this.targetPath = `${process.cwd()}/${this.name}`;
    this.srcPath = path.join(path.dirname(fs.realpathSync(__filename)), '../../base-app');

    // validation
    this.validate();

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
        helpers.log(`setup ${this.type} environment...`);
        return this.replaceFiles();
      })
      .then(() => {
        helpers.log(`cleaning up unused files...`);
        return this.cleanUpFiles();
      })
      .then(() => {
        helpers.log(`setting app name and prefix...`);
        return this.replacePlaceholders();
      })
      .then(() => {
        helpers.log(`new n7 app created! path: ${this.targetPath}`);
      })
      .catch(reason => {
        helpers.error(reason);
      });
  }

  validate(){
    // validate name
    if(!helpers.isKebabCase(this.name)){
      helpers.error(`name ${this.name} should be kebab-case and lowercase`);
    }
    
    // validate type
    if(enabledTypes.indexOf(this.type) === -1){
      helpers.error(`type ${this.type} does not exists - allowed types ${enabledTypes.join(' | ')}`);
    }
    
    // validate prefix characters
    if(!prefixRegexPattern.test(this.prefix)){
      helpers.error(`prefix ${this.prefix} format error - allowed chars [a-z]`);
    }

    // validate reserved prefix
    if(reservedPrefixes.indexOf(this.prefix) !== -1){
      helpers.error(`prefix ${this.prefix} is reserved - not allowed prefixes ${reservedPrefixes.join(' | ')}`);
    }
    
    // validate prefix length
    if((this.prefix.length > prefixMaxLimit) || (this.prefix.length < prefixMinLimit)){
      helpers.error(`prefix ${this.prefix} length error - must be 2 to 4 chars`);
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
    const src = this.srcPath + '/.gitignore';
    const target = this.targetPath + '/.gitignore';

    // info...
    this.printInfo(`copying gitignore from ${src} to ${target}`);
    
    return fs.copy(src, target).catch((err) => {
      console.log('copy fail', err);
      throw new Error('copy fail');
    });
  }

  replaceFiles() {
    // type files
    const files = [];
    filesToReplace.forEach(({ path, ext}) => {
      const src = `${path}.${this.type}.${ext}`;
      const dest = `${path}.${ext}`;
      files.push({ src, dest })
    });

    // angular config
    const angularJsonSrc = 'angular.src.json';
    const angularJsonDest = 'angular.json';
    files.push({ src: angularJsonSrc, dest: angularJsonDest });

    // info...
    this.printInfo([
      'replacing environment files',
      ...files.map(({ src, dest }) => `- ${this.name}/${src} => ${this.name}/${dest}`)
    ].join('\n'));
    
    return Promise.all(
      files.map(({ src, dest }) => fs.copy(`${this.targetPath}/${src}`, `${this.targetPath}/${dest}`))
    ).catch((err) => {
      console.log('replace files fail', err);
      throw new Error('replace files fail');
    });
  }

  cleanUpFiles() {
    // type files
    const files = [];
    enabledTypes.forEach(type => {
      filesToReplace.forEach(({ path, ext }) => {
        const src = `${path}.${type}.${ext}`;
        files.push(src);
      });
    })

    // angular config
    const angularJsonSrc = 'angular.src.json';
    files.push(angularJsonSrc);

    // info...
    this.printInfo([
      'removing unused files',
      ...files.map((file) => `- ${this.name}/${file}`)
    ].join('\n'));

    return Promise.all(
      files.map(file => fs.remove(`${this.targetPath}/${file}`))
    ).catch((err) => {
      console.log('clean up fail', err);
      throw new Error('clean up fail');
    });
  }

  replacePlaceholders() {
    const { pointer, from, files } = placeholdersToReplace;

    // info...
    this.printInfo([
      'replacing project placeholders (name, prefix) in: ',
      ...files.map((file) => `- ${this.name}/${file}`)
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

module.exports = CommandNew;