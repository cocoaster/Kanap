import React, { useState } from "react";
import AppHeader from "../components/Header.jsx";
import backgound from "../assets/Background.png";
import imgBackground from "../assets/IMGbackground2.png";
import Footer from "../components/Footer.jsx";
import  DownArrow  from "../assets/DownArrow.png";
import  UpArrow  from "../assets/UpArrow.png";

const About = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
  };
  
  return (
    <>
      <AppHeader />

      <div id="aboutContent" style={{ height: "80vh", overflowY: "scroll" }}>
        <div id="banner">
          <img className="background" src={backgound} alt="background" />
          <img className="background imgBackground" src={imgBackground} alt="landscape" />
        </div>

        <div className="accordion" id="accordionAbout">
          {["Fiabilité", "Respect", "Service", "Sécurité"].map((title, index) => (
            <div className="accordionAbout-item" key={index}>
              <h2 className="accordion-header">
                <button
                  type="button"
                  className="accordionAbout-button"
                  onClick={() => toggleAccordion(index)}
                >
                  {title}
                  {activeAccordionIndex === index ? (
    <img src={UpArrow} alt="arrow-down" className="arrows active" />
  ) : (
    <img src={DownArrow} alt="arrow-up" className="arrows active" />
  )}
                </button>
              </h2>
              <section
                className={
                  "accordion-body collapse" +
                  (activeAccordionIndex === index ? " show" : "")
                }
                id={`about-${title.toLowerCase()}`}
              >
                {title === "Respect" && (
                  <p className="sectionText">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
                  </p>
                )}
                {title !== "Respect" && (
                  <p className="sectionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut lacinia vulputate imperdiet. Nullam nec lacus diam.
                    Nullam egestas viverra vehicula. Interdum et malesuada fames
                    ac ante ipsum primis in faucibus. Morbi ac eros vehicula,
                    elementum nisi vitae, pretium elit. Etiam hendrerit auctor
                    volutpat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Quisque congue
                    auctor tellus. Integer.
                  </p>
                )}
              </section>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
