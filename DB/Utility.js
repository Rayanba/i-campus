const db = require('../config/db')

class Utility {
constructor(utility_name, utility_number, utility_avaliability) {
 this.utility_name = utility_name,
 this.utility_number = utility_number,
 this.utility_avaliability = utility_avaliability
}

async save() {

}

static findAll() {
let sql = `SELECT DISTINCT utility_name from utility;`
return db.execute(sql)
}

static findAllProjector() {
    let sql = `Select count(utility_name) AS max, count(utility_avaliability) AS available   from utility where utility_avaliability = true and utility_name = 'projector' ;`
    return db.execute(sql)
}

static findAllWhiteBoard() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) AS available from utility where utility_avaliability = true and utility_name = 'whiteBoard';`
    return db.execute(sql)
}
static findAllPrinter() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) As available  from utility where utility_avaliability = true and utility_name = 'printer';`
    return db.execute(sql)
}
static findAllComputer() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability)AS available  from utility where utility_avaliability = true and utility_name = 'computer';`
    return db.execute(sql)
}
static findAllLaptop() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) AS available  from utility where utility_avaliability = true and utility_name = 'laptop';`
    return db.execute(sql)
}
static findAllPowerBank() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) AS available from utility where utility_avaliability = true and utility_name = 'powerBank';`
    return db.execute(sql)
}
static findAllAirConditioner() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) AS available from utility where utility_avaliability = true and utility_name = 'airConditioner';`
    return db.execute(sql)
}

static findAllToilet() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) AS available from utility where utility_avaliability = true and utility_name = 'toilet';`
    return db.execute(sql)
}

static findAllSink() {
    let sql = `Select count(utility_name)AS max, count(utility_avaliability) AS available from utility where utility_avaliability = true and utility_name = 'sink';`
    return db.execute(sql)
}
 
}

module.exports = Utility;