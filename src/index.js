const fs = require('fs');
const path = require('path');
const files = require('./files');

function copyFiles(toDir, preset) {
  if (!files[preset]) return;

  Object.keys(files[preset]).forEach(key => {
    const source = path.resolve(__dirname, 'files', key);
    const dest = path.resolve(toDir, files[preset][key]);

    if (fs.existsSync(dest)) {
      console.warn('File already exists', dest); // eslint-disable-line no-console
      return;
    }

    fs.createReadStream(source).pipe(fs.createWriteStream(dest));
  });
}

module.exports = (cwd, ...args) => {
  args.forEach(arg => copyFiles(cwd, arg));
};
