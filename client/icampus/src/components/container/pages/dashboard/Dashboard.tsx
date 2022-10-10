import styles from "./Dashboard.module.scss";
// import {Outlet} from 'react-router-dom'
import { AttendanceCard, EmployeesCard, FacilitiesCard, InstructorsCard, LecturesCard, RoomsCard, StudentsCard } from './index';



function Dashboard (){

    return (
        
        <div className={styles.dashContainer}>
            <div className={styles.dashUpper}>
                <div className={styles.dashSquareCards}>
                    <AttendanceCard/>
                    <EmployeesCard/>
                    <InstructorsCard/>
                    <LecturesCard/>
                    <RoomsCard/>
                    <StudentsCard/>
                </div>

                <div className={styles.dashTriangle}>
                    <FacilitiesCard/>
                </div>
            </div>

            <div className={styles.dashLower}>


            </div>
        </div>
        
    )
}
export default Dashboard;