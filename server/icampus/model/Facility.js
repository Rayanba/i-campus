const db = require('../config/db')

class Facility {
constructor() {
//  this.utility_name = utility_name,
//  this.utility_number = utility_number,
//  this.utility_avaliability = utility_avaliability
}

async save() {

}

static findAll() {
let sql = `SELECT DISTINCT facility_name from facility;`
return db.execute(sql)
}

static findAllClassRoom() {
    let sql = `Select count(facility_name) AS max  from facility where facility_name = 'classRoom';`
    return db.execute(sql)
}

static findAllLab() {
    let sql = `Select count(facility_name)AS max  from facility where  facility_name = 'lab';`
    return db.execute(sql)
}

static findAllBathRoom() {
    let sql = `Select count(facility_name) AS max  from facility where facility_name = 'bathRoom';`
    return db.execute(sql)
}

static findAllStoreHouse() {
    let sql = `Select count(facility_name) AS max  from facility where facility_name = 'storeHouse';`
    return db.execute(sql)
}

static findAllOffice() {
    let sql = `Select count(facility_name) AS max  from facility where facility_name = 'office';`
    return db.execute(sql)
}

static findAllTheater() {
    let sql = `Select count(facility_name) AS max  from facility where facility_name = 'theater';`
    return db.execute(sql)
}
// static findAllPrinter() {
//     let sql = `Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'printer';`
//     return db.execute(sql)
// }
// static findAllComputer() {
//     let sql = `Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'computer';`
//     return db.execute(sql)
// }

}

module.exports = Facility