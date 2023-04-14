import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data.js"

export default function List () {
    return (
        <div className='apartmentCard'>
            {data.map(item => {
                const title = item.title.split(' ').join('-');
                return (
                    <div key={item.id}>
                        <h3><Link to={`/Apartment/${title}`} state={{ id : item.id}} >{item.title}</Link></h3>
                        <img src={item.cover} alt={item.title} />
                    </div>
                )
            })}
        </div>
    )
}


