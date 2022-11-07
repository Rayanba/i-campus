import React, { useState, useEffect } from 'react';
import styles from  './Admin.module.css';
import {  Outlet, Link, useLocation } from "react-router-dom";
// const [path, setPath] = useState();
    // const navigate = useNavigate(
import useLogout from '../../hooks/useLogout';
import Topbar from '../pages/topbar/Topbar';
import Sidebar from '../pages/sidebar/Sidebar';
// import useSocket from '../../hooks/useSocket';
import io from 'socket.io-client';
// const socket = io();
const adminSidebarNavLinks = ["dashboard", "privileges","Reports", "scan", "my-QR"];
// import Socket from '../Socket';

function Admin () {
    // useSocket();
    const ssocket = new io("http://localhost:3500", {
        autoConnect: false, 
        withCredentials: true,
    });
    // socket.connect()
    const socket = new io ("http://localhost:3500/root", {
    autoConnect: false, 
    withCredentials: true,
    });
    // socketPrivate.connect()
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);

    useEffect(() => {

        socket.on('connect', () => {
        setIsConnected(true);
        });

        socket.on('disconnect', () => {
        setIsConnected(false);
        
        });

        socket.on('pong', () => {
        setLastPong(new Date().toISOString());
        });

        return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
        };
    }, []);
    const sendPing = () => {
        socket.emit('ping');
    }
    const connect = () => {
        socket.connect()
    }
    const connects = () => {
        ssocket.connect()
    }
    const location = useLocation();
    return (
        <div className={styles.admincontainer} >
            <div className={styles.adminSidebar}>
            <div className='socketStatusContainer'>
                <p>Connected: { '' + isConnected }</p>
                <p>Last pong: { lastPong || '-' }</p>
                <button onClick={ sendPing }>Send ping</button>
                <button onClick={ connect }>connect</button>
                <button onClick={ connects }>connects</button>
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
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;