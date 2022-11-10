const express = require('express');
const router = express.Router();
const usersRegiController = require('../controllers/usersRegiController')



router.post('/', usersRegiController.handleNewUser);

module.exports = router;