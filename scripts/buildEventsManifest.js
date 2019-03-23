const fs = require('fs');
const yaml = require('js-yaml');

const eventsDir = __dirname + '/../src/_events';
const dirs = fs.readdirSync(eventsDir);

const manifest = [];

for (const dir of dirs) {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(`${eventsDir}/${dir}/manifest.yml`, 'utf8'));
    for (const item of doc) {
      manifest.push(item);
    }
  } catch (e) {
    console.error(e);
  }
}

fs.writeFileSync(`${eventsDir}/eventsManifest.json`, JSON.stringify(manifest));