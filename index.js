const path = require('path');
const express = require('express');
const { router } = require(path.resolve(__dirname, 'src', 'router'));

const app = express();
try {

    const port = process.env.PORT || 8080;
    const host = '127.0.0.1';

    app.use('/', router);
    app.listen(port, host);
} catch (err) {
    console.log(`error: ${err.message}`)
}



