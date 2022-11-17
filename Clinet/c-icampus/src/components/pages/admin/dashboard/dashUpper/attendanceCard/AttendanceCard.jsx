import UpperCard from '../UpperCard';
import style from './AttendanceCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';
// import DontChart from 'react-donut-chart';


function AttendanceCard (){
    const {upperAttendance} = useOutletContext();
    console.log(upperAttendance[0]);
    return (
            <UpperCard
            title={'Attendance'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.upperAttendanceContainer }>
                    <div className={style.UpperFacilitiesInstContainer}>
                        <h3>Students</h3>
                        <div className={style.UpperFacilitiesBarContainer}>
                        <div style={{borderRadius: '2rem',
                                backgroundColor: '#83aef2',
                                width: `${upperAttendance[1]}%`,
                                height:'100%',}}></div>
                        </div>
                    </div>
                </div>
            }
            />
            

       
        
    )
}
export default AttendanceCard;