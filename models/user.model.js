const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: {type: String},
    profile: {},
    picture: {type: String},
    displayName: {type: String},
    role: {type: String, default: "user", enum: ["admin", "user", "editor"]}
});

module.exports = mongoose.model("User", userSchema);