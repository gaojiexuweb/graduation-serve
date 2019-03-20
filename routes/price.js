const express = require('express')
const pool = require('../pool.js')
var router = express.Router();
//1.获取价格列表
router.get('/getPrice',(req,res)=>{
    var lineArrangement = req.query.lineArrangement;
    var page = req.query.page;
    var rows = req.query.rows;
    var start = (page-1)*rows;
    var sql="SELECT * FROM price WHERE lineArrangement LIKE '%"+lineArrangement+"%' ORDER BY id DESC";
    pool.query(sql,[],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
        }else{
          res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
        }
      })
})
// 新增价格
router.get('/add',(req,res)=>{
    console.log(req.query)
    var lineArrangement = req.query.lineArrangement;
    var largeMoney = req.query.largeMoney;
    var smallMoney = req.query.smallMoney;
    var sql="insert into price (lineArrangement,largeMoney,smallMoney) values(?,?,?)";
    pool.query(sql,[lineArrangement,largeMoney,smallMoney],(err,result)=>{
        err&&console.log(err);
        if(result.affectedRows>0){
            res.send(JSON.stringify({code:1,msg:"数据插入成功!"}));
        }else{
          res.send(JSON.stringify({code:0,msg:"数据插入失败!"}));
        }
      })
})
// 编辑价格
router.get('/update',(req,res)=>{
  var lineArrangement = req.query.lineArrangement;
  var largeMoney = req.query.largeMoney;
  var smallMoney = req.query.smallMoney;
  var id = req.query.id;
  var sql="UPDATE price SET lineArrangement = ? , largeMoney = ? , smallMoney = ? WHERE id = ?";
  pool.query(sql,[lineArrangement,largeMoney,smallMoney,id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({code:1,msg:"数据更新成功!"}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据更新失败!"}));
      }
    })
})

module.exports = router