/* 微信 API 算法 */

// fs 文件 io 模块
var fs = require('fs');
// 处理路径的模块
var path = require("path");
// md5 一个字符串算法模块
var crypto = require("crypto");
// url location 对象模块
var Url = require("url");
// 微信 API 模块
var WechatAPI = require('wechat-api');
// 微信个人信息配置模块
var config = require("./config.js")();

function md5(data) {
  var Buffer = require("buffer").Buffer;
  var buf = new Buffer(data);
  var str = buf.toString("binary");
  return "md5_" + crypto.createHash("md5").update(str).digest("hex");
}

function jssdk(app){
	//设置一个路由接口地址
	//
//	app.use("/wechat/jssdk",function(req,res){
//		//res.send("jssdk");
//		// req.query 获取到的是请求参数中的所有 get 形式的参数
//		var callbackName = req.query['callback'];
//		var data = {
//			"success" : true,
//			"data" : [
//				{"a" : 1},
//				{"b" : 2}
//			]
//		}
//		res.send(`${callbackName}(${JSON.stringify(data)})`);
//	});
	//app.use()  post+get两种请求方式都可以请求到这个接口

	var api = new WechatAPI(config.appid, config.appsecret);
	function (){
		var callbackName = req.query['callback'];
		var param = {
		 debug: false,
		 jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
		 url: 'http://g23.jscook.cn'
		};
		api.getJsConfig(param, function(error,result){

			if(callbackName){
				res.send(`${callbackName}(${JSON.stringify(result)})`);
			}else{
				res.send(result);
			}
		});
	}
	app.use("/wechat/jssdk",function(req,res){

	})
}
signature
module.exports = jssdk;