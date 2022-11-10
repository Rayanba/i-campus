const express = require('express')
const router = express.Router()
const ROLES_LIST = require('../../config/roles_list');
const Attendance = require('../../controllers/attendnaceController')
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/').post(verifyRoles(ROLES_LIST.Admin),Attendance.AttendTime)
router.route('/').get(verifyRoles(ROLES_LIST.Admin),Attendance.TotalAttend)

module.exports = router