import React from "react";
import {Routes, Route} from 'react-router-dom';

import {InnerContent, Dashboard, Privileges, Reports} from './components/pages/index';


function MainRoutes (){
    return(
        
            <Routes>
                <Route path="/" element={<InnerContent/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/privileges" element={<Privileges/>}/>
                    <Route path="/reports" element={<Reports/>}/>
                </Route>
            </Routes>

    )
}
export default MainRoutes;