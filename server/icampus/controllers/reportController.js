const Report = require('../model/Report')
const report = require('../model/Report')




const postReport = async (req, res, next) => {
let {report_message, user_id, utility_id} = req.body
let report = new Report(report_message, user_id, utility_id)

report = await report.save()

console.log(report)

res.send('report has ben made')
}





const getDailiy = async (req ,res ,next) => {
    try {
  
      const [ daily,_ ] = await report.findAllDaily()
      console.log(daily)
      const jsondaily = daily[0]
      console.log(jsondaily)
 
      res.status(200).json({ daily})
    }catch (error) {
        console.log(error)
        next(error)
    }

}


const getMonthly = async (req ,res ,next) => {
    try {
  
      const [ monthly, _] = await report.findAllMonthly()
      //const jsonmonthly = monthly[0] 
      res.status(200).json({monthly})
    }catch (error) {
        console.log(error)
        next(error)
    }
    
}

const getYearly = async (req ,res ,next) => {
    try {
  
      const [ yearly, _] = await report.findAllYearly()
      //const jsonyearly = yearly[0] 
      res.status(200).json({yearly})
    }catch (error) {
        console.log(error)
        next(error)
    }
    
}




module.exports = {
    postReport,
    getDailiy,
    getMonthly,
    getYearly
}