import express from 'express';
import { getAllMatchesList, getMatchInfo, getTeamInfoByMatchIdAndteamId } from '../controllers/MatchesController.js';

const router = express.Router();

router.get('/list', getAllMatchesList);
router.get('/:matchId', getMatchInfo);
router.get('/:matchId/team/:teamId', getTeamInfoByMatchIdAndteamId);

export default router;