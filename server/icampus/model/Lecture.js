const db = require('../config/dbConn')

class Lecture {
constructor( ) {

// this.course_id = course_id,
// this.user_id = user_id

}

async save() {
//    let sql = `
//    INSERT INTO attendance(
//     course_id,
//     user_id
    
//    )
//    VALUES(
//    '${this.course_id}',
//    '${this.user_id}'
   
//    )
//    `
//    const [attendTime,_] = await db.execute(sql)
//    return attendTime
}

static findAllLecture() {
    let sql = `SELECT course.course_start_time, course_end_time,course_name, course_crn,users.user_id
    FROM lecture 
    JOIN course on course.course_id = lecture.course_id
    join users on users.user_id = lecture.user_id;`
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


module.exports = Lecture