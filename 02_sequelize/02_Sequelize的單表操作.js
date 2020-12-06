const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize("coderhub", "root", "123", {
  host: 'localhost',
  dialect: 'mysql'
})

class Product extends Model {};
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  price: DataTypes.DOUBLE,
  score: DataTypes.DOUBLE
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
});

async function queryProducts() {
  // 1.查詢數據庫中products表內所有的內容
  // const result = await Product.findAll({
  //   //給條件
  //   where: {
  //     price: {
  //       [Op.gte]: 5000,
  //     }
  //   }
  // });
  // console.log(result)

  // 2.插入數據
  // Product.create({
  //   title: '三星note7',
  //   price: 8888,
  //   score: 5.5,
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 3.更新數據
  const result = await Product.update({
    price: 3688
  }, {
    where: {
      id: 1
    }
  })
  console.log(result)
}



queryProducts()