
const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const helpers = require('./helpers');

const ANGULAR_JSON_PATH = './angular.json';
const filesToCopy = [
  'base-layout.config.ts',
  'base-layout.ds.ts',
  'base-layout.eh.ts',
  'base-layout.html',
  'base-layout.ts'
];
const placeholdersToReplace = {
  pointer: ['appPrefix', 'prettyName', 'name'],
  from: [/appprefix/g, /Base/g, /base/g],
  files: filesToCopy
};

class CommandLayout {
  constructor(name, options) {
    const { path: optionsPath, verbose } = options;
    this.name = name;
    this.path = optionsPath;
    this.verbose = !!verbose;
    this.cwd = process.cwd();
    this.layoutsPath = `${this.cwd}/${this.path}`;
    this.targetPath = `${this.layoutsPath}/${this.name}-layout`;
    this.srcPath = path.join(
      path.dirname(fs.realpathSync(__filename)), 
      '../../base-app/src/app/templates/layouts/base-layout'
    );
    this.appPrefix = null;
    this.prettyName = helpers.snakeCaseToPascalCase(this.name);

    // validation
    this.validate();

    helpers.log('creating new layout...');
    this.angularJsonExists()
      .then(exists => {
        if(!exists){
          helpers.error(`angular.json file does not exists in ${this.cwd}`);
        }
        return this.layoutsPathExists();
      })
      .then(exists => {
        if(!exists){
          helpers.error(`layouts path does not exists ${this.layoutsPath}`);
        }
        return this.targetPathExists();
      })
      .then(exists => {
        if(exists){
          helpers.error(`target path already exists ${this.targetPath}`);
        }
        return this.loadAngularJson();
      })
      .then((angularJson) => {
        const projectKeys = Object.keys(angularJson.projects);
        const firstProject = angularJson.projects[projectKeys[0]];
        this.appPrefix = firstProject.prefix;
        if(typeof this.appPrefix !== 'string'){
          helpers.error(`app prefix wrong value ${this.appPrefix}`);
        }
        helpers.log('loading files...');
        return this.copyFiles();
      })
      .then(() => {
        helpers.log(`setting layout name and prefix...`);
        return this.replacePlaceholders();
      })
      .then(() => {
        helpers.log(`new layout ${this.name} created! path: ${this.targetPath}`);
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
    
    if(!helpers.isKebabCase(this.name)){
      helpers.error(`name ${this.name} should be kebab-case and lowercase`);
    }
  }

  angularJsonExists() {
    // info...
    this.printInfo('angular.json exists control');
    
    return fs.pathExists(ANGULAR_JSON_PATH).catch((err) => {
      console.log('angular.json exists fail', err);
      throw new Error('angular.json exists fail');
    });
  }

  layoutsPathExists() {
    // info...
    this.printInfo('layouts path exists control');
    
    return fs.pathExists(this.layoutsPath).catch((err) => {
      console.log('layouts path exists fail', err);
      throw new Error('layouts path exists fail');
    });
  }

  targetPathExists() {
    // info...
    this.printInfo('target path exists control');
    
    return fs.pathExists(this.targetPath).catch((err) => {
      console.log('target path exists fail', err);
      throw new Error('target path exists fail');
    });
  }

  loadAngularJson() {
    // info...
    this.printInfo('getting app prefix');

    return fs.readJSON(ANGULAR_JSON_PATH).catch((err) => {
      console.log('getting app prefix fail', err);
      throw new Error('getting app prefix fail');
    });
  }

  copyFiles() {
    // type files
    const files = [];
    filesToCopy.forEach((file) => {
      const src = file;
      const dest = file.replace('base-', `${this.name}-`);
      files.push({ src, dest });
    });

    // info...
    this.printInfo([
      'copying layout files',
      ...files.map(({ src, dest }) => `- ${src} => ${dest}`)
    ].join('\n'));
    
    return Promise.all(
      files.map(({ src, dest }) => fs.copy(`${this.srcPath}/${src}`, `${this.targetPath}/${dest}`))
    ).catch((err) => {
      console.log('copy files fail', err);
      throw new Error('copy files fail');
    });
  }

  replacePlaceholders() {
    const { pointer, from, files } = placeholdersToReplace;
    const targetFiles = files.map(file => file.replace('base-', `${this.name}-`));

    // info...
    this.printInfo([
      'replacing layout placeholders (name, prefix) in: ',
      ...targetFiles.map((file) => `- ${file}`)
    ].join('\n'));

    return replace({
      from,
      to: pointer.map(point => this[point]),
      files: targetFiles.map(file => `${this.targetPath}/${file}`),
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

module.exports = CommandLayout;