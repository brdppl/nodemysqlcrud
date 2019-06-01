const db = require('../config/database')

const File = db.sequelize.define('upload', {
    filePath: {
        type: db.Sequelize.STRING
    }
})

module.exports = File