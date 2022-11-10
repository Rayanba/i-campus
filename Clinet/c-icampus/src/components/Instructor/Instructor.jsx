import styles from  './Instructor.module.css';
import {  Outlet , Link, useLocation} from "react-router-dom";
import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';
const instructorSidebarNavLinks = ["home","schedule", "scan", "My QR"];


function Instructor () {
    const location = useLocation();
    return (
        <div className={styles.instructorcontainer} >
            <div className={styles.instructorSidebar}>
            <Sidebar
                navList={
                    instructorSidebarNavLinks.map(sidebarNavLink => 
                        <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                            <Link 
                            className={
                                location.pathname === `/instructor/${sidebarNavLink}` 
                                ? styles.sidebarNavLinkActive 
                                : styles.sidebarNavLink
                            }to={`/instructor/${sidebarNavLink}`}
                            >
                                {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                            </Link>
                        </li>
                    )
                }
                />
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