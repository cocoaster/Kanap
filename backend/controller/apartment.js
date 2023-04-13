const apartmentModel = require('../models/Apartment');

exports.getAllApartments = (req, res, next) => {
  apartmentModel.find().then(
    (apartments) => {
      const mappedApartments = apartments.map((apartment) => {
        apartment.id = req.protocol + '://' + req.get('host') + "/apartments/" + apartment.id;
        return apartment;
      });
      res.status(200).json(mappedApartments);
    }
  ).catch(
    () => {
      res.status(500).send('Database error!');
    }
  );
};

exports.getOneApartment = (req, res, next) => {
  apartmentModel.findById(req.params.id).then(
    (apartment) => {
      if (!apartment) {
        return res.status(404).send('Apartment not found!');
      }
      apartment.id = req.protocol + '://' + req.get('host') + '/apartments/'+ apartment.id;
      res.status(200).json(apartment);
      console.log(apartment.id);
    }
  ).catch(
    () => {
      res.status(500).send('Database error!');
    }
  )
};
