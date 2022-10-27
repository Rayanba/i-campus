import UpperCard from '../UpperCard';
import style from './AttendanceCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
// import DontChart from 'react-donut-chart';


function AttendanceCard (){

    return (
       
        
            <UpperCard
            title={'Attendance'}
            options= {<FaEllipsisV/>}
            body= {'hello'}
            />
            

       
        
    )
}
export default AttendanceCard;