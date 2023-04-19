import React from "react";
import AppHeader from '../components/Header.jsx';
import backgound from "../assets/Background.png"
import imgBackgound from "../assets/IMGbackground.png"
import List from '../components/ApartmentsList'
import Footer from "../components/Footer.jsx";


const AppHome = () => {
  return (
    <>
      <AppHeader />

      < div id="homeContent" >
        <div>
            </div>
                <div id="banner">
                    <img className="background" src={backgound} alt="background" />
                    <img className="background imgBackground" src={imgBackgound} alt="landscape" />
                    <p id="bannerTxt">Chez vous, partout et ailleurs</p>
                    <div id="mobileQuoteVersion">
                      <p className="mobileQuoteVersionP p1">Chez vous,</p>
                      <p className="mobileQuoteVersionP p2">partout et ailleurs</p>
                    </div>
          
                </div >
            <div id="listContent">
            <List/>
        </div>
       
      </div>
      <Footer />
      </>
  );
};

export default AppHome;
