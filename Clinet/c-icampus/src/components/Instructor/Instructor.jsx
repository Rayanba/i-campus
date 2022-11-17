import styles from  './Instructor.module.css';
import {  Outlet , Link, useLocation} from "react-router-dom";
import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';
import { useEffect, useState , useContext} from 'react';

import { SocketContext } from '../../context/SocketProvider';



function Instructor () {

    const socket = useContext(SocketContext);
    socket.connect()
    const [isConnected, setIsConnected] = useState(true);
    const [isConnectedChi, setIsConnectedChi] = useState(true);
    const [roomName, setRoomName] = useState([]);
    const [attendStudent, setAttendStudent] = useState([]);
    const [todayLectures, setTodayLectures] = useState([]);
    const [floorOne, setFloorOne] = useState([]);
    const [floorTwo, setFloorTwo] = useState([]);
    const [pieChart, setpieChart] = useState([]);
    
    // console.log(todayLectures)
    // console.log(roomName);
    
    useEffect(() =>{
      socket.on('connect', () => {
        setIsConnected(true);
        setIsConnectedChi(true)
      });
    
    //////// DISCONECT ///////////
    socket.on('disconnect', () => {
        setIsConnected(false);
    
     });
    //////// ROOM NAME ///////////
    socket.on('roomName', (msg) => {
        setRoomName(msg)
      
      });
  
    socket.on("unAuthorized", () =>{
      console.log('unauthorized recieved')
      
      });
    socket.on("todayLectures", (data) =>{
      setTodayLectures(data)
      
      });
    socket.on("AttendStudents", (data) =>{
        setAttendStudent(data)
      
      });
    socket.on("floorOne", (data) =>{
        setFloorOne(data)
      
      });
    socket.on("floorTwo", (data) =>{
        setFloorTwo(data)
      
     });
    socket.on("insPieChart", (data) =>{
        setpieChart(data)
      
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
          
          socket.emit("imInst")
  
      }
  },[isConnected])
//   useEffect(() =>{
//     if (!isConnected){
//         socket.connect()
        
//     }
// },[isConnected]);

    const instructorSidebarNavLinks = ["home", "schedule", "scan", "my-QR"];
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
                        <Outlet context={{roomName,todayLectures, attendStudent, floorOne, floorTwo, pieChart, isConnectedChi}}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor;