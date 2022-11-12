import LowerCard from '../LowerCard';
import style from "./AttendanceCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area, ResponsiveContainer } from 'recharts';
// const data = [{name: 'AttendanceCardLower', uv: 400, pv: 2400, amt: 2400}];
const data = [
    {
      "name": "01:00",
      "instructor": 48,
      "student": 65,
      "amt": 200
    },
    {
      "name": "02:00",
      "instructor": 48,
      "student": 65,
      "amt": 200
    },
    {
      "name": "03:00",
      "instructor": 40,
      "student": 78,
      "amt": 200
    },
    {
      "name": "04:00",
      "instructor": 38,
      "student": 93,
      "amt": 200
    },
    {
      "name": "05:00",
      "instructor": 28,
      "student": 70,
      "amt": 200
    },
    {
      "name": "06:00",
      "instructor": 27,
      "student": 67,
      "amt": 200    },
    {
      "name": "07:00",
      "instructor": 25,
      "student": 93,
      "amt": 200
    },
    {
      "name": "08:00",
      "instructor": 28,
      "student": 70,
      "amt": 200
    },
    {
      "name": "09:00",
      "instructor": 27,
      "student": 67,
      "amt": 200    },
    {
      "name": "10:00",
      "instructor": 25,
      "student": 25,
      "amt": 200
    },
    {
      "name": "11:00",
      "instructor": 28,
      "student": 70,
      "amt": 200
    },
    {
      "name": "12:00",
      "instructor": 27,
      "student": 67,
      "amt": 200    },
    {
      "name": "01:00",
      "instructor": 25,
      "student": 93,
      "amt": 200
    },
    {
      "name": "02:00",
      "instructor": 28,
      "student": 70,
      "amt": 200
    },
    {
      "name": "03:00",
      "instructor": 27,
      "student": 67,
      "amt": 200    },
    {
      "name": "04:00",
      "instructor": 25,
      "student": 25,
      "amt": 200
    },
    {
      "name": "05:00",
      "instructor": 33,
      "student": 58,
      "amt": 200
    },
    {
      "name": "06:00",
      "instructor": 48,
      "student": 65,
      "amt": 200
    },
    {
      "name": "07:00",
      "instructor": 48,
      "student": 65,
      "amt": 200
    },
    {
      "name": "08:00",
      "instructor": 27,
      "student": 67,
      "amt": 200    },
    {
      "name": "09:00",
      "instructor": 25,
      "student": 25,
      "amt": 200
    },
    {
      "name": "10:00",
      "instructor": 33,
      "student": 58,
      "amt": 200
    },
    {
      "name": "11:00",
      "instructor": 48,
      "student": 65,
      "amt": 200
    },
    {
      "name": "12:00",
      "instructor": 48,
      "student": 20,
      "amt": 200
    }
  ]

function AttendanceCardLower (){
    return (
        <LowerCard
        title={'Attendance Lower'}
        options={<FaEllipsisV/>}
        body={
            <ResponsiveContainer>
                <AreaChart width={1500} height={250} data={data}
            margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
            <defs>
              <linearGradient id="colorInstructor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorStudent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="instructor" stroke="#8884d8" fillOpacity={1} fill="url(#colorInstructor)" />
            <Area type="monotone" dataKey="student" stroke="#82ca9d" fillOpacity={1} fill="url(#colorStudent)" />
          </AreaChart>
          </ResponsiveContainer>
       }
        />
    )
}
export default AttendanceCardLower;