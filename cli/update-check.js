const { Octokit } = require('@octokit/rest');
const inquirer = require('inquirer');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const helpers = require("./commands/helpers");
const { version } = require('../package.json');

const octokit = new Octokit();
const owner = 'net7';
const repo = 'n7-cli';
const path = 'package.json';

async function run() {
  try {
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });
    const { data } = response;
    const buffer = new Buffer.from(data.content, 'base64');
    const repoVersion = JSON.parse(buffer.toString()).version;
    if (repoVersion !== version) {
      const updateCommand = 'npm i git+ssh://git@github.com:net7/n7-cli.git#master -g';
      const answers = await inquirer.prompt([{
        type: 'list',
        name: 'update',
        message: `There is a new n7-cli version ${repoVersion}. Do you want to update?`,
        choices: ['Yes', 'No'],
        default: 'Yes'
      }]);
      if (answers.update === 'Yes') {
        helpers.info(`Updating n7-cli to version ${repoVersion}`);
        try {
          await exec(updateCommand);
          helpers.info(`n7-cli updated!`);
        } catch(err) {
          helpers.warn('There was an error updating n7-cli');
          helpers.warn(`Please try running this command manually: ${updateCommand}`);
        }
      } else {
        helpers.info(`Ok, you can update it manually running this command: ${updateCommand}`);
      }
    }
  } catch(err) {
    helpers.warn('There was an error getting n7-cli repo version', err);
  }
}

module.exports = { run }
