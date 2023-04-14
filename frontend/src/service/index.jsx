import axios from "axios";


export function getApartments() { 
    return new Promise(resolve => { 
        axios.get("http://localhost:3000/api/apartments/")
            .then(res => res.status === 200 && res.data)
            .then(resolve)
        .catch(console.log.error)
    })
}