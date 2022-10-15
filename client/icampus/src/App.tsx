import React from 'react';

import './App.scss';
// import MainRoutes from './MainRoutes';
import Admin from './components/admin/Admin';


function App() {
  return (
    <main className={"app"}>
        {/* ///////////// Public routes ////////////// */}
        {/* <Login /> */}
        {/* <LinkPage /> */}
        {/* <Unauthorized /> */}



        {/* ////////////////// Protected Routes /////////////// */}
        {/* <Topbar/>
        <Sidebar/>
        <MainRoutes/> */}
        <Admin/>

        {/* ///////////////// Catch all ////////////////// */}




    </main>
  );
}

export default App;
