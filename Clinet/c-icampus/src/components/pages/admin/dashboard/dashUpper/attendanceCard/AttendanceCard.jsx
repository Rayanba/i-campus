import UpperCard from '../UpperCard';
import style from './AttendanceCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
// import DontChart from 'react-donut-chart';


function AttendanceCard (){

    return (
            <UpperCard
            title={'Attendance'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.upperAttendanceContainer }>
                    <div className={style.UpperFacilitiesInstContainer}>
                        <h3>Instructors</h3>
                        <div className={style.UpperFacilitiesBarContainer} >
                            <div className={style.UpperFacilitiesBar}></div>
                        </div>
                    </div >
                    <div className={style.UpperFacilitiesInstContainer}>
                        <h3>Students</h3>
                        <div className={style.UpperFacilitiesBarContainer}>
                            <div className={style.UpperFacilitiesBar}></div>
                        </div>
                    </div>
                </div>
            }
            />
            

       
        
    )
}
export default AttendanceCard;