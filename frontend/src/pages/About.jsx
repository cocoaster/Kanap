import React from "react";
import AppHeader from "../components/Header.jsx";
import backgound from "../assets/Background.png"
import imgBackgound2 from "../assets/IMGbackground2.png"

const About = () => {
  return (
    <>
            <AppHeader />

    <div id="homeContent" >
      <div id="banner">
      <img className="background" src={backgound} alt="background" />
        <img className="background imgBackground" src={imgBackgound2} alt="landscape" />
      </div>
      </div>
      </>
  );
};

export default About;
