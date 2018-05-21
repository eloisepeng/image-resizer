// node.js entry point

const fs = require('fs');
const path = require('path');
const resizeImg = require('resize-img');
const sizeOf = require('image-size');
const dimension = require('./dimension.js');

const origDir = path.join(__dirname, '../../images/orig/');
const distDir = path.join(__dirname, '../../images/dist/');

module.exports = (distWidth = 100) => {
  const files = fs.readdirSync(origDir);

  files.forEach(file => {
    const { ratio } = dimension(origDir, file);
    resizeImg(fs.readFileSync(origDir + file), {width: distWidth, height: distWidth / ratio})
      .then(buf => {
        fs.writeFileSync(distDir + file, buf);
      });
  });
}