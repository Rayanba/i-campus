import styles from  './Admin.module.css';
import {  Outlet, Link, useLocation } from "react-router-dom";

import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';

const adminSidebarNavLinks = ["home","dashboard", "privileges", "scan", "My QR"];

function Admin () {
    const location = useLocation();
    return (
        <div className={styles.admincontainer} >
            <div className={styles.adminSidebar}>
                <Sidebar
                navList={
                    adminSidebarNavLinks.map(sidebarNavLink => 
                        <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                            <Link 
                            className={
                                location.pathname === `/admin/${sidebarNavLink}` 
                                ? styles.sidebarNavLinkActive 
                                : styles.sidebarNavLink
                            }to={`/admin/${sidebarNavLink}`}
                            >
                                {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                            </Link>
                        </li>
                        )
                }
                />
            </div>
            

            <div className={styles.adminRight}>
                <div className={styles.adminTopbar}>
                    <Topbar/>
                </div>
                <div className={styles.adminPagesContainer}>
                    {/* <br/>
                    <Users />
                    <br/> */}
                    <div className={styles.adminPages }>  
                        <Outlet/>
                        

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Admin;