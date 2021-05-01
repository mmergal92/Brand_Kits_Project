const mongoose = require('mongoose');

//Schema Set Up
const brandSchema = new mongoose.Schema({
    Name_Of_Company: { type: String, required: true},
    Contributor_Username: {type: String, required: true},
    Contributor_Password: {type: String, required: true},
    Social_Media_Links: {
        Instagram: String,
        Twitter: String,
    },
    Typography: {
        Header_Font: String,
        Body_Font: String,
    },
    Colors: [String],
    Brand_values: [String],
    Logo_Image: String,
    Moodboard_Image: String,
    Notes_Entry: [String],
}, {timestamps: true});

//Collection name
const brandData = mongoose.model('brandData', brandSchema);

//make this exportable to be accessed in `app.js`
module.exports = brandData;
