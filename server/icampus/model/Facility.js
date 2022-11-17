const db = require('../config/dbConn')

class Facility {
constructor() {
//  this.utility_name = utility_name,
//  this.utility_number = utility_number,
//  this.utility_avaliability = utility_avaliability
}

async save() {

}

static findBusyFacility() {
let sql = `SELECT COUNT(is_busy) AS Busys FROM facility WHERE is_busy = true;`
return db.execute(sql);
}

static findOutFacility() {
let sql = `SELECT count(facility_number) AS outservice FROM 
facility WHERE  facility_availability = false ;`
return db.execute(sql);
}

static findAvailableFacility() {
let sql = `SELECT count(facility_number) AS Available FROM 
facility WHERE  facility_availability = true ;`
return db.execute(sql);
}

static findAllFacilitiesRooms(){
let sql = `SELECT facility_number AS room, facility_availability AS availabil, is_busy  AS Busy FROM 
facility WHERE facility_floor = 1;`

return db.execute(sql);
}
static findAllFacilitiesRoomsSecFloor(){
let sql = `SELECT facility_number AS room, facility_availability AS availabil, is_busy  AS Busy FROM 
facility WHERE facility_floor = 2;`

return db.execute(sql);
}






static findAll() {
let sql = `SELECT DISTINCT facility_name from facility;`
return db.execute(sql);
}

static findAllClassRoom() {
    let sql = `Select count(facility_name) AS max  from facility where facility_name = 'classRoom';`
    return db.execute(sql);
}

static findAllLab() {
    let sql = `Select count(facility_name)AS max  from facility where  facility_name = 'lab';`
    return db.execute(sql);
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




static findFacilityById(data){
    let sql =`SELECT is_busy FROM facility WHERE facility_number = ${data};`

    return db.execute(sql)
}

static updateFacilityById(data){
    let sql =`UPDATE facility SET is_busy = true WHERE facility_number = ${data};`

    return db.execute(sql)
}
static updateFacilityByIdToOff(data){
    let sql =`UPDATE facility SET is_busy = false WHERE facility_number = ${data};`

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