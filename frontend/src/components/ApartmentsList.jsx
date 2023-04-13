import React from 'react';
import data from "../../../backend/models/Apartment.js"

const ApartmentsList = ({data}) => {
    return (
        <div className='apartmentCard'>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.cover} alt={item.title} />
                    </div>
                )
            })}
        </div>
    )
}


export default ApartmentsList;