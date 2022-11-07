const express = require('express')
const utility = require('./utilityControllers')
const router = express.Router()



router.route('/name').get(utility.getAllByName)

router.route('/all').get(utility.getAllUtilities)
// router.route('/airCondition').get(utility.getAllAirCondition)
// router.route('/waterCooler').get(utility.getAllWaterCooler)
// router.route('/printer').get(utility.getAllPrinter)
// router.route('/powerPunk').get(utility.getAllPowerPunk)
// router.route('/vendingMashine').get(utility.getAllVendingMashine)
// router.route('/computer').get(utility.getAllComputer)

module.exports = router