const express = require('express')
const pool = require('../pool.js')
var router = express.Router();
//1.获取订单
router.get('/getOrder',(req,res)=>{
    var orderNumber = req.query.orderNumber;
    var status = req.query.status;
    var page = req.query.page;
    var rows = req.query.rows;
    var start = (page-1)*rows;
    var sql="SELECT * FROM `order` WHERE deleteStatus = 0 AND `status` = ? AND orderNumber LIKE '%"+orderNumber+"%' ORDER BY id DESC";
    pool.query(sql,[status],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
        }else{
          res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
        }
      })
})
// 订单  删除
router.get('/orderDelete',(req,res)=>{
  var id = req.query.id;
  var sql=" UPDATE `order` SET deleteStatus = 1 WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({success:true,message:"删除成功!"}));
      }else{
        res.send(JSON.stringify({success:false,message:"删除失败!"}));
      }
    })
})

module.exports = router