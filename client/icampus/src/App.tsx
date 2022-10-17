import React from 'react';

import './App.scss';
import { Dashboard, Privileges, Reports} from './components/pages/index';
import Login from './components/login/Login';
import RequireAuth from './components/RequireAuth';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';

// 2001 user 
// 1984 employee
// 5150 


function App() {
  return (
    <main className="App">
        
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/* Public routes */}
            <Route path="login" element={<Login/>}/>

            {/* Protected routes */}
              <Route element={ <RequireAuth allowedRoles={[2001]}/>}> 
                <Route path="dashboard" element={<Dashboard/>}/>

              </Route>

              <Route element={ <RequireAuth allowedRoles={[1984]}/>}>

              </Route>

              <Route element={ <RequireAuth allowedRoles={[5150]}/>}>
                <Route path="privileges" element={<Privileges/>}/>
                <Route path="reports" element={<Reports/>}/>
              </Route>
              
            </Route>
            {/* catch all routes */}

        </Routes>

    </main>
  );
}

export default App;
