const { db } = require('../config');

module.exports = async (req, res) => {
    db.list(res);
};
