import express from 'express';
import MatchesRoute from './MatchesRoute.js';

const router = express.Router();

router.use('/matches', MatchesRoute);

export default router;