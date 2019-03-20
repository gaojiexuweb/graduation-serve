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
    var sql="SELECT * FROM `order` WHERE `status` = ? AND orderNumber LIKE '%"+orderNumber+"%'";
    pool.query(sql,[status],(err,result)=>{
        err&&console.log(err);
        if(result.length>0){
          res.send(JSON.stringify({records:result.length,rows:result.splice(start,rows),success:true}));
        }else{
          res.send(JSON.stringify({code:0,msg:"没有查询到数据!",rows:[],success:false}));
        }
      })
})
module.exports = router