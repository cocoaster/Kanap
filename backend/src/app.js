const express = require('express');
const cors = require('cors');
const path = require('path');
const apartmentRoutes = require('./route/apartment.js');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(cors());

app.use(express.json());

// const public_path = path.join(__dirname, '../build');
// app.use(express.static(public_path));
// app.get("*", (_, res) => {
//     res.sendFile(path.join(public_path, 'index.html'));
// })






app.use('/api/apartments', apartmentRoutes);

module.exports = app;
