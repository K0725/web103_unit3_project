import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Events from './pages/Events'
import EventDetails from './pages/EventsDetails';
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'

function App() {
  // Sets up routes
  let element = useRoutes([
    {
      path:"/",
      element: <Locations />
    },
    {
      path: '/logansquare',
      element: <LocationEvents index={1} loc='logansquare'/>
    },
    {
      path: '/bucktown',
      element: <LocationEvents index={2} loc='bucktown'/>
    },
    {
      path: '/downtown',
      element: <LocationEvents index={3} loc='downtown'/>
    },
    {
      path: '/wickerpark',
      element: <LocationEvents index={4} loc='wickerpark'/>
    },
    {
      path: "/events",
      element: <Events/>
    },
    {
      path:"/events/:id",
      element: <EventDetails/>
    }
  ]);

  return (
    <div className="app">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="vite.svg" />
            <h1>Inter Miami Game Schedule </h1>
          </div>
          <div className="header-right">
            <Link to='/'><button>Home</button></Link>
          </div>
          <div className='header-right'>
            <Link to='/events'><button>All Events</button></Link>
          </div>
        </div>
      </header>

      {element}
        
    </div>
  )
}

export default App