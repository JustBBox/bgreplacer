const path = require('path');
const express = require('express');
const { db } = require(path.resolve(__dirname, 'src', 'config'));
const { router } = require(path.resolve(__dirname, 'src', 'router'));

const app = express();
try {
    const port = process.env.PORT || 8080;
    app.use('/', router);
    app.listen(port, '127.0.0.1');
} catch (err) {
    console.log(`error: ${err.message}`)
}



