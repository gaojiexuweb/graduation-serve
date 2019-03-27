const express = require('express')
const pool = require('../pool.js')
var router = express.Router();
//1.获取价格列表
router.get('/getPrice',(req,res)=>{
    var lineArrangement = req.query.lineArrangement;
    var page = req.query.page;
    var rows = req.query.rows;
    var start = (page-1)*rows;
    var sql="SELECT * FROM price WHERE deleteStatus = 0 AND lineArrangement LIKE '%"+lineArrangement+"%' ORDER BY id DESC";
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
// 删除价格
router.get('/delete',(req,res)=>{
  var id = req.query.id;
  var sql="UPDATE price SET deleteStatus = 1 WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({success:true,message:"价格删除成功!"}));
      }else{
        res.send(JSON.stringify({success:false,message:"价格删除失败!"}));
      }
    })
})
// 获取线路
router.get('/line',(req,res)=>{
  var sql="SELECT id,lineArrangementId,lineArrangement FROM price";
  pool.query(sql,[],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
          res.send(JSON.stringify({success:true,message:"线路查询成功!",result}));
      }else{
        res.send(JSON.stringify({success:false,message:"线路查询失败!"}));
      }
    })
})
// 获取车辆编号
router.get('/vNumber',(req,res)=>{
  var sql="SELECT id,vehicleNumber FROM vehicle_information";
  pool.query(sql,[],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
          res.send(JSON.stringify({success:true,message:"车辆查询成功!",result}));
      }else{
        res.send(JSON.stringify({success:false,message:"车辆查询失败!"}));
      }
    })
})
// 获取负责人
router.get('/response',(req,res)=>{
  var sql="SELECT id,responsible FROM vehicle_information";
  pool.query(sql,[],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
          res.send(JSON.stringify({success:true,message:"负责人查询成功!",result}));
      }else{
        res.send(JSON.stringify({success:false,message:"负责人查询失败!"}));
      }
    })
})
// 获取客服号码
router.get('/phone',(req,res)=>{
  var sql="SELECT id,servicePhone FROM vehicle_information";
  pool.query(sql,[],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
          res.send(JSON.stringify({success:true,message:"号码查询成功!",result}));
      }else{
        res.send(JSON.stringify({success:false,message:"号码查询失败!"}));
      }
    })
})
// 发货
router.get('/goods',(req,res)=>{
  var id = req.query.id;
  var responsible = req.query.responsible;
  var servicePhone = req.query.servicePhone;
  var vehicleNumber = req.query.vehicleNumber;
  var pickNumber = req.query.pickNumber;
  var lineArrangementId = req.query.lineArrangementId;
  var status = req.query.status;
  var sql="UPDATE `order` SET responsible = ? , servicePhone = ? , vehicleNumber = ? , pickNumber = ? , lineArrangementId = ? , status = ? WHERE id = ?";
  pool.query(sql,[responsible,servicePhone,vehicleNumber,pickNumber,lineArrangementId,status,id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({code:1,msg:"数据插入成功!",success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据插入失败!",success:false}));
      }
    })
})

module.exports = router