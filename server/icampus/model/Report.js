const db = require('../config/dbConn')

class Report {
constructor(report_message, user_id, utility_id) {
this.report_message = report_message ,
this.user_id = user_id,
this.utility_id = utility_id

}

async save() {
   let sql = `
   INSERT INTO report(
    report_message,
    user_id,
    utility_id
   )
   VALUES(
   '${this.report_message}',
   '${this.user_id}',
   '${this.utility_id}'
   )
   `
   const [newReport,_] = await db.execute(sql)
   return newReport
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