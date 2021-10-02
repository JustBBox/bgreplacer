const path = require('path');
const express = require('express');
const { PORT, db } = require(path.resolve(__dirname, 'src', 'config'));
const { router } = require(path.resolve(__dirname, 'src', 'router'));

const app = express();

app.use('/', router);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}).on('close', () => db.close());
