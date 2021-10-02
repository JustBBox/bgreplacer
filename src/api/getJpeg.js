const path = require("path");

module.exports = async (req, res) => {
    const queryId = req.params.id;
    const absPath = path.resolve(__dirname, '../', 'images', queryId + '_original.jpg');
    res.sendFile(absPath);
};
