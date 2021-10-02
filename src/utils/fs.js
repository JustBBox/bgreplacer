const fsPromises = require('fs/promises');

module.exports = {
    writeFile: async (path, content) => {
        await fsPromises.writeFile(path, content, { encoding: 'utf-8' });
    },

    removeFile: async (path) => {
        try {
            await fsPromises.unlink(path)
                .then(() => console.log(`file related to path ${path} was removed.`));
        } catch (err) {
            console.log(`removeFile error: file ${path} doesn't exist...`);
        }
    },

    exists: async (path) => {
        return await fsPromises.access(path).then(() => true).catch(() => false);
    },
};
