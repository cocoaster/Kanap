import React, { useState, useEffect } from 'react';
import { getApartments } from '../service/index.jsx';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';


export default function Carousel({ pictures }) {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        {pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt="" />
          </div>
        ))}
      </Slider>
    );
}
