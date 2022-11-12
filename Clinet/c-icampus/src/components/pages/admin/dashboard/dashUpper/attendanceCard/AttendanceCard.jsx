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
                <div className={style.UpperFacilitiesleft }>
                        <h3>Instructors</h3>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                        <h3>Student</h3>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                    </div>
            }
            />
            

       
        
    )
}
export default AttendanceCard;