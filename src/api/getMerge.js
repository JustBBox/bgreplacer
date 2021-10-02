const { db } = require('../config');
const compareSizes = require('../utils/compareSizes');
const fs = require("fs");
const path = require("path");
const {replaceBackground} = require("backrem");

module.exports = async (req, res) => {
    const queryObject = {
        front: req.query.front,
        back: req.query.back,
        color: req.query?.color,
        threshold: req.query?.threshold
    }
    if(queryObject.color) queryObject.color = queryObject.color.split(',').map(x => +x);
    if(queryObject.threshold) queryObject.threshold = +queryObject.threshold;

    console.log(JSON.stringify(queryObject));

    console.log('merge')
    if(!queryObject.front || !queryObject.back) {
        res.statusCode = 400;
        res.send('Bad request');
        return;
    }

    try {
        const front = path.resolve(__dirname, '../', 'images', queryObject.front + '_original.jpg');
        await fs.promises.access(front, fs.constants.F_OK);
        const back = path.resolve(__dirname, '../', 'images', queryObject.back + '_original.jpg');
        await fs.promises.access(back, fs.constants.F_OK);

        console.log(`front: ${front}`);
        console.log(`back: ${back}`);
        if(!compareSizes(front,back)) {
            res.statusCode = 400;
            res.send('Bad request');
            return;
        } else {
            const frontRS = fs.createReadStream(front);
            const backRS = fs.createReadStream(back);

            replaceBackground(frontRS, backRS, queryObject.color, queryObject.threshold ).then(
                (readableStream) => {
                    readableStream.pipe(res);
                }).catch((err) => {
                res.statusCode = 400;
                res.send({error: err.message})
            });
        }
    }
    catch (err) {
        res.statusCode = 400;
        return res.send({ error: err.message });
    }

};
