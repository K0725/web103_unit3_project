import React, { useState, useEffect } from 'react'
import '../css/Locations.css'
import { Link } from 'react-router-dom';
import Welcome from './Home';

const Locations= () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        const fetchLocations = async() => {
          const res = await fetch('http://localhost:3001/locations')
          const json = await res.json();
          if (Array.isArray(json) && json.length > 0) {
              const locs = json.map(({location})=>location)
              const filtered = json.filter(({location}, index)=> !locs.includes(location, index+1))
              setLocations(filtered);
              console.log(locations)
          }
        }
        fetchLocations();
      }, []);

    return (
        <div className='Gifts'>
            <main>
            {
                locations && locations.length>0 ? 
                locations.map((loc, index) => 
                    <Link to={loc.location} key={index}><button >{loc.location}</button></Link>
                ) : <h3>🤦‍♀️ No locations found.</h3>
            }
            <Welcome />
            </main>
        </div>  
    )
}

export default Locations