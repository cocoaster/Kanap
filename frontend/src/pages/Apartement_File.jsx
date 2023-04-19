import React, { useEffect, useState} from 'react' ;
import { useLocation } from "react-router-dom";
import { getApartments } from '../service/index.jsx';
import AppHeader from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';
function ApartmentCard() {

  const [apartments, setApartments] = useState([]);
  const params = useLocation();
  const apartment = apartments.find(apartment => apartment.id === params?.state?.id);

   useEffect(() => {
    getApartments().then(setApartments )
   }, [])
  
 // Constante contenant les images du carousel
const apartmentPictures = apartment?.pictures?.map((picture, index) => (
  <img className='imgCarousel d-block w-100' key={index} src={picture} alt={apartment?.title}  />
));

// Vérification si apartmentPictures est défini
const hasPictures = !!apartmentPictures && apartmentPictures.length > 0;


  // variable séparant les noms et prénoms des hôtes
return (
  <>
    <AppHeader />
    <Carousel /> 
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
            <div className="hostName">
              <p>{apartment?.host.name.split(" ")[0]}</p>
              <p>{apartment?.host.name.split(" ")[1]}</p>
            </div>
            <img src={apartment?.host.picture} alt="photo de l'hôte" />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => {
              const starColor = i < apartment?.rating ? "#ff6060" : "#                 e3e3e3";
              return <span key={i} style={{ color: starColor }}>★</span>;
            })}
          </div>
        </div>
    </div>
    
    <div className=" bottom">
        <div className="accordion   " id='apartAccordion1'>
            <div className="accordion-item apartAccordionItem1 rounded-3">
                <h3 className="accordion-header">
                <button type="button" className="accordion-button rounded-3 " data-bs-toggle="collapse" data-bs-target="#description" >Description
                </button>
                </h3>
              <section className="accordion-body collapse rounded" id="description" data-bs-parent="#apartAccordion1">{apartment?.description}
              </section>
            </div>
        </div>
        <div className="accordion " id='apartAccordion2'>
            <div className="accordion-item apartAccordionItem2 rounded-3">
                <h3 className="accordion-header">
                    <button type="button" className="accordion-button rounded-3" data-bs-toggle="collapse" data-bs-target="#equipments" >Equipements
                    </button>
                </h3>
                <section className="accordion-body collapse rounded" id="equipments" data-bs-parent="#apartAccordion2">
                    <ul className="apartAccordion2">
                      {apartment?.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                      ))}
                    </ul>
                </section>
            </div>
        </div>  
    </div>
      
    <Footer />
  </>
  );
}

export default ApartmentCard;
