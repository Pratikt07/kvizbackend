const express = require('express');

const loginCntr = require('../controller/loginController');
const router = express.Router();
router.post('/', loginCntr.login);

module.exports = router;
