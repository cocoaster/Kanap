import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header.jsx";
import background from "../assets/Background.png";
import imgBackground from "../assets/IMGbackground.png";
import List from "../components/ApartmentsList";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import apartmentsData from "../data/logements.json";
import Banner from "../components/Banner.jsx";

const AppHome = () => {
  const [apartmentsList, setApartmentsList] = useState([]);

  useEffect(() => {
    setApartmentsList(apartmentsData);
  }, []);

  const params = useParams();

  return (
    <>
      <AppHeader />
      <Banner
        background={background}
        image={imgBackground}
        alt="landscape"
        className="banner-home"
      >
        <p className="bannerTxt">Chez vous, partout et ailleurs</p>
        <div id="mobileQuoteVersion">
          <p className="mobileQuoteVersionP p1">Chez vous,</p>
          <p className="mobileQuoteVersionP p2">partout et ailleurs</p>
        </div>
      </Banner>
      <div id="homeContent">
        <List
          apartments={apartmentsList}
          selectedApartmentId={params.id}
          setSelectedApartmentId={(id) => {
            // Use the `useParams` hook to update the selected apartment ID
            params.id = id;
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default AppHome;
