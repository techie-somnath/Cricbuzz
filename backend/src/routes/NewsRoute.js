import express from 'express';
import { getAllCricketNews } from '../controllers/NewsController.js'; 

const router = express.Router();

router.get('/list', getAllCricketNews);

export default router;