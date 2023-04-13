import logo from '../assets/LOGO_text.svg'
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";


function AppHeader() {
    return (
        <>
        <div id='header'>
            <img src={logo} alt='Logo kasa' id='logo' />
            <nav id="navigation">
                <ul id="navUl">
                <li><NavLink className="homeNav" to="/">Accueil</NavLink></li>
                <li><NavLink className="aboutNav" to="/A_Propos">A propos</NavLink></li>
               
            </ul>
            </nav>
            </div>
            <div id="detail">
        <Outlet />
      </div>
        </> 
    );
}
export default AppHeader;