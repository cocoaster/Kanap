import { createContext, useContext, useMemo, useState } from "react";
import {getApartments} from "../service";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
    const [apartments, setApartments] = useState([]);
    const fetchApartments = () => {
getApartments().then(setApartments)
    }
    const [] = useState([]);
    const value = useMemo(() => {
        return {
            apartments, 
            fetchApartments
        }
    }, [apartments] )
return  <Provider value={{value}} >{children} </Provider>
}

export default AppProvider