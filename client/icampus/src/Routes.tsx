import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';

import {Container} from './components/index';
import { Dashboard, Privileges, Reports} from './components/container/pages/index';
// import { AttendanceCard, EmployeesCard, FacilitiesCard, InstructorsCard, LecturesCard, RoomsCard, StudentsCard } from './components/container/pages/dashboard/index';



function MainRoutes (){
    return(
        
            <Routes>
                <Route path="/" element={<Container/>}>
                    <Route path="/" element={<Navigate replace to = "dashboard"/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/privileges" element={<Privileges/>}/>
                    <Route path="/reports" element={<Reports/>}/>
                </Route>
            </Routes>

    )
}
export default MainRoutes;