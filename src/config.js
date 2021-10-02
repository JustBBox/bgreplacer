const path = require('path');

const db = require(path.resolve(__dirname, 'interfaces', 'db'));
const jpegFolder = path.resolve(__dirname, 'images');

module.exports = {
    PORT: 8080,
    db,
    jpegFolder
};
