// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Sidebar.module.css';
import user1 from '../../../assets/png/user1.png';
import useLogout from '../../../hooks/useLogout';


function Sidebar ({navList}){
    const navigate = useNavigate();

    const logout = useLogout();
    const signOut = async () => {
        await logout();
        navigate('/');
    }

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <div className={styles.profileDetails}>
                    <div className={styles.profileImageDiv}>
                        <img src={user1} alt="managerphoto" height={100} />
                    </div>
                    <p className={styles.userName}>Abdulaziz</p>
                    <p className={styles.userEmail}>abdulaziz@seu.edu.sa</p>
                </div>
                <nav className={styles.sidebarNav}>
                    <ul>
                    {navList}
                    </ul>
                </nav>
                <nav className={styles.signoutdiv}>
                    
                    <Link onClick={signOut}>Sign Out</Link>
                </nav>
            </div>
        </aside>
    
    
    )
}
export default Sidebar;