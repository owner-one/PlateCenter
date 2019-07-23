var mongoose=require('mongoose');
var url='mongodb://localhost/fashionServer';
mongoose.connect(url);

module.exports=mongoose;
