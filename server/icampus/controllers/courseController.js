const Course = require('../model/Course')

const AllClasses = async (req ,res ,next) => {
    try {
  
      const [ total, _] = await Course.findTodayClasses()
      const jsontotal = total[0] 
      res.status(200).json({'total': jsontotal})
    }catch (error) {
        console.log(error)
        next(error)
    }
    
}

const CommingSoon = async (req ,res ,next) => {
    try {
  
      const [ comming, _] = await Course.findCommingSoon()
      const jsoncomming = comming[0] 
      res.status(200).json({'total': jsoncomming})
    }catch (error) {
        console.log(error)
        next(error)
    }
    
}

const FinishedClasses = async (req ,res ,next) => {
    try {
  
      const [ finished, _] = await Course.findFinishedClasses()
      const jsonfinished = finished[0] 
      res.status(200).json({'finished': jsonfinished})
    }catch (error) {
        console.log(error)
        next(error)
    }
    
}

module.exports = {
AllClasses,
CommingSoon,
FinishedClasses

}