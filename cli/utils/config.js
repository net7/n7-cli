const { get: _get } = require('lodash');

const PROJECT_CONFIG_PATH = '.n7clirc.js';

module.exports = {
  get(path, fallback = null) {
    let config = {};
    try {
      const cwd = process.cwd();
      const filePath = `${cwd}/${PROJECT_CONFIG_PATH}`;
      config = require(filePath);
    } catch (err) {
      // do nothing
    }

    return _get(config, path) || fallback;
  }
}