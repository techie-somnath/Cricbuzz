import express from 'express';
import MatchesRoute from './MatchesRoute.js';
import SchedulesRoute from './SchedulesRoute.js';
import SeriesRoute from './SeriesRoute.js';
import TeamsRoute from './TeamsRoute.js';
import PlayersRoute from './PlayersRoute.js';
import VenuesRoute from './VenuesRoute.js';
import NewsRoute from './NewsRoute.js';
import PhotosRoute from './PhotosRoute.js';
import StatsRoute from './StatsRoute.js';

const router = express.Router();

router.use('/matches', MatchesRoute);
router.use('/schedules', SchedulesRoute);
router.use('/series', SeriesRoute);
router.use('/teams', TeamsRoute);
router.use('/venues', VenuesRoute);
router.use('/players', PlayersRoute);
router.use('/news', NewsRoute);
router.use('/photos', PhotosRoute);
router.use('/stats', StatsRoute);

export default router;