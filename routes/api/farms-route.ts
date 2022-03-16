import { FarmsController } from '../../controllers/FarmsController';

// Express Router
var router = require('express').Router();

router.get('/', FarmsController.createFarm);

module.exports = router;
