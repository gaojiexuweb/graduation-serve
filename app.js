//app.js
//1:加载模块
const express = require("express");
const user = require('./routes/user')
const order = require('./routes/order')
const vehicle = require('./routes/vehicle')
const price = require('./routes/price')
//2:创建express对象
var app = express();

//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块   
const cors = require("cors");
//2.2:配置允许哪个程序跨域访问 脚手架   11:16
app.use(cors({
  origin:[
    "http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));

//4:绑定监听端口
app.listen(3000);

//挂载到user下面
app.use('/user',user);
app.use('/order',order)
app.use('/vehicle',vehicle)
app.use('/price',price)



