import styles from "./Dashboard.module.scss";

// import {Outlet} from 'react-router-dom'
import { FacilitiesCard, AttendanceCard, EmployeesCard, InstructorsCard, LecturesCard, RoomsCard, StudentsCard } from './index'; // 



function Dashboard (){

    return (
        
        <div className={styles.dashContainer}>
            <div className={styles.dashUpper}>
                <div className={styles.dashSquareCards}>
                    
                        <div className={styles.cards}><AttendanceCard/></div>
                        <div className={styles.cards}><RoomsCard/></div>
                        <div className={styles.cards}><LecturesCard/></div>
                        <div className={styles.cards}><EmployeesCard/></div>
                        <div className={styles.cards}><InstructorsCard/> </div>
                        <div className={styles.cards}><StudentsCard/></div>
                
                   
                </div>

                <div className={styles.dashFacilites}>
                    <FacilitiesCard/>
                </div>
            </div>

            <div className={styles.dashLower}>



            </div>
        </div>
        
    )
}
export default Dashboard;