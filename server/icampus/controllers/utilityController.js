const utility = require('../model/Utility')

const getAllByName = async (req ,res ,next) => {
    try {
        const [name, ] = await utility.findAll() 
        res.status(200).json({name})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getAllUtilities = async (req ,res ,next) => {
  try {
    
    // const [ projector, ] = await utility.findAllProjector() 
    // const [printer, ] = await utility.findAllPrinter() 
    // const [powerPank, ] = await utility.findAllPowerBank() 
    // const [computer, ] = await utility.findAllComputer()
    // const [vendingMashine, ] = await utility.findAllVendingMashine() 
    // const [airCondition, ] = await utility.findAllAirCondition() 
    let [waterCooler, _] = await utility.findAllWaterCooler() 
    let jsonwaterCooler = waterCooler[0];
    // let max = jsonwaterCooler.[utility_name]
    res.status(200).json({'waterCooler': jsonwaterCooler});
    console.log(jsonwaterCooler)
    

  } catch (error) {
      console.log(error)
      next(error)
  }

}




module.exports = {
  getAllByName,
  getAllUtilities,

}