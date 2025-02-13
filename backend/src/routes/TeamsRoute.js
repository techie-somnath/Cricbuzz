import express from 'express';
import { getInternationalTeamsList } from '../controllers/TeamsController.js';

const router = express.Router();

router.get("/international/list", getInternationalTeamsList);

export default router;