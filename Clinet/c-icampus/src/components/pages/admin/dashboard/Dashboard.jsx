import styles from "./Dashboard.module.css";
import {Outlet, Link} from 'react-router-dom'
import { FacilitiesCard,AttendanceCard,EmployeesCard,InstructorsCard, LecturesCard, RoomsCard, StudentsCard} from './index';




function Dashboard (){

    return (
        
        <div className={styles.dashContainer}>
            <div className={styles.dashUpper}>
                <div className={styles.dashSquareCards}>
                        <Link className={styles.card} to= '/admin/dashboard/attendance'><AttendanceCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/rooms'><RoomsCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/lectures'><LecturesCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/employees'><EmployeesCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/instructors'><InstructorsCard/> </Link>
                        <Link className={styles.card} to= '/admin/dashboard/students'><StudentsCard/></Link>
                </div>
                <Link className={styles.dashFacilites} to='/admin/dashboard/facilities'>
                    <FacilitiesCard/>
                </Link>
            </div>
            <div className={styles.dashLower}>
            <div className={styles.Lowercard}><Outlet/></div>
            
            </div>
        </div>
    )
}
export default Dashboard;