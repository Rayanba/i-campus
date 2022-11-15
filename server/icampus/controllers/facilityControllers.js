const facility = require('../model/Facility')

const getAllByName = async (req ,res ,next) => {
    try {
        const [name, _] = await facility.findAll() 
        res.status(200).json({name})
    } catch (error) {
        console.log(error)
        next(error)
    }
  
}

const getAllFacilitesStatus = async () => {
    try {
        
      const [ BusyClassrooms, ] = await facility.findBusyFacility()
      const jsonBusyClassrooms = BusyClassrooms[0] 
       


      const [OutClassrooms,] = await facility.findOutFacility() 
      const jsonOutClassrooms = OutClassrooms[0]
     
      const [AvailableClassrooms,] = await facility.findAvailableFacility() 
      const jsonAvailableClassrooms = AvailableClassrooms[0]
     
        
       return json({'available' : jsonAvailableClassrooms ,'busy': jsonBusyClassrooms, 'out': jsonOutClassrooms });
      
    } catch (error) {
        console.log(error)
    
    }
  
  }
  
  
  
  
  module.exports = {
    getAllByName,
    getAllFacilitesStatus,
  
  }


