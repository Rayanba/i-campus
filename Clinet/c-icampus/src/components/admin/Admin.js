import './Admin.css';
import {  Outlet } from "react-router-dom";


import Sidebar from '../pages/sidebar/Sidebar';
import Topbar from '../pages/topbar/Topbar';


function Admin () {
    return (
        <div className="admincontainer" >
            <div className="adminSidebar">
                <Sidebar/>
            </div>

            <div className="adminRight">
                <div className="adminTopbar">
                    <Topbar/>
                </div>
                <div className="pagesContainer">
                    {/* <br/>
                    <Users />
                    <br/> */}
                    <div className="pages" >  
                        <Outlet/>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Admin;