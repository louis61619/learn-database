const mysql = require('mysql2')

//1.創建連接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: '123'
})

// 2.執行sql語句
// const statement = 'SELECT * FROM products WHERE price > 6000;'

// connection.query(statement, (err, results, fields) => {
//   console.log(results)
//   // connection.end()
//   // connection.destroy()
// })

//使用預處理語句
const statement = 'SELECT * FROM products WHERE price > ? AND score > ?;'

connection.execute(statement, [6000, 7], (err, results) => {
  console.log(results)
})
