const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Schema Set Up
const brandSchema = new Schema({
    name: String,
    username: String, 
    password: String, 
});

//Collection name
const brandData = mongoose.model('brandData', brandSchema);

//make this exportable to be accessed in `app.js`
module.exports = brandData;
