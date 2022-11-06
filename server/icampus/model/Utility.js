const db = require('../config/dbConn');

//bluepirnt
class Utility {
  constructor(utility_name, utility_number, utility_avaliability) {
  this.utility_name = utility_name,
  this.utility_number = utility_number,
  this.utility_avaliability = utility_avaliability
  }

  async save() {

  }
  static findAll() {
    let sql = 'SELECT DIXzutility_name FROM utility;';
    return db.execute(sql)
    }
    
  
    

    // static findAllProjector() {
    //     let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'projector';";
    //     return db.execute(
    //       sql, 
    //       function( err, results, fields){
    //         console.log(results);
    //         console.log(fields);
    //     });
    // }

    static findAllWaterCooler() {
      let sql = "Select count(utility_name) AS max, count(utility_avaliability) AS available from utility where utility_avaliability = true and utility_name = 'Water_Cooler';"
      return db.execute(sql);
    }
//     static findAllPrinter() {
//       let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'Printer';"
//       return db.execute(sql);
//     }
//     static findAllComputer() {
//       let sql =" Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'Computer';"
//       return db.execute(sql);
//   }
//     static findAllVendingMashine() {
//       let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'vending_mashine';"
//       return db.execute(sql);
//   }
//   static findAllPowerBank() {
//     let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'power_Bank';"
//     return db.execute(sql);
//   }
//   static findAllAirCondition() {
//     let sql = "Select count(utility_name), count(utility_avaliability)  from utility where utility_avaliability = true and utility_name = 'airCondition';"
//     return db.execute(sql);
//   }
}



module.exports = Utility;

// UNION SELECT COUNT(utility_avaliability) FROM utility WHERE utility_avaliability = true AND utility_name = 'projector';