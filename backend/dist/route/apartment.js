"use strict";

var express = require('express');
var router = express.Router();
var apartmentCtrl = require('../controller/apartment.js');
router.get('/', apartmentCtrl.getAllApartments);
router.get('/:id', apartmentCtrl.getOneApartment);
module.exports = router;