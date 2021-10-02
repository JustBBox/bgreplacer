const express = require('express');
const path = require('path');

const api = require('./api');
const router = new express.Router();
const jpegExist = require('./middlewares/jpegExist');
const upload  = require(path.resolve(__dirname, 'utils', 'upload'));

// routes
router.post('/upload',
        upload.single('image'),
        api.postJpeg,
        (error, req, res, next) => {
        res.statusCode = 400;
        res.send({ error: error.message });
});

router.get('/list', api.getJpegs);
router.get('/image/:id', jpegExist, api.getJpeg);

router.delete('/image/:id', api.deleteJpeg);

router.get('/merge', api.getMerge);

exports.router = router;
