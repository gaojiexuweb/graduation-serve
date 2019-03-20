const express = require('express')
const pool = require('../pool.js')
var router = express.Router();
//1.车辆安排
router.get('/information',(req,res)=>{
    var vehicleNumber = req.query.vehicleNumber;
    var page = req.query.page;
    var rows = req.query.rows;
    var start = (page-1)*rows;
    var sql="SELECT * FROM vehicle_information WHERE vehicleNumber LIKE '%"+vehicleNumber+"%'";
    pool.query(sql,[],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
        }else{
          res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
        }
      })
})

// 车辆信息
router.get('/configuration',(req,res)=>{
    var vehicleType = req.query.vehicleType;
    var page = req.query.page;
    var rows = req.query.rows;
    var start = (page-1)*rows;
    var sql="SELECT * FROM vehicle_configuration WHERE vehicleType LIKE '%"+vehicleType+"%'";
    pool.query(sql,[],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
        }else{
          res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
        }
      })
})

module.exports = router