const db = require('../config/dbConn')

class Course {
constructor() {

}

async save() {

}

static findAllClasses(){
    let sql = `SELECT  course.course_crn AS CRN, course_name AS name, course_start_time AS StartTime, 
    course_end_time AS EndTime, facility.facility_number AS Room, users.username AS Instructor
     FROM lecture
     JOIN course ON course.course_id = lecture.course_id
     JOIN users ON users.user_id = lecture.user_id
     JOIN facility on facility.facility_id = course.facility_id
     WHERE course_day = DAYNAME(CURRENT_DATE) AND users.roles = JSON_ARRAY(1984);`
    return db.execute(sql);
}

static findTodayClasses() {
let sql = `SELECT count(course_date) AS TodaySchedule from course where course_date = current_date;`
return db.execute(sql)
}

static findCommingSoon() {
    let sql = `Select count(course_start_time) As commingSoon from course where course_start_time > current_time and course_day = dayname(current_date);`
    return db.execute(sql)
}

static findFinishedClasses() {
    let sql = `SELECT count(course_day) as Finished from course where course_day = dayname(current_date) AND course_end_time < current_time;`
    return db.execute(sql)
}
static findOngoindClasses(){
    let sql= `Select count(course_start_time) as InProgress from course where course_start_time <= CURRENT_TIME AND course_end_time >= CURRENT_TIME and course_day = dayname(current_date);`
    return db.execute(sql)
}

static findMyClassesToday(userId){
    let sql= `SELECT  course.course_crn AS CRN, course_name AS name, course_start_time AS StartTime, 
    course_end_time AS EndTime, facility.facility_number AS Room
     FROM lecture
     JOIN course ON course.course_id = lecture.course_id
     JOIN users ON users.user_id = lecture.user_id
     JOIN facility ON facility.facility_id = course.facility_id
     WHERE course_day = DAYNAME(CURRENT_DATE) AND username = '${userId}';`

    return db.execute(sql)

}









// static findAllBathRoom() {
//     let sql = `Select count(facility_name) AS max  from facility where facility_name = 'bathRoom';`
//     return db.execute(sql)
// }

// static findAllStoreHouse() {
//     let sql = `Select count(facility_name) AS max  from facility where facility_name = 'storeHouse';`
//     return db.execute(sql)
// }

// static findAllOffice() {
//     let sql = `Select count(facility_name) AS max  from facility where facility_name = 'office';`
//     return db.execute(sql)
// }

// static findAllTheater() {
//     let sql = `Select count(facility_name) AS max  from facility where facility_name = 'theater';`
//     return db.execute(sql)
// }


}

module.exports = Course