const express = require('express')
const Course = require('../../controllers/courseController')
const router = express.Router()
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');



router.route('/a').get(verifyRoles(ROLES_LIST.Admin),Course.AllClasses)
router.route('/c').get(verifyRoles(ROLES_LIST.Admin),Course.CommingSoon)
router.route('/f').get(verifyRoles(ROLES_LIST.Admin),Course.FinishedClasses)


module.exports = router