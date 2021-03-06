const mongoose = require ('mongoose')

const infoSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String
})

const Info = mongoose.model ('Info', infoSchema);

exports.createInfo = (first, last, email, phone) => {
    var info = new Info({
        firstname: first,
        lastname: last,
        email: email,
        phone: phone
    })
    return info;
}

exports.GetAllInfo = async() => {
    var info = await Info.find({});
    return info;
}