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
  // constante contenant les images du carousel
  const apartmentPictures = apartment?.pictures.map((picture, index) => (
    <img className='imgCarousel' key={index} src={picture} alt={apartment?.title} style={{ width: '100%' }} />
  ));
  console.log(apartmentPictures);
  const [slidePosition, setSlidePosition] = useState(0);
  const slideCount = apartment?.pictures.length;

  const handlePrevClick = () => {
    if (slidePosition === 0) {
      setSlidePosition(slideCount - 1);
    } else {
      setSlidePosition(slidePosition - 1);
    }
  };

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

      <div>
      <div id="carousel">
  <div className="carousel-slide" style={{ transform: `translateX(-${slidePosition * 100}%)` }}>
    {apartmentPictures}
          </div>
          
          
          
  <div className="carousel-counter">
    {slidePosition + 1}/{slideCount}
  </div>
  <button className="carousel-prev" onClick={handlePrevClick}>
    <img className='arrow leftArrow' src={leftArrow} alt="Previous" />
  </button>
  <button className="carousel-next" onClick={handleNextClick}>
    <img className='arrow rightArrow' src={rightArrow} alt="Next" />
  </button>
</div>
      {/* <Carousel >
    
            {apartment?.pictures.map((picture, index) => (
              <div id="carouselBackground" key={index} >
              <img className='imgCarousel' src={picture} alt={apartment?.title} /> </div>))}
          
          </Carousel> */}
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
