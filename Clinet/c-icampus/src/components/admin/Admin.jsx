import { useContext, useState,  useEffect } from 'react';
import { SocketContext } from '../../context/SocketProvider';
import styles from  './Admin.module.css';
import {  Outlet, Link, useLocation } from "react-router-dom";
import Topbar from '../pages/topbar/Topbar';
import Sidebar from '../pages/sidebar/Sidebar';

function Admin () {
    
    const adminSidebarNavLinks = ["dashboard", "messages","Reports", "scan", "my-QR"];
    const socket = useContext(SocketContext);
    socket.connect()

    const [isConnected, setIsConnected] = useState(true);
    const [socketId] = useState(socket.id);
    const [socketall] = useState(socket);
    const [lastPong, setLastPong] = useState(null);
    const [unAuthorizedEvent , setUnAuthorizedEvent] = useState(false);
    const [currentRooms , setCurrentRooms] = useState();

    ////////////////////////////////////////////////////////////////
    ////////////////////// Upper Cards /////////////////////////////
	const [upperUtilities, setUpperUtilities] = useState([{}]);
    ////////////////////////// Lectures ////////////////////////////
    const [upperLecturesOnGo, setUpperLecturesOnGo] = useState(); 
    const [upperLecturesFin, setUpperLecturesFin] = useState(); 
    // console.log(upperLecturesFin);
    const [upperLecturesCom, setUpperLecturesCom] = useState(); 
    // console.log(upperLecturesCom);
    ////////////////////////// Facilities //////////////////////////
    const [upperFacilities, setUpperFacilities] = useState([]); 
    // console.log(upperFacilities);
    const [upperAttendance, setUpperAttendance] = useState([]); 
    // console.log(upperAttendance[0]);
    const [upperStudents, setUpperStudents] = useState([]); 

    const [upperInstructors, setUpperInstructors] = useState([]); 

    const [upperEmployees, setUpperEmployees] = useState([]); 
    ////////////////////// Lower Cards /////////////////////////////
    var [lowerUtilities, setLowerUtilities] = useState([]);


    var [lowerLectures, setLowerLectures] = useState([]); 
    // console.log(lowerLectures)
    var [lowerFacilities, setLowerFacilities] = useState([]); 
    // console.log(lowerFacilities[0]);
    var [lowerFacilitiesSec, setLowerFacilitiesSec] = useState([]); 
    // console.log(lowerFacilities[0]);
    var [lowerAttendance, setLowerAttendance] = useState([]); 

    var [lowerStudents, setLowerStudents] = useState([]); 
    var [lowerInstructors, setLowerInstructors] = useState([]); 
    var [lowerEmployees, setLowerEmployees] = useState([]); 
    
    useEffect(() => {
        /////////////////////////////////////////////////////////
        ////////////////////// Essintials ///////////////////////
        /////////////////////////////////////////////////////////

        //////// CONNECT ////////////
        socket.on('connect', () => {
            setIsConnected(true);

        });
        //////// DISCONECT ///////////
        socket.on('disconnect', () => {
            setIsConnected(false);
        
        });
        /////// PONG ////////////////
        socket.on('pong', () => {
            setLastPong(new Date().toISOString());

        });
        /////// UNAUTHORIZED ACCESS ////////////////
        socket.on("unAuthorized", () =>{
            console.log('unauthorized recieved')

        });
        /////// CURRENT ROOMS ////////////////
        socket.on("myRoom", (obj) => {
            setCurrentRooms(obj);
            console.log(obj);

        });

        //////////////////////////////////////////////
        ///////////////// UTILITIES //////////////////
        //////////////////////////////////////////////
        socket.on("upperUtilitiesLoad", (utili) =>{

            setUpperUtilities(utili)
		});
        socket.on("lowerUtilitiesLoad", (utili) =>{
			setLowerUtilities(utili)
		});

        /////////////////////////////////////////////////
        ////////////////// Lectures /////////////////////
        /////////////////////////////////////////////////
        socket.on("upperLecturesLoadOnGo", (utili) =>{
			setUpperLecturesOnGo(utili)
		});
        socket.on("upperLecturesLoadFin", (utili) =>{
			setUpperLecturesFin(utili)
			
		});
        
        socket.on("upperLecturesLoadCom", (utili) =>{
			setUpperLecturesCom(utili)
			
		});
        
        socket.on("lowerLecturesLoad", (utili) =>{
			setLowerLectures(utili)
		});
        
        ////////////////////////////////////////////////
        ////////////////// Facilities //////////////////
        ////////////////////////////////////////////////
        socket.on("upperFacilitiesLoad", (utili) =>{
			setUpperFacilities(utili)
		});
        
        socket.on("lowerFacilitiesLoad", (utili) =>{
			setLowerFacilities(utili)
		});
        socket.on("lowerFacilitiesLoadSec", (utili) =>{
			setLowerFacilitiesSec(utili)
		});

        ////////////////////////////////////////////////
        ////////////////// Attendance //////////////////
        ////////////////////////////////////////////////
        socket.on("upperAttendanceLoad", (utili) =>{
			setUpperAttendance(utili);
		});

        socket.on("lowerAttendanceLoad", (utili) =>{
            setLowerAttendance(utili);
		});

        ////////////////////////////////////////////////
        ////////////////// Students ////////////////////
        ////////////////////////////////////////////////
        socket.on("upperStudentsLoad", (utili) =>{
			setUpperStudents(utili);
		});
        socket.on("lowerStudentsLoad", (utili) =>{
			setLowerStudents(utili);
		});

        /////////////////////////////////////////////////
        ////////////////// Instructors //////////////////
        /////////////////////////////////////////////////
        socket.on("upperInstructorsLoad", (utili) =>{
			setUpperInstructors(utili);
		});
        socket.on("lowerInstructorsLoad", (utili) =>{
			setLowerInstructors(utili);
		});

        ////////////////////////////////////////////////
        ////////////////// Employees ///////////////////
        ////////////////////////////////////////////////
        socket.on("upperEmployeesLoad", (utili) =>{
			setUpperEmployees(utili);
		});
        socket.on("lowerEmployeesLoad", (utili) =>{
			setLowerEmployees(utili)
		});


        /////// CLEAN-UP ////////////
        return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
        socket.off('unAuthorized');
        };
    }, []);




    useEffect(() =>{
        if (isConnected){
            socket.emit("imAdmin")
 
        }
    },[isConnected]);

    // useEffect(() =>{
    //     if (!isConnected){
    //         socket.connect()
            
    //     }
    // },[isConnected]);

    const sendPing = () => {
        socket.emit('ping');
    }
    const sendPingsa = () => {
        console.log(socketall);
    }
    const location = useLocation();
    return (
        <div className={styles.admincontainer} >
            <div className={styles.adminSidebar}>
            <div 
            className={location.pathname === `/admin/dashboard` 
            ? styles.socketStatusContainer
            : styles.socketOff}
            >
                <div>
                    <div className={styles.SocketConnected} >
                        <div>
                            <p>Connected</p>
                        </div >
                        <p>-</p>
                        <div className={
                            isConnected === false 
                            ? styles.socketFalse
                            : styles.socketTrue
                            }>
                            <p >{ '' +  isConnected }</p>
                        </div>
                    </div>
                    <div>
                        <p>Last pong: { lastPong || '-' }</p>
                    </div>
                </div>
                <div>
                <div>
                    <p>SocketID: {socketId || 'No ID' }</p>
                </div>
                <div>
                    <p>Rooms: { '' + currentRooms }</p>
                </div>
                </div>
                <div>
                </div>
                <div>
                    <button onClick={ sendPing }>Send ping</button>
                    <button onClick={ sendPingsa }>soket all</button>
                </div>
            </div>
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
                        <Outlet context={{upperUtilities, upperLecturesOnGo, upperLecturesFin, upperLecturesCom, upperFacilities, upperAttendance, upperStudents, upperInstructors, upperEmployees, lowerLectures, lowerFacilities ,lowerFacilitiesSec, lowerAttendance,lowerUtilities, lowerStudents, lowerInstructors, lowerEmployees}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;