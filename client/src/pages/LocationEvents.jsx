import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import '../css/EventsDetails.css'
import Card from '../components/Card';

const LocationEvents = ({index, loc}) => {
    const [events, setEvents] = useState([])


    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`http://localhost:3001/locations/${loc}`)
            const json = await response.json()
            setEvents(json)
            console.log(json)
        }
        fetchEventById()
    }, []);


    return (
        <div className="GiftDetails">
            <main>
            {
                events && events.length > 0 ?
                events.map((event,index) => 
                <Card id={event.id} 
                    image={event.image} 
                    name={event.name} 
                    location={event.location}/>

                ) : <h3 className="noResults">{'No Events Yet 😞'}</h3>
            }
            </main>
        </div>
    )
}

export default LocationEvents