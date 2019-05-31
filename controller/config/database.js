const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch((erro) => console.log('Falha ao se conectar '+erro))

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}