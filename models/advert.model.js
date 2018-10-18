const mongoose = require('mongoose');
const { Schema } = mongoose;
//Creating a schema model for user information to POST to the database
const advertSchema = new Schema({
    title: { type: String },
    picture:{ type: String},
    url: { type: String},
    // isDraft: { type: Boolean, default: true }, //Critical
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('Advert', advertSchema);//Exporting the model to be available to routes