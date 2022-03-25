import { AccountController } from "../../controllers/AccountController";

// Express Router
var router = require('express').Router();

router.post('/create', AccountController.createAccount);
router.post('/get', AccountController.getAccount);

module.exports = router;
