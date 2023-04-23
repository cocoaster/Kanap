import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getApartments } from '../service/index.jsx';
import rightArrow from '../assets/Rightarrow.png';
import leftArrow from '../assets/Leftarrow.png';


function Carousel() {
const [apartments, setApartments] = useState([]);
const [slidePosition, setSlidePosition] = useState(0);
const params = useLocation();
const apartment = apartments.find((apartment) => apartment.id === params?.state?.id);
const apartmentPictures = apartment?.pictures || [];

const slideCount = apartmentPictures.length;
const hasPictures = slideCount > 0;

useEffect(() => {
getApartments().then(setApartments);
}, []);

const handlePrevClick = () => {
setSlidePosition(slidePosition === 0 ? slideCount - 1 : slidePosition - 1);
};

const handleNextClick = () => {
setSlidePosition(slidePosition === slideCount - 1 ? 0 : slidePosition + 1);
};

return (
  <div className='carousel-content'>
      <div className='carousel' id='kasa-carousel'>
          <div className='carousel-inner'>
  {hasPictures &&
  apartmentPictures.map((picture, index) => (
              <div
    className={`carousel-item ${slidePosition === index ? 'active' : ''}`}
    key={index}
  >
                  <img
                className='imgCarousel'
                src={picture}
                alt={apartment?.title}
              />
  </div>
  ))}
          </div>
          {hasPictures && (
  <>
          <button
            type='button'
            className='carousel-control-prev'
            onClick={handlePrevClick}
          >
              <img
              src={leftArrow}
              alt='Previous'
              className='carousel-control-icon'
            />
          </button>
          <button
            type='button'
            className='carousel-control-next'
            onClick={handleNextClick}
          >
              <img
              src={rightArrow}
              alt='Next'
              className='carousel-control-icon'
            />
          </button>
          <div className='carousel-counter'>
           {slidePosition + 1}/{slideCount}
          </div>

  </>
)}
      </div>
  </div>
);
}

export default Carousel;