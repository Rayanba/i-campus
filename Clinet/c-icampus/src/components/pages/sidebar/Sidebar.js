import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './Sidebar.module.css';
import drabdulaziz from '../../../assets/png/drabdulaziz.png';
import useLogout from '../../../hooks/useLogout';


const sidebarNavLinks = [ "dashboard", "privileges", "reports"];


function Sidebar (){
    const location = useLocation();
    const navigate = useNavigate();
    const logout = useLogout();
    const signOut = async () => {
        await logout();
        navigate('/login');
        
    }
    
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
                                location.pathname === `/admin/${sidebarNavLinks}` 
                                    ? styles.sidebarNavLinkActive 
                                    : styles.sidebarNavLink
                                }
                                to={`/admin/${sidebarNavLinks}`}
                                >
                                {sidebarNavLinks.charAt(0).toUpperCase() + sidebarNavLinks.slice(1)}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <nav className={styles.signoutdiv}>
                
                <Link onClick={signOut}>Sign Out</Link>
            </nav>
        </div>
    </aside>
    </>
    )
}
export default Sidebar;