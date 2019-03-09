/**
 * Created by web on 2018/9/5.
 */
const express = require('express')
const pool = require('../pool.js')
var router = express.Router();
//1.用户登录
router.get('/login',(req,res)=>{
    console.log(req.query)
    var user_name = req.query.username;
    var user_password = req.query.password
    var sql="select * from user_login where user_name=? and user_password=?";
    pool.query(sql,[user_name,user_password],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          console.log(1,result)
          res.send(JSON.stringify({code:1,msg:"登录成功!"}));
        }else{
          res.send(JSON.stringify({code:0,msg:"用户名或密码错误!"}));
        }
      })
})
//2.用户注册
router.get('/register',(req,res)=>{
    var obj = req.query;
    let user_name = obj.username;
    let user_password = obj.password
    var sql = 'insert into user_login (user_name,user_password) values (?,?)'
    pool.query(sql,[user_name,user_password],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send(JSON.stringify({code:1,msg:"注册成功!"}));
        }else{
            res.send(JSON.stringify({code:0,msg:"注册失败!"}));
        }
    })
})
//3.用户查询
// router.get('/select',(req,res)=>{
//     var $uname = req.query.uname;
//     if(!$uname){
//         res.send('用户编号不能为空')
//     }
//     var sql = 'select * from xz_user where uname = ?'
//     pool.query(sql,$uname,(err,result)=>{
//         if(err) throw err
//         if(result.length>0){
//             console.log(result)
//             res.send('查询成功')
//             res.end()
//         }else{
//             res.send('没有该用户')
//             res.end()
//         }
//     })
// })
module.exports = router