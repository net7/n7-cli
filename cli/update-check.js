const { Octokit } = require('@octokit/rest');
const helpers = require("./commands/helpers");
const { version } = require('../package.json');

const octokit = new Octokit({
  auth: 'a4f0b27eaa6b475ba82ae239bc14e50562c93573'
});
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
      helpers.warn(`There is a new n7-cli version ${repoVersion}.`);
      helpers.warn(`Please update: npm i git+ssh://git@github.com:net7/n7-cli.git#master -g`);
    }
  } catch(err) {
    helpers.warn('There was an error getting n7-cli repo version', err);
  }
}

module.exports = { run }
