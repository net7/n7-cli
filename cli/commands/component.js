
const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const helpers = require('../utils/helpers');
const config = require('../utils/config');

const ANGULAR_JSON_PATH = './angular.json';
const filesToCopy = [
  'base.html',
  'base.ts'
];
const placeholdersToReplace = {
  pointer: ['appPrefix', 'prettyName', 'name'],
  from: [/appprefix/g, /Base/g, /base/g],
  files: filesToCopy
};

class CommandComponent {
  constructor(name, options) {
    const { path: optionsPath, verbose } = options;
    this.name = name;
    this.path = optionsPath;
    this.verbose = !!verbose;
    this.cwd = process.cwd();
    this.componentsPath = `${this.cwd}/${this.path}`;
    this.targetPath = `${this.componentsPath}/${this.name}`;
    this.srcPath = path.join(
      path.dirname(fs.realpathSync(__filename)), 
      '../../base-app/src/app/templates/components/base'
    );
    this.appPrefix = null;
    this.prettyName = helpers.snakeCaseToPascalCase(this.name);

    // validation
    this.validate();

    helpers.log('creating new component...');
    this.angularJsonExists()
      .then(exists => {
        if(!exists){
          helpers.error(`angular.json file does not exists in ${this.cwd}`);
        }
        return this.componentsPathExists();
      })
      .then(exists => {
        if(!exists){
          helpers.error(`components path does not exists ${this.componentsPath}`);
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
        this.appPrefix = this.getPrefix(angularJson);
        if(typeof this.appPrefix !== 'string'){
          helpers.error(`app prefix wrong value ${this.appPrefix}`);
        }
        helpers.log('loading files...');
        return this.copyFiles();
      })
      .then(() => {
        helpers.log(`setting component name and prefix...`);
        return this.replacePlaceholders();
      })
      .then(() => {
        helpers.log(`new component ${this.name} created! path: ${this.targetPath}`);
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

  componentsPathExists() {
    // info...
    this.printInfo('components path exists control');
    
    return fs.pathExists(this.componentsPath).catch((err) => {
      console.log('components path exists fail', err);
      throw new Error('components path exists fail');
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
      const dest = file.replace('base', this.name);
      files.push({ src, dest });
    });

    // info...
    this.printInfo([
      'copying component files',
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
    const targetFiles = files.map(file => file.replace('base', this.name));

    // info...
    this.printInfo([
      'replacing component placeholders (name, prefix) in: ',
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

  getPrefix(angularJson) {
    const projectKeys = Object.keys(angularJson.projects);
    const { prefix } = angularJson.projects[projectKeys[0]];
    return (
      config.get('component.prefix') 
      || config.get('prefix', prefix)
    );
  }
}

module.exports = CommandComponent;