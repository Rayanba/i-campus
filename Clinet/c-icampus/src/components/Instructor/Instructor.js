import styles from  './Instructor.module.css';
import {  Outlet } from "react-router-dom";

// import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';


function Instructor () {
    return (
        <div className={styles.instructorcontainer} >
            <div className={styles.instructorSidebar}>
                {/* <Sidebar/> */}
            </div>

            <div className={styles.instructorRight}>
                <div className={styles.instructorTopbar}>
                    <Topbar/>
                </div>
                <div className={styles.instructorPagesContainer}>
                    
                    <div className={styles.instructorPages }>  
                        <Outlet/>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Instructor;