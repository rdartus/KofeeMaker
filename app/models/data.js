//Dependencies
var mongoose = require('mongoose');
var returned= mongoose.model;
//Schema
var data_schema = new mongoose.Schema(
{
	button1Pushed:Boolean,
    button2Pushed:Boolean,
	processTime:Number,
	date:Date
}
);



returned = mongoose.model('data',data_schema);

module.exports = returned;
