const facility = require('../models/Facility')

const getAllByName = async (req ,res ,next) => {
    try {
        const [name, _] = await facility.findAll() 
        res.status(200).json({name})
    } catch (error) {
        console.log(error)
        next(error)
    }
  
}

const getAllFacilites = async (req ,res ,next) => {
    try {
  
      const [ classRoom, ] = await facility.findAllClassRoom()
      const jsonclassRoom = classRoom[0] 
       
      const [lab,] = await facility.findAllLab() 
      const jsonlab = lab[0]
     
      const [bathRoom, ] = await facility.findAllBathRoom() 
      const jsonbathRoom = bathRoom[0] 
      
      const [theater, ] = await facility.findAllTheater()
      const jsontheater = theater[0] 
     
      const [office, ] = await facility.findAllOffice() 
      const jsonoffice = office[0] 
      
      const [storeHouse, ] = await facility.findAllStoreHouse()
       const jsonstoreHouse = storeHouse[0] 
  
    
    
       res.status(200).json({'classRoom': jsonclassRoom, 'lab': jsonlab, 'bathRoom': jsonbathRoom, 'theater': jsontheater, 'office': jsonoffice, 'storeHouse': jsonstoreHouse});
      
    } catch (error) {
        console.log(error)
        next(error)
    }
  
  }
  
  
  
  
  module.exports = {
    getAllByName,
    getAllFacilites,
  
  }


