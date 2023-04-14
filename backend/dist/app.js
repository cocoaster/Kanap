"use strict";

var express = require('express');
var cors = require('cors');
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var apartmentRoutes = require('./route/apartment.js');
var app = express();
dotenv.config();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
var uri = process.env.STRING_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Connexion à MongoDB réussie !");
});
app.use('/images', express["static"]('images'));
app.use('/api/apartments', apartmentRoutes);
module.exports = app;