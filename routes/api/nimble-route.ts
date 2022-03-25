import { NimbleController } from "../../controllers/NimbleController";

// Express Router
var router = require('express').Router();

router.get('/:token/:account', NimbleController.isWhitelisted);

module.exports = router;
