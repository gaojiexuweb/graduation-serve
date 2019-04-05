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
// 保存信息
router.get('/info',(req,res)=>{
  console.log(req.query)
  var user_name = req.query.username;
  var user_sex = req.query.sex;
  var user_phone = req.query.phone;
  var user_age = req.query.age;
  var sql="UPDATE user_login SET user_sex = ? , user_phone = ? , user_age = ? WHERE user_name = ?";
  pool.query(sql,[user_sex,user_phone,user_age,user_name],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({code:1,msg:"数据更新成功!"}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据更新失败!"}));
      }
    })
})
// 信息查询
router.get('/tips',(req,res)=>{
  var user_name = req.query.username;
  console.log(req.query)
  var sql="select * from user_login where user_name=?";
  pool.query(sql,[user_name],(err,result)=>{
      err&&console.log(err);
      console.log(result)
      if(result.length>0){
        res.send(JSON.stringify({records:result.length,rows:result,success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
      }
    })
})
module.exports = router