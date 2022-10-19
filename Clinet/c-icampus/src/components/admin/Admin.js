import styles from './Admin.module.css'
import {  Outlet } from "react-router-dom";


import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';


function Admin () {
    return (
        <div className={styles.admincontainer} >
            <div className={styles.adminSidebar}>
                <Sidebar/>
            </div>

            <div className={styles.adminRight}>
                <div className={styles.adminTopbar}>
                    <Topbar/>
                </div>
                <div className={styles.pagesContainer}>
                    {/* <br/>
                    <Users />
                    <br/> */}
                    <div className={styles.pages} >  
                        <Outlet/>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Admin;