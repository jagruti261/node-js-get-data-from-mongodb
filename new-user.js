const mongoose = require('mongoose');
var userschema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String
}, { collection: 'nodejs' });
module.exports = mongoose.model('user', userschema);