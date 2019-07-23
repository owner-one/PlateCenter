var express = require('express');
var router = express.Router();
var user = require('../models/user');
var crypto = require('crypto');
const init_token = 'TKL02o';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 1代表success,0代表fail */
/* 登录 */ 
router.post('/login', function(req, res, next) {
  if(!req.body.username){
  	res.json({status:0,message:'用户名不能为空'});
  }
  if(!req.body.password){
  	res.json({status:0,message:'密码不能为空'});
  }
  
  user.findUserLogin(req.body.username,req.body.password,function(err,userLogin){
  	if(userLogin.length!=0){
  		var token_after = getMD5Password(userLogin[0]._id);
  		res.json({status: 1, data: {token: token_after,user:userLogin}, message: "登录成功"})
  	}else{
  		res.json({status:0,message:'用户名或密码错误'});
  	}
  })
});
/* 注册 */ 
router.post('/register', function(req, res, next) {
  if(!req.body.username){
  	res.json({status:0,message:'用户名不能为空'});
  }
  if(!req.body.password){
  	res.json({status:0,message:'密码不能为空'});
  }
  
  user.findUserName(req.body.username,function(err,userCheck){
  	if(userCheck.length!=0){
  		res.json({status:0,message:'该用户已注册'});
  	}else{
  		var userRegister=new user({
  			username:req.body.username,
  			password:req.body.password
  		})
  		
  		userRegister.save(function(){
  			res.json({status:1,message:'注册成功'});
  		})
  	}
  })
});

/* 获取md5值 */
function getMD5Password(id) {
    var md5 = crypto.createHash('md5');
    var token_before = id + init_token
    return md5.update(token_before).digest('hex')
}

module.exports = router;
