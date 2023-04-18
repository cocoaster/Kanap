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
        <div className="accordion" id="accordionAbout">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button type="button " className="accordion-button btn-warning collapsed --bs-danger-rgb" data-bs-toggle="collapse" data-bs-target="#fiability"  >Fiabilité</button></h2>
            <section className="accordion-body collapse" data-bs-parent="#accordionAbout" id="fiability">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam egestas viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac eros vehicula, elementum nisi vitae, pretium elit. Etiam hendrerit auctor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue auctor tellus. Integer. </section> 
          </div>
        
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button type="button " className="accordion-button btn-warning " data-bs-toggle="collapse" data-bs-target="#respect"  >Respect</button></h2>
            <section className="accordion-body collapse show" data-bs-parent="#accordionAbout"  id="respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme. </section> 
          </div>
        
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button type="button " className="accordion-button btn-warning collapsed" data-bs-toggle="collapse"  data-bs-target="#service" >Service</button></h2>
            <section className="accordion-body collapse" data-bs-parent="#accordionAbout"  id="service">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam egestas viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac eros vehicula, elementum nisi vitae, pretium elit. Etiam hendrerit auctor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue auctor tellus. Integer. </section> 
          </div>
       
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button type="button " className="accordion-button  collapsed" data-bs-toggle="collapse" data-bs-target="#security"  >Sécurité</button></h2>
            <section className="accordion-body collapse" data-bs-parent="#accordionAbout"  id="security">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam egestas viverra vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac eros vehicula, elementum nisi vitae, pretium elit. Etiam hendrerit auctor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque congue auctor tellus. Integer. </section> 
          </div>
        </div>
       
      </div>
      <Footer />

      </>
  );
};

export default About;
