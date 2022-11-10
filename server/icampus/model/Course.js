const db = require('../config/dbConn')

class Course {
constructor() {

}

async save() {

}

static findTodayClasses() {
let sql = `SELECT count(course_date) AS TodaySchedule from course where course_date = current_date;`
return db.execute(sql)
}

static findCommingSoon() {
    let sql = `Select count(course_start_time) As commingSoon, (course_date) AS date from course where course_start_time >= current_time and course_date = current_date; `
    return db.execute(sql)
}

static findFinishedClasses() {
    let sql = `Select count(course_end_time), (course_date) from course where course_end_time < current_time and course_date = current_date;`
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