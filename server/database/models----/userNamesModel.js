var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var userNamesSchema = new Schema({
name: String 
}, { collection: 'user-names-data' });
var userNamesData = mongoose.model('userNamesSchema', userNamesSchema);


module.exports = userNamesData;