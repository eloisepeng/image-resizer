const sizeOf = require('image-size');

module.exports = (origDir, fileName) => {
  const {width, height} = sizeOf(origDir + fileName);
  return { 
    ratio: width / height,
  };
}
