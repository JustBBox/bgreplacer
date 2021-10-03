const path = require('path');
const express = require('express');
// const api = require("./api");
// const jpegExist = require("./middlewares/jpegExist");
// const { db } = require(path.resolve(__dirname, 'src', 'config'));
// const { router } = require(path.resolve(__dirname, 'src', 'router'));
// app.use('/', router);

const app = express();
try {
    async function createKeyv() {
        const keyv = require('keyv');
        let storage = new keyv({serialize: JSON.stringify, deserialize: JSON.parse});
        await storage.set('kek', '111');
        await storage.set('kok', '22');
        await storage.set('lel', '3333');
        return storage;
    }
    createKeyv().then((data) => console.log(data));
    const port = process.env.PORT || 8080;
    const host = '127.0.0.1';

    app.post('/upload', (req, res) => {
        res.statusCode = 400;
        res.send({id: 'post /upload || i am debugging you right now'});
    });

    app.get('/list', (req, res) => {
        res.statusCode = 401;
        res.send({id: 'get /list || i am debugging you right now'});
    });

    app.get('/image/:id', (req, res) => {
        res.statusCode = 402;
        res.send({id: 'get /image/:id || i am debugging you right now'});
    });

    app.delete('/image/:id', (req, res) => {
        res.statusCode = 403;
        res.send({id: 'delete image/:id || i am debugging you right now'});
    });

    app.get('/merge', (req, res) => {
        res.statusCode = 404;
        res.send({id: '/merge || i am debugging you right now'});
    });

    app.listen(port, host);
} catch (err) {
    console.log(`error: ${err.message}`)
}



