var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected");
    // we're connected!
});

module.exports=mongoose;