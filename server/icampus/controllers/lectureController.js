const Lecture = require ('../model/Lecture')


const getAllLecture = async (req ,res ,next) => {
    try {
  
      const [ lecture, ] = await Lecture.findAllLecture()
      //const jsonlecture = lecture[0] 
      res.status(200).json({lecture})

    }catch(error){

        console.log(error)
        next(error)
    }
}

module.exports = {getAllLecture}