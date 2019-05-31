const db = require('../config/database')

const Posts = db.sequelize.define('posts', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    },
    autor: {
        type: db.Sequelize.STRING
    },
    ativo: {
        type: db.Sequelize.BOOLEAN
    }
})

module.exports = Posts