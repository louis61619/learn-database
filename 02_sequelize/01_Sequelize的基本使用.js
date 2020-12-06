const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate().then(() => {
  console.log("連接數據庫成功~")
}).catch(err =>　{
  console.log(err)
})