const SideAttendance = require('../model/SideAttendance')

const SideAttendTime = async (req, res, next) => {
    let {side_course_id, user_id} = req.body
    let sideAttendance = new SideAttendance(side_course_id, user_id)
    
    sideAttendance = await sideAttendance.save()
    
    console.log(SideAttendance)
    
    res.send('done')
    }


    module.exports = {SideAttendTime}