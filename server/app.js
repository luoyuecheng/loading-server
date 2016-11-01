// web 项目框架
var express = require('express');
//导入 request 模块 http 请求模块插件
//var request = require('request');
// 实例化 express 模块
var app = express(); // 或 var app = new express()
var path = require("path");

//加载 token 模块
require("./token")(app);

// route 术语：路由
// request 浏览器发送给服务器的数据
// response 服务器给浏览器返回的数据

//将两个路径合并为一个
var staticpath = path.join(__dirname, "../static");

// 开启静态服务器，把指定的目录做为根目录
app.use(express.static(staticpath));

// 创建一个 http 服务
var server  = require('http').createServer(app);
// 监听断口和 ip 地址 127.0.0.1 或 0.0.0.0
// 0.0.0.0 只要是同一个网络，都能监听到本机
server.listen(80, "0.0.0.0", function() {
    console.log('http://127.0.0.1:80');
});


