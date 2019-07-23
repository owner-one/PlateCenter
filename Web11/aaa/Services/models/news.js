var mongoose=require('../common/db');
var news=new mongoose.Schema({
	newsTitle:String,
	newsTime:String,
	newsImg:String
})

news.statics.findAll=function(callBack){
	this.find({},callBack);
}
news.statics.findById=function(id,callBack){
	this.findOne({_id:id},callBack);
}

var newsModel=mongoose.model('news',news);
module.exports=newsModel;
