const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/information', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {

});

exports.createInfo  = (input) => {
    input.save(() => {

    })
}