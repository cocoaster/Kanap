"use strict";

var apartmentModel = require('../models/Apartment');
exports.getAllApartments = function (req, res, next) {
  apartmentModel.find().then(function (apartments) {
    return (
      // {
      //   const mappedApartments = apartments.map((apartment) => {
      //     apartment.id = req.protocol + '://' + req.get('host') + "/apartments/" + apartment.id;
      //     return apartment;
      //   });
      res.status(200).json(apartments)
    );
  }
  // }
  )["catch"](function (error) {
    return res.status(400).send({
      error: error
    });
  });
};
exports.getOneApartment = function (req, res, next) {
  apartmentModel.findById(req.params.id).then(function (apartment) {
    return res.status(200).json(apartment);
  })["catch"](function (error) {
    return res.status(404).json({
      error: error
    });
  });
  //   (apartment) => {
  //     if (!apartment) {
  //       return res.status(404).send('Apartment not found!');
  //     }
  //     apartment.id = req.protocol + '://' + req.get('host') + '/apartments/'+ apartment.id;
  //     res.status(200).json(apartment);
  //     console.log(apartment.id);
  //   }
  // ).catch(
  //   () => {
  //     res.status(500).send('Database error!');
  //   }
  // )
};