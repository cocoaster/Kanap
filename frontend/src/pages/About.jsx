import React, { useState } from "react";
import AppHeader from "../components/Header.jsx";
import backgound from "../assets/Background.png";
import imgBackground from "../assets/IMGbackground2.png";
import Footer from "../components/Footer.jsx";
import Accordion from "../components/Accordion";


const About = () => {
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

    // Function to toggle the accordion
    const toggleAccordion = (index) => {
        setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
    };
    const items = [
        {
            title: "Fiabilité",
            content: (
                <p className="sectionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam
                    egestas viverra vehicula. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Morbi ac eros vehicula,
                    elementum nisi vitae, pretium elit. Etiam hendrerit auctor
                    volutpat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Quisque congue
                    auctor tellus. Integer.
                </p>
            ),
        },
        {
            title: "Respect",
            content: (
                <p className="sectionText">
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entrainera une exclusion de notre plateforme.
                </p>
            ),
        },
        {
            title: "Service",
            content: (
                <p className="sectionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam
                    egestas viverra vehicula. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Morbi ac eros vehicula,
                    elementum nisi vitae, pretium elit. Etiam hendrerit auctor
                    volutpat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Quisque congue
                    auctor tellus. Integer.
                </p>
            ),
        },
        {
            title: "Sécurité",
            content: (
                <p className="sectionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacinia vulputate imperdiet. Nullam nec lacus diam. Nullam
                    egestas viverra vehicula. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Morbi ac eros vehicula,
                    elementum nisi vitae, pretium elit. Etiam hendrerit auctor
                    volutpat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Quisque congue
                    auctor tellus. Integer.
                </p>
            ),
        },
    ];
    return (
        <>
            <AppHeader />

            <div id="aboutContent">
                <div className="banner bannerMobile">
                    <img
                        className="background backkgroundAbout"
                        src={backgound}
                        alt="background"
                    />
                    <img
                        className="background imgBackground imgBackgroundAbout"
                        src={imgBackground}
                        alt="landscape"
                    />
                </div>
                <div className = "AccordionContentAbout">
                    <Accordion items={items} className="About" />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
