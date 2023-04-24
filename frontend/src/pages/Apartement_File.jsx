import React, { useEffect, useState } from "react";
import { getApartments } from "../service/index.jsx";
import AppHeader from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import DownArrow from "../assets/DownArrow.png";
import UpArrow from "../assets/UpArrow.png";

function ApartmentDetail(props) {
  // Retrieve the id of the selected apartment from the props
  const { selectedApartmentId } = props;
  
  // State to store the list of apartments
  const [apartments, setApartments] = useState([]);
  
  // Find the apartment in the list based on the id
  const apartment = apartments.find(
    (apartment) => apartment.id === selectedApartmentId
  );

  // Fetch the list of apartments from the API when the component mounts
  useEffect(() => {
    getApartments().then(setApartments);
  }, []);

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
  
  return (
    <>
      <AppHeader />
      <Carousel
        apartments={apartments}
        selectedApartmentId={selectedApartmentId}
      />
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
                <div className="accordionApart-item" id="apartAccordion1">
                    <h3 className="accordion-header">
                        <button
                            type="button"
                            className="accordion-button"
                            onClick={() => toggleAccordion(1)}
                        >
                            Description
                            {activeAccordionIndexes.includes(1) ? (
                                <img
                                    src={UpArrow}
                                    className="accordion-icon active"
                                    alt="up-arrow"
                                />
                            ) : (
                                <img
                                    src={DownArrow}
                                    className="accordion-icon active"
                                    alt="down-arrow"
                                />
                            )}
                        </button>
                    </h3>
                    <section
                        className={
                            "accordionSectionApart " +
                            (activeAccordionIndexes.includes(1) ? "show" : "")
                        }
                        id="description"
                    >
                        <p className="accordionTextApart">
                            {apartment?.description}
                        </p>
                    </section>
                </div>
                <div className="accordionApart-item" id="apartAccordion2">
                    <h3 className="accordion-header">
                        <button
                            type="button"
                            className="accordion-button"
                            onClick={() => toggleAccordion(2)}
                        >
                            Equipements
                            {activeAccordionIndexes.includes(2) ? (
                                <img
                                    src={UpArrow}
                                    className="accordion-icon active"
                                    alt="up-arrow"
                                />
                            ) : (
                                <img
                                    src={DownArrow}
                                    className="accordion-icon active"
                                    alt="down-arrow"
                                />
                            )}
                        </button>
                    </h3>
                    <section
                        className={
                            "accordionSectionApart " +
                            (activeAccordionIndexes.includes(2) ? "show" : "")
                        }
                        id="equipments"
                        data-bs-parent="#apartAccordion2"
                    >
                        <ul className="apartAccordion2">
                            {apartment?.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ApartmentCard;
