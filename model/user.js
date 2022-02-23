const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "User is required",
    },

    password:{
        type: String,
        required: "password is required",

    }
},{timestamps: true});

module.exports = mongoose.model('User', postSchema);