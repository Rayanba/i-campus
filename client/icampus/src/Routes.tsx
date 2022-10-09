import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Dashboard, Privileges, Reports} from './components/container/pages/index';
import {Container} from './components/index';



function MainRoutes (){
    return(
        
            <Routes>
                <Route path="/" element={<Container/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/privileges" element={<Privileges/>}/>
                    <Route path="/reports" element={<Reports/>}/>
                </Route>
            </Routes>

    )
}
export default MainRoutes;