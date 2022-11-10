const express = require('express')
const facility = require('../../controllers/facilityControllers')
const router = express.Router()
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');


router.route('/name').get(verifyRoles(ROLES_LIST.Admin),facility.getAllByName)

router.route('/all').get(verifyRoles(ROLES_LIST.Admin),facility.getAllFacilites)


module.exports = router