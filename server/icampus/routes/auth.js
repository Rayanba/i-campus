const express = require('express');
const router = express.Router();
const authCont = require('../controllers/authCont');

router.post('/', authCont.handleLogin);

module.exports = router;