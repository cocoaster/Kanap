const apartments = require('../models/Apartment');

exports.getAllApartments = (req, res, next) => {
  apartments.find().
    then(
    (apartments) =>
    {
      const mappedApartments = apartments.map((apartment) => {
        apartment.id = req.protocol + '://' + req.get('host') + "/apartments/" + apartment.id;
        return apartment;
      });
      res.status(200).json(apartments)
    }
  ).catch(
    (error) => 
      res.status(400).send({ error }));
    
  
};

exports.getOneApartment = (req, res, next) => {
  apartments.findById(req.params.id)
    .then((apartment) => {
  // .catch((error) => res.status(404).json({error}))
    
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
