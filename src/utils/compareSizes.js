const path = require('path');
const sizeOf = require('image-size');

module.exports = (path1, path2) => {
    const dimensions1 = sizeOf(path1);
    const dimensions2 = sizeOf(path2);
    return dimensions1.width === dimensions2.width && dimensions1.height === dimensions2.height;
}
