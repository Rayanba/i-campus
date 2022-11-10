const express = require('express')
const report = require('../../controllers/reportController')
const router = express.Router()
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
router.route('/post').post(verifyRoles(ROLES_LIST.Admin),report.postReport)

router.route('/day').get(verifyRoles(ROLES_LIST.Admin),report.getDailiy)
router.route('/month').get(verifyRoles(ROLES_LIST.Admin),report.getMonthly)
router.route('/year').get(verifyRoles(ROLES_LIST.Admin), report.getYearly)




module.exports = router