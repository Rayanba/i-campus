import { Outlet, Link , useLocation} from "react-router-dom"
import styles from  './Student.module.css';
import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';
const studentSidebarNavLinks = ["home","schedule", "scan", "My QR"];


function Student () {
    const location = useLocation();
    return (
        <div className={styles.studentContainer} >
            <div className={styles.studentSidebar}>
            <Sidebar
                navList={
                    studentSidebarNavLinks.map(sidebarNavLink => 
                        <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                            <Link 
                            className={
                                location.pathname === `/student/${sidebarNavLink}` 
                                ? styles.sidebarNavLinkActive 
                                : styles.sidebarNavLink
                            }to={`/student/${sidebarNavLink}`}
                            >
                                {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                            </Link>
                        </li>
                    )
                }
                />
            </div>
            <div className={styles.studentRight}>
                <div className={styles.studentTopbar}>
                    <Topbar/>
                </div>
                <div className={styles.studentPagesContainer}>
                    <div className={styles.studentPages }>  
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student;