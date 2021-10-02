const path = require('path');
const express = require('express');
// const api = require("./api");
// const jpegExist = require("./middlewares/jpegExist");
// const { db } = require(path.resolve(__dirname, 'src', 'config'));
// const { router } = require(path.resolve(__dirname, 'src', 'router'));
// app.use('/', router);

const app = express();
try {
    const port = process.env.PORT || 8080;

    app.post('/upload',(res,req) => {
        res.statusCode = 400;
        res.send({id:'post /upload || i am debugging you right now'});
    });

    app.get('/list', (res,req) => {
        res.statusCode = 401;
        res.send({id:'get /list || i am debugging you right now'});
    });
    app.get('/image/:id', (res,req) => {
        res.statusCode = 402;
        res.send({id:'get /image/:id || i am debugging you right now'});
    });

    app.delete('/image/:id', (res,req) => {
        res.statusCode = 403;
        res.send({id:'delete image/:id || i am debugging you right now'});
    });

    app.get('/merge', (res,req) => {
        res.statusCode = 404;
        res.send({id:'/merge || i am debugging you right now'});
    });

    app.listen(port, '127.0.0.1');
} catch (err) {
    console.log(`error: ${err.message}`)
}



