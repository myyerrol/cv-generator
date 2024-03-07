const path = require('path');
const fs = require('fs');

const getCVFromDirectories = () => {
  const directories = getDirectories();
  return directories
    .map(dir => {
      let fileName = dir.replace('.vue', '');
      return {
        path: fileName,
        name: fileName
      };
    });
};

const getDirectories = () => {
  const srcpath = path.join(__dirname, '../../src/cvs');
  return fs.readdirSync(srcpath)
    .filter(file => file !== 'cvs.js' && file !== 'template.vue' && file !== 'options.js');
};

module.exports = getCVFromDirectories;
