import React, { useEffect, useState} from 'react' ;
import { useLocation } from "react-router-dom";
import { getApartments } from '../service/index.jsx';


function Carousel() {

  const [apartments, setApartments] = useState([]);
  const params = useLocation();
  const apartment = apartments.find(apartment => apartment.id === params?.state?.id);

  useEffect(() => {
    getApartments().then(setApartments)
  }, [])
  
  // Constante contenant les images du carousel
  const apartmentPictures = apartment?.pictures?.map((picture, index) => (
    <img className='imgCarousel d-block w-100' key={index} src={picture} alt={apartment?.title} />
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
     <div className='carousel-content'>
      <div className="carousel slide" data-bs-ride="carousel" id='kasa-carousel'>
          <div className="carousel-inner">
            
          {/* //Ajout de la classe "active" uniquement à la première div contenant la première image  */}
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
          <span className='carousel-control-next-icon .btn .btn-lg'></span>
        </button>
        <button type="button" className="carousel-control-prev" data-bs-slide="prev" onClick={handlePrevClick} data-bs-target="#kasa-carousel "  >
          <span className='carousel-control-prev-icon fa-4x '></span>
        </button>

        <div className="carousel-counter">
          {slideCount > 0 ? `${slidePosition + 1}/${slideCount}` : ""}
        </div>
      </div>
    </div>
       

   </>
  );
}
 export default Carousel