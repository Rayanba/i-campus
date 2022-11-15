const db = require('../config/dbConn')

class Attendance {
    constructor( course_id, user_id) {

    this.course_id = course_id,
    this.user_id = user_id

    }

    async save() {
    let sql = `
    INSERT INTO attendance(course_id,user_id)VALUES('${this.course_id}','${this.user_id}')`
    const [attendTime,_] = await db.execute(sql)
    return attendTime
    }

    static findAllTotall() {
    let sql = `SELECT COUNT(attendance_time) AS todayAttendance FROM attendance where attendance_time = current_date;`;
    return db.execute(sql)
    }

    static findStdnAttend() {
    let sql = `SELECT COUNT(users.username) AS AttendStudent
    FROM attendance
    JOIN users ON users.user_id = attendance.user_id 
    JOIN course ON course.course_id = attendance.course_id WHERE attendance_time = CURRENT_DATE AND roles = JSON_ARRAY(2001);`;
    return db.execute(sql)
    }
    
    static findInstAttend() {
    let sql = `SELECT COUNT(users.username) AS AttendInstructor
    FROM attendance
    JOIN users ON users.user_id = attendance.user_id 
    JOIN course ON course.course_id = attendance.course_id WHERE attendance_time = CURRENT_DATE AND roles = JSON_ARRAY(1984);`;
    return db.execute(sql)
    }

    static findNowClassAttendance(){
        let sql = `SELECT users.username as id , users.first_name AS firstName, users.last_name AS lastName, attendance.attendance_time AS Enter 
        FROM attendance
        JOIN users on users.user_id = attendance.user_id 
        JOIN course on course.course_id = attendance.course_id 
        WHERE course_day = DAYNAME(CURRENT_DATE) AND course_start_time <= CURRENT_TIME AND course_end_time >= CURRENT_TIME AND roles = JSON_ARRAY(2001);`;
    return db.execute(sql)

    }
    static findCrnStdAttendace(){
        let sql = `SELECT course.course_crn AS CRN , COUNT(roles = JSON_ARRAY(2001)) AS student
        FROM attendance
        JOIN users on users.user_id = attendance.user_id 
        JOIN course on course.course_id = attendance.course_id 
        WHERE course_day = DAYNAME(CURRENT_DATE) AND roles = JSON_ARRAY(2001)
        GROUP BY course_crn;`;
    return db.execute(sql)
    }




// static findAllMonthly() {
//     let sql = `select * from report where report_date >= current_date - interval 1 month;`
//     return db.execute(sql)
//     }


// static findAllYearly() {
//     let sql = `select * from report where report_date >= current_date - interval 1 year;`
//     return db.execute(sql)
//     }

}


module.exports = Attendance