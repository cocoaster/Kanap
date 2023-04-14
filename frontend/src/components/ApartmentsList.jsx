import React, { useEffect, useState} from 'react' ;
import { Link } from 'react-router-dom';
import { getApartments } from '../service/index.jsx';

export default function List() {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        getApartments().then(setApartments )
     }, [])
    return (
        <div className='apartmentCard'>
            {apartments.map(apartment => {
                const title = apartment?.title.split(' ').join('-');
                return (
                    <div key={apartment?.id}>
                        <h3><Link to={`/Apartment/${title}`} state={{ id : apartment?.id}} >{apartment?.title}</Link></h3>
                        <img src={apartment?.cover} alt={apartment?.title} />
                    </div>
                )
            })}
        </div>
    )
}


