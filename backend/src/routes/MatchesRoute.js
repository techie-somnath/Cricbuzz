import express from 'express';
import { getAllMatchesList, getMatchInfo } from '../controllers/MatchesController.js';

const router = express.Router();

router.get('/list', getAllMatchesList);
router.get('/:matchId', getMatchInfo);

export default router;