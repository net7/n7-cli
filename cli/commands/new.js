const process = require('process');
const fs = require('fs-extra');
const path = require('path');

const nameRegexPattern = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
const prefixRegexPattern = /[a-z]/;
const prefixMinLimit = 2;
const prefixMaxLimit = 4;
const enabledTypes = ['empty', 'arianna', 'dataviz'];


class CommandNew {
  constructor(name, type, prefix) {
    this.name = name;
    this.type = type;
    this.prefix = prefix;
    this.targetPath = process.cwd();
    this.srcPath = path.join(path.dirname(fs.realpathSync(__filename)), '../../base-app');

    // validation
    this.validate();

    // copy directory to new
    /* this.copy()
      .then(_ => {

      })
      .catch(err => console.log(err)); */

    // rename directory

    // replace files
    
    // replace placeholders
    // this._run();
  }

  validate(){
    // validate name
    if(!nameRegexPattern.test(this.name)){
      throw Error(`name ${this.name} should be kebab-case and lowercase`);
    }
    
    // validate type
    if(enabledTypes.indexOf(this.type) === -1){
      throw Error(`type ${this.type} does not exists - allowed types ${enabledTypes.join(' | ')}`);
    }
    
    // validate prefix characters
    if(!prefixRegexPattern.test(this.prefix)){
      throw Error(`prefix ${this.prefix} format error - allowed chars [a-z]`);
    }
    
    // validate prefix length
    if((this.prefix.length > prefixMaxLimit) || (this.prefix.length < prefixMinLimit)){
      throw Error(`prefix ${this.prefix} length error - must be 2 to 4 chars`);
    }
  }

  copy() {
    return fs.copy(this.srcPath, `${this.targetPath}/${this.name}`)
  }

  _run() {
    console.log('new run', {
      name: this.name,
      type: this.type,
      prefix: this.prefix
    });
  }
}

module.exports = CommandNew;