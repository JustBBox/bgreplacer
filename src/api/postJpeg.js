const { db } = require('../config');

module.exports = async (req, res) => {
    const File = {
        id: req.file.filename.slice(0, req.file.filename.length - 13),
        uploadedAt: Date.now(),
        size: req.file.size,
        originalFilename: req.file.filename
    };

    let sql = `INSERT INTO main(id, uploadedAt, size, originalFilename) VALUES(?, ?, ?, ?)`;
    db.data.run(sql, [File.id,File.uploadedAt,File.size,File.originalFilename], function(err) {
        if (err) {
            return console.log('error on insertion(POST): ', err.message);
        }
        // get the last insert id
        console.log(`File has been inserted to database with id ${File.id}`);
    });
    File.encoding = req.file.encoding;
    File.mimetype = req.file.mimetype;
    return res.json(File);
};
