import { useRouteError } from "react-router-dom";
import AppHeader from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
  return (
    <>
      <AppHeader />
      {/* <Carousel /> */}
      

      <div >
        <div id="error-page">
        <h1 id="errorNumber">404</h1>
          <p id="errorTxt">Oups! La page que vous demandez n'existe pas.</p>
          <div id="mobileErrorTxtVersion">
                      <p className="mobileErrorTxtVersionP pError1">Oups! La page que</p>
                      <p className="mobileErrorTxtVersionP pError2">vous demandez n'existe pas.</p>
                    </div>
          <a href="/">
            <p id="homeBack">Retourner sur la page d'accueil</p>
            
            </a>
        </div>

      </div>
      <Footer />

      </>
    );
  }