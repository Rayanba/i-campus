import React from 'react';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import {Sidebar, Topbar} from './components/index';  //, Login //
import MainRoutes from './Routes';


function App() {
  return (
    <main className={"app"}>
        {/* <Login/> */}
        <Topbar/>
        <Sidebar/>
        <MainRoutes/>
    </main>
  );
}

export default App;
