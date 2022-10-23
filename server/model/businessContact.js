/*
    File name: businessContact.js
    Student name: Yang Xuan
    StudentID: 301186289
    Date: Oct 23, 2022
*/
let mongoose = require('mongoose');
let businessContactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    description: String
},

{
    collection:"businessContacts"
});

module.exports = mongoose.model('businessContact',businessContactModel);