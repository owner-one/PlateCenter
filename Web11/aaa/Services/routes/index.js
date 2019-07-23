var express = require('express');
var router = express.Router();
var news = require('../models/news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/showNews', function(req, res, next) {
  news.findAll(function(err,getNews){
  	if(getNews.length!=0){
  		res.json({status:1,message:'获取新闻',data:getNews})
  	}else{
  		res.json({status:0,message:'获取新闻失败'});
  	}
  })
});

module.exports = router;
