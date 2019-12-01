const express = require("express");
//创建一个路由对象
var router = express.Router();
const pool = require("../pool");
const qs = require("querystring");

router.post("/register", (req, res) => {
    req.on("data", (buf) => {
        var obj = qs.parse(buf.toString()); //得到的请求到的数据
        var uname = obj.uname;
        var upwd = obj.upwd;

        //从连接池中获取链接
        pool.getConnection((err, conn) => {
            if (err) throw err;
            var sql = "INSERT INTO users(uname,upwd) VALUES(?,?)";
            conn.query(sql, [uname,upwd], (err, result) => {
                if (err) throw err;
                if(result.affectedRows>0){
                    res.json({code:1,msg:"注册成功！"});
                    console.log(result);
                }else{
                    res.json({code:-1,msg:"注册失败！"});
                }
            })
            conn.release();
        })
    })
})


// 引入模块
module.exports = router;

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 38,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
// }