const express = require("express");
//创建一个路由对象
var router = express.Router();
const pool = require("../pool");
var session = require("express-session");
const qs = require("querystring")

router.use(session({
  secret: 'secret', // 对session id 相关的cookie 进行签名
  resave: true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    maxAge: 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
  },
}));

router.post("/login", (req, res) => {
  req.on("data", (buf) => {
    var obj = qs.parse(buf.toString()); //得到的请求到的数据
    var tel = obj.tel;
    var pwd = obj.pwd;
    console.log("tel:"+tel);
    console.log("pwd"+pwd);
    //从连接池中获取链接
    pool.getConnection((err, conn) => {
      if (err) throw err;
      var sql = "SELECT pwd FROM users WHERE tel = ?";
      conn.query(sql, [tel], (err, result) => {
        if (err) throw err;
        if (result[0] == undefined) {
          res.json({
            code: "-1",
            msg: "用户不存在！"
          })
        } else {
          console.log(result);
          console.log("用户密码：" + pwd);
          console.log("数据库中密码：" + result[0].pwd);
          console.log("用户密码：" + typeof (pwd));
          console.log("数据库中密码：" + typeof (result[0].pwd));
          if (pwd == result[0].pwd) {
            // req.session.userName = tel; // 登录成功，设置 session
            // 设置session
            req.session.username = tel;
            console.log("req.session.username=" + JSON.stringify(req.session.username));

            res.json({
              code: "1",
              msg: "验证成功！",
              // tel: tel
            });
          } else {
            res.json({
              code: "-1",
              msg: "密码错误！"
            });
          }
        }
      })
      conn.release();
    });
  })
})

// 设置session 
router.get("/x", (req, res) => {
  // console.log("req.session=" + req.session);
  // console.log("req.session2=" + JSON.stringify(req.session));
  console.log("req.session.username:" + req.session.username);
  // res.json(req.session.username); //发送数据json
  if (req.session.username) {
    console.log("tttttt");
    console.log("req.session.username:" + req.session.username);
    res.json({
        code: 1,
        msg: "已登录！",
        uname:req.session.username
      });
  } else {
    console.log("fffffff");
    res.json({
      code: -1,
      msg: "请先登录！",
    });
  }
})

//logout
router.get("/logout", (req, res) => {
  req.session.username = null; // 删除session
  if (req.session.username) {
    console.log("TTTTTTT");
    res.json({
      code: -1,
      msg: "失败",
    });
  } else {
    console.log("FFFFF");
    res.json({
      code: 1,
      msg: "成功",
    });
  }
})



// 引入模块
module.exports = router;
