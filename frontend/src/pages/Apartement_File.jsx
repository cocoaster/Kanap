import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import data from "../data.js";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-right arrow arrow-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-left arrow arrow-left"></i>
    </div>
  );
};

function ApartmentCard() {
  const params = useLocation();
  const apartment = data.find(apartment => apartment.id === params?.state?.id);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          nextArrow: <NextArrow className="slick-next slick-arrow-right" />,
          prevArrow: <PrevArrow className="slick-prev slick-arrow-left" />,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src={apartment?.cover} alt={apartment?.title} />
          </div>
          {apartment?.pictures.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt={apartment?.title} />
            </div>
          ))}
        </Slider>
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
      </div>
    </>
  );
}

export default ApartmentCard;
