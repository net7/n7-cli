
const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');
const helpers = require('../utils/helpers');

const filesToCopy = [
  'base.ds.ts'
];
const placeholdersToReplace = {
  pointer: ['prettyName', 'name'],
  from: [/Base/g, /base/g],
  files: filesToCopy
};

class CommandDatasource {
  constructor(name, options) {
    const { path: optionsPath, verbose } = options;
    this.name = name;
    this.path = optionsPath;
    this.verbose = !!verbose;
    this.cwd = process.cwd();
    this.datasourcesPath = `${this.cwd}/${this.path}`;
    this.targetPath = `${this.datasourcesPath}`;
    this.srcPath = path.join(
      path.dirname(fs.realpathSync(__filename)), 
      '../../base-app/src/app/templates/data-sources'
    );
    this.prettyName = helpers.snakeCaseToPascalCase(this.name);

    // validation
    this.validate();

    helpers.log('creating new datasource...');
    this.datasourcesPathExists().then(exists => {
        if(!exists){
          helpers.error(`datasources path does not exists ${this.datasourcesPath}`);
        }
        return this.copyFiles();
      })
      .then(() => {
        helpers.log(`setting datasource name...`);
        return this.replacePlaceholders();
      })
      .then(() => {
        helpers.log(`new datasource ${this.name} created! path: ${this.targetPath}`);
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

  datasourcesPathExists() {
    // info...
    this.printInfo('datasources path exists control');
    
    return fs.pathExists(this.datasourcesPath).catch((err) => {
      console.log('datasources path exists fail', err);
      throw new Error('datasources path exists fail');
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
      'copying datasource files',
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
      'replacing datasource placeholders (name, prefix) in: ',
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

module.exports = CommandDatasource;