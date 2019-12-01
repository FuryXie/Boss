//先建一个连接池
const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "boss",
    port: "3306",
    connectionLimit: 10
});
module.exports = pool;