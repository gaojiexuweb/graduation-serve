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
// 新增订单
router.get('/orderAdd',(req,res)=>{
  // res.send(JSON.stringify({success:true,message:"删除成功!"}));
  // console.log(req.query)
  var consignee = req.query.consignee;
  var contact = req.query.contact;
  var shippingAddress = req.query.shippingAddress;
  var receivingAddress = req.query.receivingAddress;
  var orderTime = req.query.orderTime;
  var orderNumber = req.query.orderNumber;
  var status = req.query.status;
  var sql="insert into `order` (consignee,contact,shippingAddress,receivingAddress,orderTime,orderNumber,status) values(?,?,?,?,?,?,?)";
  pool.query(sql,[consignee,contact,shippingAddress,receivingAddress,orderTime,orderNumber,status],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({code:1,msg:"数据插入成功!"}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据插入失败!"}));
      }
    })
})
//1.快递单号查询
router.get('/inquiry',(req,res)=>{
  var orderNumber = req.query.orderNumber;
  var sql="SELECT * FROM `order` WHERE deleteStatus = 0 AND orderNumber LIKE '%"+orderNumber+"%'";
  pool.query(sql,[],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
        res.send(JSON.stringify({records:result.length,rows:result,success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
      }
    })
})
// 确认收货
router.get('/require',(req,res)=>{
  var id = req.query.id;
  var status = req.query.status;
  var sql="UPDATE `order` SET status = ? WHERE id = ?";
  pool.query(sql,[status,id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"数据更新成功!",success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据更新失败!",success:false}));
      }
    })
})
module.exports = router