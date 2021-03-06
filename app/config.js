var mongoose = require('mongoose');
mongoURI = 'mongodb://localhost/shortlydb';
//mongoURI = 'mongodb://admin:admin@ds025782.mlab.com:25782/novi-bootcamp';
mongoose.connect(process.env.MONGOLAB_URI || mongoURI);

// Keep "mongod" process running on another terminal

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function(){
  console.log('MongoDB connection open');
});


module.exports = db;
