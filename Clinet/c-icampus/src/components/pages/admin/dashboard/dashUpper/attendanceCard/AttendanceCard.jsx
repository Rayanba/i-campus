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
                        <h5>Instructors</h5>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                        <h5>Student</h5>
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