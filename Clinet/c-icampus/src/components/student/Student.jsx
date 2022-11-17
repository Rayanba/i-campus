import { Outlet, Link , useLocation} from "react-router-dom"
import styles from  './Student.module.css';
import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';
import { useContext, useEffect, useState } from "react";
import { SocketContext } from '../../context/SocketProvider';
import Scans from "./Scans";


function Student () {
    const socket = useContext(SocketContext);
    socket.connect()
    const [isConnected, setIsConnected] = useState(true);
    const [currentRooms , setCurrentRooms] = useState();
    const [Schedual , setSchedual] = useState();
    
    useEffect(() =>{
        //////////////////////////////////////////////
        ///////////////// Essintials /////////////////
        //////////////////////////////////////////////

        //////// CONNECT ////////////
        socket.on('connect', () => {
            setIsConnected(true);

        });
        //////// DISCONECT ///////////
        socket.on('disconnect', () => {
            setIsConnected(false);
        
        });

        /////// UNAUTHORIZED ACCESS ////////////////
        socket.on("unAuthorized", () =>{
            console.log('unauthorized recieved')

        });
        /////// CURRENT ROOMS ////////////////
        socket.on("myRoom", (obj) => {
            setCurrentRooms(obj);

        });
        socket.on("todayLecturesStud", (obj) => {
            setSchedual(obj);

        });
        /////// CLEAN-UP ////////////
        return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('unAuthorized');
        };
       

    },[])


    useEffect(() =>{
        if (isConnected){
            socket.emit("imStudent")
            
        }
    },[isConnected]);
    // useEffect(() =>{
    //     if (!isConnected){
    //         socket.connect()
            
    //     }
    // },[isConnected]);



    const studentSidebarNavLinks = ["home","schedule", "scan", "my-QR"];
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
                        <Outlet context={{Schedual}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student;