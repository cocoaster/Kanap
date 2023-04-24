import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header.jsx";
import backgound from "../assets/Background.png";
import imgBackgound from "../assets/IMGbackground.png";
import List from "../components/ApartmentsList";
import Footer from "../components/Footer.jsx";
import { getApartments } from "../service/index.jsx";
import { useLocation } from "react-router-dom";

const AppHome = () => {
  const [apartments, setApartments] = useState([]);
  const params = useLocation();

  useEffect(() => {
    // Call the getApartments function and set the state with the result
    getApartments().then(setApartments);
  }, []);

  return (
    <>
      <AppHeader />

      <div id="homeContent">
        <div className="banner">
          <img className="background" src={backgound} alt="background" />
          <img
            className="background imgBackground"
            src={imgBackgound}
            alt="landscape"
          />
          <p id="bannerTxt">Chez vous, partout et ailleurs</p>
          <div id="mobileQuoteVersion">
            <p className="mobileQuoteVersionP p1">Chez vous,</p>
            <p className="mobileQuoteVersionP p2">partout et ailleurs</p>
          </div>
        </div>
        <List
          apartments={apartments}
          selectedApartmentId={params?.state?.id}
          setSelectedApartmentId={(id) => {
            // Pass a callback function to update the selected apartment ID
            params?.setState({ id: id });
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default AppHome;
