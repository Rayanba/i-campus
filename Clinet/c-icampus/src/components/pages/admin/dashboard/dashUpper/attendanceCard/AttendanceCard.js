import UpperCard from '../UpperCard';
// import styles from './AttendanceCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function AttendanceCard (){

    return (
       
        
            <UpperCard
            title={'Attendance'}
            options= {<FaEllipsisV/>}
            body= {<h5>Hello </h5>}
            />
            

       
        
    )
}
export default AttendanceCard;