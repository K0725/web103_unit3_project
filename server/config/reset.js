// create the tables you will need to store the events and locations data 
import {pool} from '../config/database.js'
import '../config/dotenv.js'
import eventsData from '../data/schedule.js'

const createEventsTable=async() =>{
    const createTableQuery=`
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      image VARCHAR(255),
      date DATE,
      location VARCHAR(255)
      
    )`

    try {
        await pool.query(createTableQuery)
        console.log('🎉 Events table created successfully')
      } catch (err) {
        console.error('⚠️ error creating events table', err)
      }
}

const feedEventsTable = async () => {
    await createEventsTable()
  
    eventsData.forEach(async (event) => {
      const insertQuery = {
        text: 'INSERT INTO events ( name, image, date, location) VALUES ($1, $2, $3, $4)'
      }
  
      const values = [
        event.name,
        event.date,
        event.image,
        event.location
      ]
  
      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error('⚠️ error inserting event', err)
          return
        }
        console.log(`✅ ${event.title} added successfully`)
      })
    })
  }
  
  feedEventsTable()