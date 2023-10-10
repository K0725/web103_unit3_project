import {pool} from '../config/database.js'

const getLocations = async (req, res) => {
    try {
        const results = await pool.query(
            "SELECT location FROM events ORDER BY ID ASC"
        )
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

const getLocationByLocation = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM events WHERE location = $1`;
        const location = req.params.location;
        const results = await pool.query(selectQuery, [location]);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({error: error.message});
    }
}

export default {
    getLocations,
    getLocationByLocation
}