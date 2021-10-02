const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    const queryId = req.params.id;
    if(queryId) {
        const absPath = path.resolve(__dirname, '../', 'images', queryId + '_original.jpg');
        fs.access(absPath, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(400).send('Bad Request');
            } else {
                next();
            }
        });
    }
};
