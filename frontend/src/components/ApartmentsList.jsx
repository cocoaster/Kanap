import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getApartments } from '../service/index.jsx';

export default function List() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments().then(setApartments);
  }, []);

  // Calculer le nombre d'éléments dans la dernière ligne
  const lastRowLength = apartments.length % 3 || 3;

  return (
    <div className="main-container">
      <div className="cardContainer row gx-6" style={{ flexWrap: 'wrap' }}>
        {/* Boucle à travers les données pour afficher chaque appartement */}
        {apartments.map((apartment, index) => {
          const title = apartment?.title.split(' ').join('-');
          return (
            <div key={apartment?.id} className="col-md-4 col-sm-12">
              <div className="apartCard">
                <Link
                  to={`/Apartment/${title}`}
                  state={{ id: apartment?.id }}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="card-image" style={{ backgroundImage: `url(${apartment?.cover})` }}>
                    <h3 className="card-title">{apartment?.title}</h3>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
        {/* Ajouter des éléments vides pour remplir la dernière ligne */}
        {Array.from({ length: lastRowLength }).map((_, index) => (
          <div key={`empty-${index}`} style={{ flex: '1 0 0' }} />
        ))}
      </div>
    </div>
  );
}
