const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path');
const apartmentRoutes = require('./route/apartment.js');


const app = express();
dotenv.config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// const public_path = path.join(__dirname, '../build');
// app.use(express.static(public_path));
// app.get("*", (_, res) => {
//     res.sendFile(path.join(public_path, 'index.html'));
// })

const uri = process.env.STRING_URI;

mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connexion à MongoDB réussie !"))
app.use('/images', express.static('images'));



app.use('/api/apartments', apartmentRoutes);

module.exports = app;
