import React, { useState, useEffect } from 'react'
import '../css/Events.css';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async() => {
            try {
                const response = await fetch('http://localhost:3001/events')
                const data = await response.json()
                setEvents(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchEvents();
      }, []);

    const filterByLocation = (e) => {
        let value = e.target.value;
        if (value !== "all") {
            try {
                let filtered = events.filter(loc => {return loc.location === value}) 
                setFilteredEvents(filtered);
                console.log(filtered)
                console.log(filteredEvents)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="Gifts">
            <div className='searchBar'>
                <label htmlFor="site-search">Search Location ☞</label>
                <select className='selectMenu' name="locations" id="location-select" onChange={(e)=>filterByLocation(e) }>
                    <option value="all">-- Please choose a location --</option>
                    <option value="logansquare">Logansquare</option>
                    <option value="bucktown">Bucktown</option>
                    <option value="downtown">Downtown</option>
                    <option value="wickerpark">Wickerpark</option>
                </select>
                <Link to='/events'><button onClick={()=>setFilteredEvents(events)}>All Events</button></Link>
            </div>
            <main>
            {
                filteredEvents && filteredEvents.length > 0 ?
                filteredEvents.map((event) => 
                <Card key={event.id} id = {event.id} image={event.image} name={event.name} location={event.location}/>) 
                : 
                events && events.length > 0 ?
                events.map((event) => 
                <Card key={event.id} id={event.id} 
                    image={event.image} 
                    name={event.name} 
                    location={event.location}/>
                ) 
                : 
                <h3 className="noResults">{'No Events Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Events