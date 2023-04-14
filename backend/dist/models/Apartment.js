"use strict";

var mongoose = require("mongoose");
var apartmentSchema = new mongoose.Schema({
  _id: String,
  id: String,
  title: String,
  cover: String,
  pictures: [String],
  description: String,
  host: {
    name: String,
    picture: String,
    isSuperhost: Boolean
  },
  rating: Number,
  location: String,
  equipments: [String],
  tags: [String]
});
module.exports = mongoose.model('Apartments', apartmentSchema);