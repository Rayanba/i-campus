const db = require('../config/dbConn')

class SideAttendance {
constructor( side_course_id, user_id) {

this.side_course_id = side_course_id,
this.user_id = user_id

}

async save() {
   let sql = `
   INSERT INTO side_attendance(
    side_course_id,
    user_id
    
   )
   VALUES(
   '${this.side_course_id}',
   '${this.user_id}'
   
   )
   `
   const [sideAttendTime,_] = await db.execute(sql)
   return sideAttendTime
}

static findAllDaily() {
    let sql = `select * from report where report_date >= current_date - interval 1 day;`
    return db.execute(sql)
    }

static findAllMonthly() {
    let sql = `select * from report where report_date >= current_date - interval 1 month;`
    return db.execute(sql)
    }


static findAllYearly() {
    let sql = `select * from report where report_date >= current_date - interval 1 year;`
    return db.execute(sql)
    }

}


module.exports = SideAttendance