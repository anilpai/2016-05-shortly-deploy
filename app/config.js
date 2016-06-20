var mongoose = require('mongoose');
mongoURI = 'mongodb://localhost/shortly';
mongoose.connect(mongoURI);

// Keep "mongod" process running on another terminal

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function(){
  console.log('MongoDB connection open');
});


module.exports = mongoose;
