const db = require('../config/dbConn');

class Utility {
  constructor(utility_name, utility_number, utility_avaliability) {
   this.utility_name = utility_name,
   this.utility_number = utility_number,
   this.utility_avaliability = utility_avaliability
  }
  
  async save() {
  
  }
  
  static findAll() {
  let sql = `SELECT DISTINCT utility_name AS name from utility;`
  return db.execute(sql)
  }

  static findAllMax() {
  let sql = `SELECT DISTINCT utility_name AS name from utility;`
  return db.execute(sql)
  }

  static loopUtilities (name){
    let sql = `Select count(utility_name) AS max from utility where utility_name = '${name}' ;`;
      return db.execute(sql)
  } 
  static loopUtilitiesMin (name){
    let sql = `Select utility_name, count(utility_availablitiy) AS min from utility where utility_name = '${name}' and utility_availablitiy = true;`;
      return db.execute(sql)
  } 

 
   
  static findAllProjector() {
      let sql = `Select count(utility_name) AS max from utility where utility_name = 'projector';`;
      return db.execute(sql)
  }


// //     static findAllPrinter() {
// //       let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'Printer';"
// //       return db.execute(sql);
// //     }
// //     static findAllComputer() {
// //       let sql =" Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'Computer';"
// //       return db.execute(sql);
// //   }
// //     static findAllVendingMashine() {
// //       let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'vending_mashine';"
// //       return db.execute(sql);
// //   }
// //   static findAllPowerBank() {
// //     let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'power_Bank';"
// //     return db.execute(sql);
// //   }
// //   static findAllAirCondition() {
// //     let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'airCondition';"
// //     return db.execute(sql);
// //   }
// }

}

module.exports = Utility;