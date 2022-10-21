import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './Sidebar.module.css';
import drabdulaziz from '../../../assets/png/drabdulaziz.png';
import useLogout from '../../../hooks/useLogout';

    const sidebarNavLinks = ["home","dashboard", "privileges", "scan", "My QR"];
  
    


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
                    {sidebarNavLinks.map(sidebarNavLink => 
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