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

const getAllUtilities = async () => {
try {

  const [ names , ] = await utility.findAll()

    let araay = [];
      for (let i = 0 ; i < parseInt(names.length) ; i++){
        // console.log(Object(names)[i]['name'])
        araay.push(Object(names)[i]['name']);
      }
    let final = []
    let text = '';
    
    for (let i = 0 ; i < parseInt(araay.length); i++){
      const [ss, ] = await utility.loopUtilities(araay[i]);
      const [sss, ] = await utility.loopUtilitiesMin(araay[i]);
      // console.log(`ss is ${ss[0]['max']}`)
      text = text +`"${araay[i]}": [ ${ss[0]['max']}, ${sss[0]['min']} ],` 
    }
    text = '{' + text + text.slice( 0 ,text.length -1) + '}';
    const araayT = JSON.parse(text);
    console.log(araayT);
    // console.log(araayT['projector'][0]);
     
  

  return ( araayT );
  
} 
catch (error) {
    console.log(error)
    
}

}




module.exports = {
getAllByName,
getAllUtilities,

}









































// const getAllByName = async (req ,res ,next) => {
//     try {
//         const [name, ] = await utility.findAll() 
//         res.status(200).json({name})
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// }

// const getAllUtilities = async (req ,res ,next) => {
//   try {
    
//     // const [ projector, ] = await utility.findAllProjector() 
//     // const [printer, ] = await utility.findAllPrinter() 
//     // const [powerPank, ] = await utility.findAllPowerBank() 
//     // const [computer, ] = await utility.findAllComputer()
//     // const [vendingMashine, ] = await utility.findAllVendingMashine() 
//     // const [airCondition, ] = await utility.findAllAirCondition() 
//     let [waterCooler, _] = await utility.findAllWaterCooler() 
//     let jsonwaterCooler = waterCooler[0];
//     // let max = jsonwaterCooler.[utility_name]
//     res.status(200).json({'waterCooler': jsonwaterCooler});
//     console.log(jsonwaterCooler)
    

//   } catch (error) {
//       console.log(error)
//       next(error)
//   }

// }




// module.exports = {
//   getAllByName,
//   getAllUtilities,

// }