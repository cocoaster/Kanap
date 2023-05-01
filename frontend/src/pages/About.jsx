import React, { useEffect, useState } from "react";
import AppHeader from "../components/Header.jsx";
import aboutBackground from "../assets/aboutBackground.png";
import aboutBackground2 from "../assets/aboutBackground2.png";

import Footer from "../components/Footer.jsx";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";

const About = () => {
  const items = [
    {
      title: "Fiabilité",
      content: (
        <p className="sectionText">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      ),
    },
    {
      title: "Respect",
      content: (
        <p className="sectionText">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout

          comportement discriminatoire ou de perturbation du voisinage entrainera
          une exclusion de notre plateforme.

        </p>
      ),
    },
    {
      title: "Service",
      content: (
        <p className="sectionText">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      ),
    },
    {
      title: "Sécurité",
      content: (
        <p className="sectionText">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que

          pour les voyageurs, chaque logement correspond aux critères de sécurité
          établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont
          bien respectés. Nous organisons également des ateliers sur la sécurité
          domestique pour nos hôtes.

        </p>
      ),
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main>

      <AppHeader />
      <Banner
        image={isMobile ? aboutBackground2 : aboutBackground}
        alt="landscape"
        className={isMobile ? "bannerMobileAbout" : "bannerDesktopAbout"}
      />


      <div id="aboutContent">
        <div className="AccordionContentAbout">
          <Accordion items={items} className="About" />
        </div>
        </div>
        </main>
      <Footer />
    </>
  );
};

export default About
