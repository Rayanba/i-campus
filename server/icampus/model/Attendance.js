const db = require('../config/dbConn')

class Attendance {
constructor( course_id, user_id) {

this.course_id = course_id,
this.user_id = user_id

}

async save() {
   let sql = `
   INSERT INTO attendance(
    course_id,
    user_id
    
   )
   VALUES(
   '${this.course_id}',
   '${this.user_id}'
   
   )
   `
   const [attendTime,_] = await db.execute(sql)
   return attendTime
}

static findAllTotall() {
    let sql = `SELECT COUNT(attendance_time) AS todayAttendance FROM attendance where attendance_time = current_date; `
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