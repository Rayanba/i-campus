const express = require('express');
const router = express.Router();
const refreshTokenCont = require('../controllers/refreshTokenCont');

router.get('/', refreshTokenCont.handleRefreshToken);

module.exports = router;