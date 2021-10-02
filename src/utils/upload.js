const multer = require("multer");
const { makeId } = require("../utils/makeId");
const { jpegFolder } = require("../config");

const storage = multer.diskStorage({
    destination: jpegFolder,
    filename: function (req, file, cb) {
        const generatedFilename = makeId() + '_original.jpg';
        cb(null, generatedFilename);
    }
})

const upload = multer({
    storage: storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg)$/)) {
            // upload only jpg format
            return cb(new Error('Please upload an Image(JPEG)'))
        }
        cb(undefined, true)
    }
});

module.exports = upload;
