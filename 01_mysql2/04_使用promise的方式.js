const mysql = require('mysql2')

// 1.創建連接池
const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: '123',
  connectionLimit: 10
})

// 2.使用連接池
const statement = `
  SELECT * from products WHERE price > ? AND score > ?;
`

connection.promise().execute(statement, [6000, 7]).then(([results]) => {
  console.log(results)
}).catch(err => {
  console.log(err)
})