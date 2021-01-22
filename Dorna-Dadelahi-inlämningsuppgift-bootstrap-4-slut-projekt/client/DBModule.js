const mongoose = require ('mongoose');
mongoose.mongo.connect('mongodb: // localhost/information', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.bind(console, 'connection error:'));
db.on('open', function() {

});

exports.createInfo  = (input) => {
    input.save(() => {

    });
}