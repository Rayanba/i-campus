const express = require('express')
const utility = require('../../controllers/utilityController')
const router = express.Router()
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');



router.route('/').get(verifyRoles(ROLES_LIST.Admin), utility.getAllUtilities) // add .post() for posting 
// router.route('/:id').get(utility.getUtilityByID) // add .post() for posting 

router.route('/name').get(verifyRoles(ROLES_LIST.Admin), utility.getAllByName)


// router.route('/airCondition').get(utility.getAllAirCondition)
// router.route('/waterCooler').get(utility.getAllWaterCooler)
// router.route('/printer').get(utility.getAllPrinter)
// router.route('/powerPunk').get(utility.getAllPowerPunk)
// router.route('/vendingMashine').get(utility.getAllVendingMashine)
// router.route('/computer').get(utility.getAllComputer)

module.exports = router