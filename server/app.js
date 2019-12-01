var express = require('express');
var fs = require('fs');
var path = require('path');
const routerRegister = require("./routes/register");
const routerLogin = require("./routes/login");
const routerList = require("./routes/list");
var app = express();

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../server/routes')));

// 加载相应模块
app.use("/register", routerRegister);
app.use("/login", routerLogin);
app.use("/list", routerList);

// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
// res.setHeader("Access-Control-Allow-Origin", "*"); 
// res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
// res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// res.setHeader("X-Powered-By",' 3.2.1');
// res.setHeader("Content-Type", "text/html");
  res.send(html);
  
});

// 监听
app.listen(3000, function () {
  console.log("server is running");
});
