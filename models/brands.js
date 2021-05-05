const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Schema Set Up
const brandSchema = new Schema({
    name: String,
    username: String, 
    password: String, 
    socials: [String],
    typography: [String],
    colors: [String],
    brandValues: [String],
    logoImage: String,
    moodboardImage: String,
    notesEntry: [String],
});

//Collection name
const brandData = mongoose.model('brandData', brandSchema);

//make this exportable to be accessed in `app.js`
module.exports = brandData;
