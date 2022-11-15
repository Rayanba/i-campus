import LowerCard from '../LowerCard';
import style from "./AttendanceCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useOutletContext } from 'react-router-dom';



function AttendanceCardLower (){
  const {lowerAttendance} = useOutletContext();



// console.log(lowerAttendance);


    return (
        <LowerCard
        title={'Attendance Lower'}
        options={<FaEllipsisV/>}
        body={
          <div className={style.adminLowerAttendanceBodyContainer}>
            <ResponsiveContainer>
                  <BarChart
                    width={100}
                    height={100}
                    data={lowerAttendance}
                    
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="CRN" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="student" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
          </div>
       }
        />
    )
}
export default AttendanceCardLower;