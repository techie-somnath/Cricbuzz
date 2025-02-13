import express from 'express';
import { getAllInternationalMatchesSeries, getAllDomesticMatchesSeries } from '../controllers/SeriesController.js';

const router = express.Router();

router.get('/international', getAllInternationalMatchesSeries);
router.get('/domestic', getAllDomesticMatchesSeries);

export default router;