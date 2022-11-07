const utility = require('../models/Utility')





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

    const [ projector, ] = await utility.findAllProjector()
    const jsonprojector = projector[0] 
     
    const [printer,] = await utility.findAllPrinter() 
    const jsonprinter = printer[0]
   
    const [powerBank, ] = await utility.findAllPowerBank() 
    const jsonpowerBank = powerBank[0] 
    
    const [computer, ] = await utility.findAllComputer()
    const jsoncomputer = computer[0] 
   
    const [toilet, ] = await utility.findAllToilet() 
    const jsontoilet = toilet[0] 
    
    const [airConditioner, ] = await utility.findAllAirConditioner()
     const jsonairConditioner = airConditioner[0] 

    const [sink] = await utility.findAllSink() 
    const jsonsink = sink[0];

    const [laptop] = await utility.findAllLaptop() 
    const jsonlaptop = laptop[0];

    const [whiteBoard] = await utility.findAllWhiteBoard() 
    const jsonwhiteBoard = whiteBoard[0];
  
     res.status(200).json({'sink': jsonsink, 'projector': jsonprojector, 'computer': jsoncomputer, 'powerBank': jsonpowerBank, 'airConditioner': jsonairConditioner, 'printer': jsonprinter, 'toilet': jsontoilet, 'whiteBoard': jsonwhiteBoard, 'laptop': jsonlaptop});
    
  } catch (error) {
      console.log(error)
      next(error)
  }

}




module.exports = {
  getAllByName,
  getAllUtilities,

}

// const getAllByName = async (req ,res ,next) => {
//     try {
//         const [name, _] = await utility.findAll() 
//         res.status(200).json({name})
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
  
// }

// const getAllProjector = async (req ,res ,next) => {
//     try {
//         const [projector, _] = await utility.findAllProjector() 
//         res.status(200).json({projector})
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// }
//     const getAllPrinter = async (req ,res ,next) => {
//         try {
//             const [printer, _] = await utility.findAllPrinter() 
//             res.status(200).json({printer})
//         } catch (error) {
//             console.log(error)
//             next(error)
//         }
//     }

//     const getAllPowerPunk = async (req ,res ,next) => {
//         try {
//             const [powerPunk, _] = await utility.findAllPowerPunk() 
//             res.status(200).json({powerPunk})
//         } catch (error) {
//             console.log(error)
//             next(error)
//         }

//     }

//     const getAllComputer = async (req ,res ,next) => {
//         try {
//             const [computer, _] = await utility.findAllComputer() 
//             res.status(200).json({computer})
//         } catch (error) {
//             console.log(error)
//             next(error)
//         }
//     }
    
//     const getAllVendingMashine = async (req ,res ,next) => {
//         try {
//             const [vendingMashine, _] = await utility.findAllVendingMashine() 
//             res.status(200).json({vendingMashine})
//         } catch (error) {
//             console.log(error)
//             next(error)
//         }
//     }

//     const getAllAirCondition = async (req ,res ,next) => {
//         try {
//             const [airCondition, _] = await utility.findAllAirCondition() 
//             res.status(200).json({airCondition})
//         } catch (error) {
//             console.log(error)
//             next(error)
//         }
//     }

//     const getAllWaterCooler = async (req ,res ,next) => {
//         try {
//             const [waterCooler, _] = await utility.findAllWaterCooler() 
//             res.status(200).json({waterCooler})
//         } catch (error) {
//             console.log(error)
//             next(error)
//         }
//     }

// module.exports = {
//     getAllByName,
//     getAllProjector,
//     getAllAirCondition,
//     getAllComputer,
//     getAllPowerPunk,
//     getAllPrinter,
//     getAllVendingMashine,
//     getAllWaterCooler

// }

//console.log(jsonwaterCooler, jsonprojector, jsonprinter, jsonpowerBank, jsoncomputer, jsonvendingMashine, jsonairCondition)