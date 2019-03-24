const fs = require('fs');
const yaml = require('js-yaml');

const generateManifest = () => {
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
      if (dir !== 'eventsManifest.json') {
        throw new Error('No manifest.yml in ' + dir);
      }
    }
  }

  const manifestPath = `${eventsDir}/eventsManifest.json`;
  const manifestJSON = JSON.stringify(manifest);

  if (!fs.existsSync(manifestPath) || (fs.existsSync(manifestPath) && fs.readFileSync(manifestPath) !== manifestJSON)) {
    fs.writeFileSync(manifestPath, manifestJSON);
  }
}

function BuildEventsManifestPlugin() { }

BuildEventsManifestPlugin.prototype.apply = (compiler) => {
  compiler.plugin('before-run', (compiler, callback) => {
    generateManifest()
    callback()
  });
  compiler.plugin('watch-run', (compiler, callback) => {
    generateManifest()
    callback()
  });
}

module.exports = {
  plugin: BuildEventsManifestPlugin,
  builder: generateManifest,
};
