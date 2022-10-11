// import React from "react";
import styles from './Sidebar.module.scss';
import drabdulaziz from '../../assets/png/drabdulaziz.png';
import { Link, useLocation } from "react-router-dom";


const sidebarNavLinks = [ "dashboard", "privileges", "reports"];


function Sidebar (){
    const location = useLocation();

    return (
    <>
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            <div className={styles.profileDetails}>
                <div className={styles.profileImageDiv}>
                    <img src={drabdulaziz} alt="managerphoto" height={100} />
                </div>
                <p className={styles.userName}>Abdulaziz</p>
                <p className={styles.userEmail}>abdulaziz@seu.edu.sa</p>

            </div>
            
            <nav className={styles.sidebarNav}>
                <ul>
                    {sidebarNavLinks.map(sidebarNavLinks => 
                        <li className={styles.sidebarNavItem} key={sidebarNavLinks}>
                            <Link 
                            className={
                                location.pathname === `/${sidebarNavLinks}` 
                                    ? styles.sidebarNavLinkActive 
                                    : styles.sidebarNavLink
                                }
                                to={`/${sidebarNavLinks}`}
                                >
                                {sidebarNavLinks.charAt(0).toUpperCase() + sidebarNavLinks.slice(1)}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <nav className={styles.signoutdiv}>
                {/* <a href="#">Sign Out</a> */}
            </nav>
        </div>
    </aside>
    </>
    )
}
export default Sidebar;