const mongoose = require('mongoose');
const {Schema} = mongoose;
//Creating a schema model for category information to POST to the database
const categorySchema = new Schema({
    name:{type:String},
    description:{type:String},
},{timestamps: {createdAt: 'createdAt'}});

module.exports = mongoose.model('Category', categorySchema);//Exporting the model to be available to routes