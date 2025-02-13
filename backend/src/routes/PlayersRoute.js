import express from 'express';
import { getTrendingPlayers } from '../controllers/PlayersController.js';

const router = express.Router();

router.get("/list-trending", getTrendingPlayers);

export default router;