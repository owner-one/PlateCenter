var path=require('path');


const devProxy=['/pc','/weixin','/android'];
var proEnv=require('./config/pro.env.js');
var uatEnv=require('./config/uat.env.js');
var devEnv=require('./config/dev.env.js');
const env=process.env.NODE_ENV;
let target='';
//默认是本地环境
if(env==='production'){
	target=proEnv.hosturl;
}else if(env==='test'){
	target=uatEnv.hosturl;
}else{
	target=devEnv.hosturl;
}
let proxyObj={};
devProxy.forEach((value,index)=>{
	proxyObj[value]={
		target:target,
		changeOrigin:true,
		pathRewrite:{
			[`^$[value]`]:value
		},
	};
});
console.log(proxyObj);
module.exports={
	publicPath:'./',
	outputDir:'dist',
	devServer:{
		port:8080,
		proxy:proxyObj
	}
}