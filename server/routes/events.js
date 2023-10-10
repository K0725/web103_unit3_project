import express from 'express';
import EventsController from '../Controllers/events.js';

const eventsRouter = express.Router();

eventsRouter.get('/', EventsController.getEvents);
eventsRouter.get('/:eventId', EventsController.getEventById);

export default eventsRouter;