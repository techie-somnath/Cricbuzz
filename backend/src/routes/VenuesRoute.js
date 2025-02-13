import express from 'express';
import { getVenueInfo } from '../controllers/VenuesController.js';

const router = express.Router();

router.get("/getInfo", getVenueInfo);

export default router;