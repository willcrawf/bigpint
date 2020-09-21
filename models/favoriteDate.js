const mongoose = require("mongoose");
const Schema = mongoose.Schema

const favoriteDateSchema = new Schema({
   favDate: {type: Date, required: true, default: ['09/20/2020'].toLocaleDateString()},
   
 })

 module.exports = mongoose.model('FavoriteDate', favoriteDateSchema)