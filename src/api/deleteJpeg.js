const { db } = require('../config');

module.exports = async (req, res) => {
    const queryId = req.params.id;
    try {
        await db.remove(queryId);
        res.send(`Jpeg with id = ${queryId} was removed`)
        // return res.json(db.findOne(svgId).toPublicJSON());
    }
    catch (err) {
        res.status(400).send(`Bad request`);
    }
};
