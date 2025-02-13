import express from 'express';
import { getAllInternationalMatchesSchedule, getAllDomesticMatchesSchedule } from '../controllers/ScheduleController.js';

const router = express.Router();

router.get('/internationalList', getAllInternationalMatchesSchedule);
router.get('/domesticList', getAllDomesticMatchesSchedule);

export default router;