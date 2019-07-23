var mongoose=require('../common/db');
var user=new mongoose.Schema({
	username:String,
	password:String
})

user.statics.findUserLogin=function(name,password,callBack){
	this.find({username:name,password:password},callBack)
}
user.statics.findUserName=function(name,callBack){
	this.find({username:name},callBack)
}

var userModel=mongoose.model('user',user);
module.exports=userModel;
