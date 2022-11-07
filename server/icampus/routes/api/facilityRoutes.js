const express = require('express')
const utility = require('./facilityControllers')
const router = express.Router()



router.route('/name').get(utility.getAllByName)

router.route('/all').get(utility.getAllFacilites)


module.exports = router