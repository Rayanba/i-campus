import styles from "./Dashboard.module.css";
import {Outlet, Link, useOutletContext} from 'react-router-dom'
import { UtilitiesCard,AttendanceCard,EmployeesCard,InstructorsCard, LecturesCard, FacilitiesCard, StudentsCard} from './index';
import { useContext, useEffect } from "react";
import { useState } from "react";
import { SocketContext } from '../../../../context/SocketProvider';




function Dashboard (){

    return (
        
        <div className={styles.dashContainer}>
            <div className={styles.dashUpper}>
                <div className={styles.dashSquareCards}>
                        <Link className={styles.card} to= '/admin/dashboard/attendance'><AttendanceCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/facilities'><FacilitiesCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/lectures'><LecturesCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/employees'><EmployeesCard/></Link>
                        <Link className={styles.card} to= '/admin/dashboard/instructors'><InstructorsCard/> </Link>
                        <Link className={styles.card} to= '/admin/dashboard/students'><StudentsCard/></Link>
                </div>
                <Link className={styles.dashFacilites} to='/admin/dashboard/utilities'>
                    <UtilitiesCard/>
                </Link>
            </div>
            <div className={styles.dashLower}>
                <div className={styles.Lowercard}>
                    
                        <Outlet context={useOutletContext()}/>
                    
                </div>
            
            </div>
        </div>
    )
}
export default Dashboard;