var mergeYaml = require('merge-yaml');
const YAML = require('yaml')
var fs = require('fs');
 
const conf = mergeYaml([
    'conf/base_conf.yml',
    'node_modules/@n7-frontend/serverless/dist/serverless.yml',
]);
const doc = new YAML.Document();
doc.contents = conf;
fs.writeFileSync('serverless.yml', doc)
