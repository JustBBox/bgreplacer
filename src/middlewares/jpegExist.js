const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    const queryId = req.params.id;
    if(queryId) {
        const absPath = path.resolve(__dirname, '../', 'images', queryId + '_original.jpg');
        fs.access(absPath, fs.constants.F_OK, (err) => {
            if (err) {
                res.statusCode = 400;
                return res.send('Bad Request');
            } else {
                next();
            }
        });
    }
};
