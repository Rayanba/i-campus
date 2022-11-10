const Attendance = require('../model/Attendance')

const AttendTime = async (req, res, next) => {
    let {course_id, user_id} = req.body
    let attendance = new Attendance(course_id, user_id)
    
    attendance = await attendance.save()
    
    console.log(attendance)
    
    res.send('done')
    }

    const TotalAttend = async (req ,res ,next) => {
        try {
      
          const [ total, _] = await Attendance.findAllTotall()
          const jsontotal = total[0] 
          res.status(200).json({'total': jsontotal})
        }catch (error) {
            console.log(error)
            next(error)
        }
        
    }


    module.exports = {
        AttendTime,
        TotalAttend
    }