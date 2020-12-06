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

connection.execute(statement, [6000, 7], (err, results) => {
  console.log(results)
})