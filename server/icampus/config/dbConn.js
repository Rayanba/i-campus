require('dotenv').config();

const mysql = require('mysql2');

// create the connection to database
const pool =  mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWD,
  database: process.env.DATABASE_NAME
});
    


module.exports = pool.promise();



// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URI, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         });
//     }catch (err){
//         console.error(err);
//     }
// }

// module.exports = connectDB;



//// LOOP TEH RESULTS
// let sql = "SELECT * FROM utility;";
// pool.execute(sql, function(err, result){
//   if (err) throw err;
//   console.log(result)
//   result.forEach(res => {
//     console.log(res.utility_name);
//   })
// });