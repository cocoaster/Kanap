import { useRouteError } from "react-router-dom";
import AppHeader from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
  return (
    <>
              <AppHeader />

      <div >
        <div id="error-page">
        <h1 id="errorNumber">404</h1>
          <p id="errorTxt">Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">
            <p id="homeBack">Retourner sur la page d'accueil</p>
            </a>
        </div>

      </div>
      <Footer />

      </>
    );
  }