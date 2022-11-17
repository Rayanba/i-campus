const db = require('../config/dbConn')

class Report {
constructor( user_id, utility_id) {

this.user_id = user_id,
this.utility_id = utility_id

}

save() {
   let sql = `
   INSERT INTO report(
    
    user_id,
    utility_id
   )
   VALUES(
   '${this.user_id}',
   '${this.utility_id}'
   )
   `
    
   return db.execute(sql)
}

static NewReport(userid, utilityid) {
    let sql = `
    INSERT INTO report(
     
     user_id,
     utility_id
    )
    VALUES(
    '${userid}',
    '${utilityid}'
    )
    `
     
    return db.execute(sql)
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


module.exports = Report