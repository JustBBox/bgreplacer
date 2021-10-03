const { db } = require('../config');

module.exports = async (req, res) => {
    const queryId = req.params.id;
    try {
        await db.remove(queryId);
        res.send({id: queryId})
    }
    catch (err) {
        res.statusCode = 400;
        res.send(`Bad request`);
    }
};
