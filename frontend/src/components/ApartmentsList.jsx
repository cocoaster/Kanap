import React from "react";
import { Link } from "react-router-dom";

export default function List({ apartments, selectedApartmentId }) {
  const apartment = apartments.find(
    (apartment) => apartment.id === selectedApartmentId
  );

  return (
    <div className="cardContainer">
      {/* Boucle à travers les données pour afficher chaque appartement */}
      {apartments.map((apartment) => {
        const title = apartment?.title.split(" ").join("-");
        return (
          <div key={apartment?.id} className="apartCard">
            <Link
              to={`/Apartment/${title}`}
              state={{ id: apartment?.id }}
              className="card-image"
              style={{
                backgroundImage: `url(${apartment?.cover})`,
              }}
            >
              <h3 className="card-title">{apartment?.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
