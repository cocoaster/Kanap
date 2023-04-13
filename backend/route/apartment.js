const express = require('express');
const router = express.Router();

const apartmentCtrl = require('../controller/apartment.js');

router.get('/', apartmentCtrl.getAllApartments);

router.get('/:id', apartmentCtrl.getOneApartment);


module.exports = router;
