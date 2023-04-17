import React from "react";
import AppHeader from "../components/Header.jsx";
import backgound from "../assets/Background.png"
import imgBackgound2 from "../assets/IMGbackground2.png"
import Footer from "../components/Footer.jsx";
  

const About = () => {
  return (
    <>
            <AppHeader />

    <div id="homeContent" >
      <div id="banner">
      <img className="background" src={backgound} alt="background" />
        <img className="background imgBackground" src={imgBackgound2} alt="landscape" />
        </div>
        <button type="button " data-bs-toggle="collapse" data-bs-target="#fiability"  >Fiabilité</button>
       <div className="collapse " id="fiability">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam egestas viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac eros vehicula, elementum nisi vitae, pretium elit. Etiam hendrerit auctor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue auctor tellus. Integer. </div> 
        <button type="button " data-bs-toggle="collapse" data-bs-target="#respect"  >Fiabilité</button>
       <div className="collapse " id="respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. </div> 
        <button type="button " data-bs-toggle="collapse" data-bs-target="#service"  >Fiabilité</button>
       <div className="collapse " id="service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam egestas viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac eros vehicula, elementum nisi vitae, pretium elit. Etiam hendrerit auctor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue auctor tellus. Integer. </div> 
        <button type="button " data-bs-toggle="collapse" data-bs-target="#security"  >Fiabilité</button>
       <div className="collapse " id="security">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam egestas viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac eros vehicula, elementum nisi vitae, pretium elit. Etiam hendrerit auctor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue auctor tellus. Integer. </div> 
      </div>
      <Footer />

      </>
  );
};

export default About;
