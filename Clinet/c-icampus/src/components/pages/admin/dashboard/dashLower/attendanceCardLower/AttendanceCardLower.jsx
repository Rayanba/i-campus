import LowerCard from '../LowerCard';
import styles from "./AttendanceCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function AttendanceCardLower (){
    return (
        <LowerCard
        title={'Attendance Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default AttendanceCardLower;