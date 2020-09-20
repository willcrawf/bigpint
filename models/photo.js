const mongoose = require("mongoose");
const Schema = mongoose.Schema

const photoSchema = new Schema({
   url: {type: String, required: true},
   date: Date,
   location: String,
 })

 module.exports = mongoose.model('Photo', photoSchema)