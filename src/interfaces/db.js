const path = require("path");
const sqlite3 = require('sqlite3');
const { removeFile } = require('../utils/fs');

class Database {
    constructor() {
        this.data = new sqlite3.Database(path.resolve(__dirname, '../../', 'jpegDB'), (err) => {
            if (err) {
                console.log('Could not open/create database', err)
            } else {
                // Creating the main table (id, uploadedAt, size, originalFilename)
                this.data.run('CREATE TABLE IF NOT EXISTS main(id TEXT PRIMARY KEY, uploadedAt INTEGER, size INTEGER, originalFilename TEXT)', (err) => {
                    if (err) {
                        console.log('could not create table main: ', err)
                    }
                })
                // this.data.close();
                console.log('Connected to sqlite table main');
            }
        });
    }

    close() {
        this.data.close();
    }

    async remove(searchedId) {
        let sql = `DELETE FROM main WHERE id=?`;

        await this.data.run(sql, searchedId, function(err) {
            if (err) {
                throw new Error(err.message);
            }
            removeFile(`./src/images/${searchedId}_original.jpg`);
        });
    }

    //no async/await in node-sqlite3
    findById(searchedId, cb) {
        let sql = `SELECT * FROM main
                   WHERE id = ${searchedId}`;
        return this.data.query(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            return cb(rows);
        });
    }

    list(res) {
        let sql = `SELECT * FROM main`;

        this.data.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            if(res) {
                res.json(rows);
            }
            return rows;
        });
    }
}

const db = new Database();

module.exports = db;
