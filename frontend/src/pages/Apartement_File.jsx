import React, { useEffect, useState} from 'react' ;
import { useLocation } from "react-router-dom";
import { getApartments } from '../service/index.jsx';
import rightArrow from '../assets/RightArrow.png';
import leftArrow from '../assets/LeftArrow.png';



import AppHeader from '../components/Header.jsx';

import Footer from '../components/Footer.jsx';



function ApartmentCard() {

  const [apartments, setApartments] = useState([]);
  const params = useLocation();
  const apartment = apartments.find(apartment => apartment.id === params?.state?.id);

   useEffect(() => {
    getApartments().then(setApartments )
  }, [])
  // Constante contenant les images du carousel
 // Constante contenant les images du carousel
const apartmentPictures = apartment?.pictures?.map((picture, index) => (
  <img className='imgCarousel d-block w-100' key={index} src={picture} alt={apartment?.title}  />
));

// Vérification si apartmentPictures est défini
const hasPictures = !!apartmentPictures && apartmentPictures.length > 0;

// Récupération de la position de la slide active
const [slidePosition, setSlidePosition] = useState(0);
const slideCount = hasPictures ? apartmentPictures.length : 0;

// Gestion du clic sur le bouton précédent
const handlePrevClick = () => {
  if (slidePosition === 0) {
    setSlidePosition(slideCount - 1);
  } else {
    setSlidePosition(slidePosition - 1);
  }
};

// Gestion du clic sur le bouton suivant
const handleNextClick = () => {
  if (slidePosition === slideCount - 1) {
    setSlidePosition(0);
  } else {
    setSlidePosition(slidePosition + 1);
  }
};

return (
  <>
    <AppHeader />

    <div className='carousel-content'>
      <div className="carousel slide" data-bs-ride="carousel" id='kasa-carousel'>
        <div className="carousel-inner">
          {/* Ajout de la classe "active" uniquement à la première div contenant la première image */}
          {hasPictures && (
            <div className={`carousel-item${slidePosition === 0 ? " active" : ""}`}>
              {apartmentPictures[0]}
            </div>
          )}
          {hasPictures && apartmentPictures.slice(1).map((picture, index) => (
            <div className={`carousel-item${slidePosition === index + 1 ? " active" : ""}`} key={index}>
              {picture}
            </div>
          ))}
        </div>
        <button type='button' className="carousel-control-next" data-bs-slide="next" onClick={handleNextClick} data-bs-target="#kasa-carousel" >
          <span className='carousel-control-next-icon'></span>
        </button>
        <button type="button" className="carousel-control-prev" data-bs-slide="prev" onClick={handlePrevClick} data-bs-target="#kasa-carousel "  >
          <span className='carousel-control-prev-icon'></span>
        </button>

        <div className="carousel-counter">
          {slideCount > 0 ? `${slidePosition + 1}/${slideCount}` : ""}
        </div>
      </div>
    </div>
      
        <div className="mediumSection">
          <div className="leftMediumSection">
            <h1>{apartment?.title} </h1>
            <h2 className="subtitleList">{apartment?.location} </h2>
            <ul className="tagList">
              {apartment?.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="rightMediumSection">
            <div className="hostContent">
              <cite>{apartment?.host.name} </cite>
              <img src={apartment?.host.picture} alt="photo de l'hôte" />
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => {
                const starColor = i < apartment?.rating ? "orange" : "gray";
                return <span key={i} style={{ color: starColor }}>★</span>;
              })}
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="leftBottomSection">
            <h3 className="descriptionTitle">Description</h3>
            <p className="descriptionTxt">{apartment?.description} </p>
          </div>
          <div className="rightBottomSection">
            <h3 className="descriptionTitle">Equipements</h3>
            <ul className="equipmentList">
              {apartment?.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      
      <Footer />

    </>
  );
}

export default ApartmentCard;
