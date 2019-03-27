const express = require('express')
const pool = require('../pool.js')
var router = express.Router();
//1.车辆安排 查询
router.get('/mange',(req,res)=>{
    var vehicleNumber = req.query.vehicleNumber;
    var page = req.query.page;
    var rows = req.query.rows;
    var start = (page-1)*rows;
    var sql="SELECT * FROM vehicle_information WHERE deleteStatus = 0 AND vehicleNumber LIKE '%"+vehicleNumber+"%' ORDER BY id DESC";
    pool.query(sql,[],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
        }else{
          res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
        }
      })
})
// 车辆安排  修改
router.get('/mangeUpdate',(req,res)=>{
  console.log(req.query)
  var id = req.query.id;
  var lineArrangementId = req.query.lineArrangementId;
  var responsible = req.query.responsible;
  var servicePhone = req.query.servicePhone;
  var status = req.query.status;
  var sql="UPDATE vehicle_information SET lineArrangementId = ? , responsible = ? , servicePhone = ? , status = ? WHERE id = ?";
  pool.query(sql,[lineArrangementId,responsible,servicePhone,status,id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"数据更新成功!",success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据更新失败!",success:false}));
      }
    })
})
// 车辆安排  新增
router.get('/mangeAdd',(req,res)=>{
  // console.log(req.query)
  var vehicleNumber = req.query.vehicleNumber;
  var responsible = req.query.responsible;
  var lineArrangementId = req.query.lineArrangementId;
  var servicePhone = req.query.servicePhone;
  var largeNumber = req.query.largeNumber;
  var smallNumber = req.query.smallNumber;
  var status = req.query.status;
  var sql="insert into vehicle_information (vehicleNumber,responsible,lineArrangementId,servicePhone,largeNumber,smallNumber,status) values(?,?,?,?,?,?,?)";
  pool.query(sql,[vehicleNumber,responsible,lineArrangementId,servicePhone,largeNumber,smallNumber,status],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({code:1,msg:"数据插入成功!"}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据插入失败!"}));
      }
    })
})

// 车辆安排  删除
router.get('/mangeDelete',(req,res)=>{
  var id = req.query.id;
  var sql="UPDATE vehicle_information SET deleteStatus = 1 WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({success:true,message:"删除成功!"}));
      }else{
        res.send(JSON.stringify({success:false,message:"删除失败!"}));
      }
    })
})
// 车辆配置 查询
router.get('/config',(req,res)=>{
  var vehicleType = req.query.vehicleType;
  var page = req.query.page;
  var rows = req.query.rows;
  var start = (page-1)*rows;
  var sql="SELECT * FROM vehicle_configuration WHERE deleteStatus = 0 AND vehicleType LIKE '%"+vehicleType+"%' ORDER BY id DESC";
  pool.query(sql,[],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
        res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
      }
    })
})
// 车辆配置  修改
router.get('/configUpdate',(req,res)=>{
  var id = req.query.id;
  var vehicleType = req.query.vehicleType;
  var vehicleNumber = req.query.vehicleNumber;
  var largeNumber = req.query.largeNumber;
  var smallNumber = req.query.smallNumber;
  var color = req.query.color;
  var length = req.query.length;
  var width = req.query.width;
  var height = req.query.height;
  var sql="UPDATE vehicle_configuration SET vehicleType = ? , vehicleNumber = ? , largeNumber = ? , smallNumber = ? , color = ? , length = ? , width = ? , height = ? WHERE id = ?";
  pool.query(sql,[vehicleType,vehicleNumber,largeNumber,smallNumber,color,length,width,height,id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"数据更新成功!",success:true}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据更新失败!",success:false}));
      }
    })
})
// 车辆配置  删除
router.get('/configDelete',(req,res)=>{
  var id = req.query.id;
  var sql="UPDATE vehicle_configuration SET deleteStatus = 1 WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({success:true,message:"删除成功!"}));
      }else{
        res.send(JSON.stringify({success:false,message:"删除失败!"}));
      }
    })
})
// 车辆配置  新增
router.get('/configAdd',(req,res)=>{
  var vehicleType = req.query.vehicleType;
  var vehicleNumber = req.query.vehicleNumber;
  var largeNumber = req.query.largeNumber;
  var smallNumber = req.query.smallNumber;
  var color = req.query.color;
  var length = req.query.length;
  var width = req.query.width;
  var height = req.query.height;
  var sql="insert into vehicle_configuration (vehicleType,vehicleNumber,largeNumber,smallNumber,color,length,width,height) values(?,?,?,?,?,?,?,?)";
  pool.query(sql,[vehicleType,vehicleNumber,largeNumber,smallNumber,color,length,width,height],(err,result)=>{
      err&&console.log(err);
      if(result.affectedRows>0){
          res.send(JSON.stringify({code:1,msg:"数据插入成功!"}));
      }else{
        res.send(JSON.stringify({code:0,msg:"数据插入失败!"}));
      }
    })
})
module.exports = router