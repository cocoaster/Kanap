import { useParams, Navigate } from "react-router-dom";
import apartments from "../data/logements.json";
import AppHeader from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import Accordion from "../components/Accordion.jsx";
import Rating from "../components/Rating";
import TagList from "../components/Tag";




function ApartmentCard() {
  // Retrieve the id of the selected apartment from the location object provided by the router
  const params = useParams();

  // Find the apartment in the list based on the id
  const apartment = apartments.find(
    (apartment) => apartment?.id === params?.id
  );

  const items = [
    {
      id: "apartAccordion1",
      title: "Description",
      content: <p className="accordionTextApart">{apartment?.description}</p>,
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
      {apartment ? (
        <div className="apartmentContent">
          <AppHeader />
          <Carousel apartments={apartments} selectedApartmentId={params.id} />

          <div className="mediumSection">
            <div className="leftMediumSection">
              <h1>{apartment?.title} </h1>
              <h2 className="subtitleList">{apartment?.location} </h2>
              <TagList tags={apartment?.tags} />

            </div>
            <div className="rightMediumSection">
              <div className="hostContent">
                <div className="hostName">
                  <p>{apartment?.host.name.split(" ")[0]}</p>
                  <p>{apartment?.host.name.split(" ")[1]}</p>
                </div>

                <img className="hostFoto" src={apartment?.host.picture} alt="photo de l'hôte" />

              </div>
              <div className="starsContainer">
                <Rating rating={apartment?.rating} />
              </div>
            </div>
          </div>

          <div className="bottom">
            <Accordion items={items} className="ApartmentCard" />
          </div>

          <Footer />
        </div>
      ) : (
        <Navigate replace to="/Error404" />
      )}
    </>
  );
}

export default ApartmentCard;
