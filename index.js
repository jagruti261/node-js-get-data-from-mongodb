const express = require('express')
const index = express();
const mongoose = require('mongoose');
const New_user = require('./new-user');
mongoose.connect('mongodb+srv://new-user:NyfVs0A5ReE7VJRV@cluster0.2zo0v.mongodb.net/new-user?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

New_user.find({}, function(err, new_user) {
    if (err) console.log(err);
    console.log("output");
    console.log(new_user);

})