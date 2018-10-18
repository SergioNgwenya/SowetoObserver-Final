const mongoose = require('mongoose');
const {Schema} = mongoose;

const videoSchema = new Schema({
  title: { type: String },
  category: {type: String},
  video: { type: String },
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model("Video", videoSchema);