import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header.jsx";
import homeBackground from "../assets/homeBackground.png";
import { useParams } from "react-router-dom";
import List from "../components/ApartmentsList";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import apartmentsData from "../data/logements.json"
const AppHome = () => {
    const [apartmentsList, setApartmentsList] = useState([]);

    useEffect(() => {
        setApartmentsList(apartmentsData);
    }, []);

    const params = useParams();

    return (
        <>
            <AppHeader />
            <div id="bannerContent">
                <Banner
                    image={homeBackground}
                    alt="landscape"
                    className="bannerHome"
                ></Banner>
                <div className="quoteBanner">
                    <p className="desktopQuoteVersion">
                        {" "}
                        Chez vous, partout et ailleurs
                    </p>
                    <div id="mobileQuoteVersion">
                        <p className="mobileQuoteVersionP p1">Chez vous,</p>
                        <p className="mobileQuoteVersionP p2">
                            partout et ailleurs
                        </p>
                    </div>
                </div>
            </div>
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
