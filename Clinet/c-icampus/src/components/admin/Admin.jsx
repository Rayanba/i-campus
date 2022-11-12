import { useContext, useState,  useEffect } from 'react';
import { SocketContext } from '../../context/SocketProvider';
import styles from  './Admin.module.css';
import {  Outlet, Link, useLocation } from "react-router-dom";
import Topbar from '../pages/topbar/Topbar';
import Sidebar from '../pages/sidebar/Sidebar';

function Admin () {
    const adminSidebarNavLinks = ["dashboard", "messages","Reports", "scan", "my-QR"];
    const socket = useContext(SocketContext);
    const [isConnected, setIsConnected] = useState(true);
    const [socketId] = useState(socket.id);
    const [socketall] = useState(socket);
    const [lastPong, setLastPong] = useState(null);
    const [unAuthorizedEvent , setUnAuthorizedEvent] = useState(false);
    const [currentRooms , setCurrentRooms] = useState();
	const [utilitiesLoad, setUtilitiesLoad] = useState([]);
    const [dashData, DashData] = useState([{}]);
    
    useEffect(() => {
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

        })
        /////// CURRENT ROOMS ////////////////
        socket.on("myRoom", (obj) => {
            setCurrentRooms.y(obj);
            console.log(obj);

        })
        ////////// UTILITY LOAD ////////////////
        socket.on("NewutilitiesLoad", (utili) =>{
			// console.log(utili)
			// setNewUtilitiesLoad(utili)
            DashData(utili);
            
		});
        
        //////////////////////////////////
        /////////// INITIALIZAION //////////
        
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
    },[isConnected])

    useEffect(()=>{

    },[])
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
                        <Outlet context={{dashData,lastPong}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;