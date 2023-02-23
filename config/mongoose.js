const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connection on mongodv"));

db.once('open',function(){
    console.log('connect to database :: mongobd');
});


module.exports = db;