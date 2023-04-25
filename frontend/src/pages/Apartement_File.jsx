import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Navigate } from "react-router-dom";
import { getApartments } from "../service/index.jsx";
import apartments from "../data/logements.json"
import AppHeader from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import Accordion from "../components/Accordion.jsx";

function ApartmentCard() {
  // State to store the list of apartments
//   const [apartments, setApartments] = useState([]);

  // Retrieve the id of the selected apartment from the location object provided by the router
  const location = useLocation();
  const params = useParams();

  // Find the apartment in the list based on the id
  const apartment = apartments.find(
    (apartment) => apartment?.id === params?.id
  );

//   useEffect(() => {
//     getApartments().then(setApartments);
//   }, []);
    //     const navigate = useNavigate();
    // if(!apartment/*some condition*/){
    //     navigate("/Error404");
    // }
    
    // useEffect(() => {
    //   if (!apartments/* invalid route params */) {
    //     navigate("/Error404", { replace: true });
    //   }
    // }, [!apartment]);

  // Fetch the list of apartments from the API when the component mounts


  // State to store the active accordion indexes
  const [activeAccordionIndexes, setActiveAccordionIndexes] = useState([]);

  // Function to toggle the state of an accordion
  const toggleAccordion = (index) => {
    if (activeAccordionIndexes.includes(index)) {
      setActiveAccordionIndexes(
        activeAccordionIndexes.filter((i) => i !== index)
      );
    } else {
      setActiveAccordionIndexes([...activeAccordionIndexes, index]);
    }
  };
    const items = [
        {
          id: "apartAccordion1",
          title: "Description",
          content: (
            
              <p className="accordionTextApart">{apartment?.description}</p>
           
          ),
        },
        {
          id: "apartAccordion2",
          title: "Equipements",
          content: (
            
              <ul className="apartAccordion2">
                {apartment?.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            
          ),
        },
      ];
    return (
        <>
            {
                apartment ? (
                    <div className="apartmentContent">
            <AppHeader />
            <Carousel apartments={apartments} selectedApartmentId={params.id} />

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
                        <img
                            src={apartment?.host.picture}
                            alt="photo de l'hôte"
                        />
                    </div>
                    <div className="rating">
                        {Array.from({ length: 5 }, (_, i) => {
                            const starColor =
                                i < apartment?.rating ? "#ff6060" : "#e3e3e3";
                            return (
                                <span key={i} style={{ color: starColor }}>
                                    ★
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>

           
            <div className="bottom">
            <Accordion items={items} className="ApartmentCard" />

            
                </div>

                        <Footer />
                        </div>
            ) : <Navigate replace to="/Error404" />
            }
        </>
    );
}

export default ApartmentCard;
