const express = require('express')
const Lecture = require('../../controllers/lectureController')
const router = express.Router()
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
router.route('/').get(verifyRoles(ROLES_LIST.Admin),Lecture.getAllLecture)

module.exports = router