import express from "express"
import LocationsController from '../Controllers/locations.js'

const locationsRouter = express.Router();

locationsRouter.get('/', LocationsController.getLocations);
locationsRouter.get('/:location', LocationsController.getLocationByLocation);

export default locationsRouter ;