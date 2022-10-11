import React from 'react';
import './App.scss';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Sidebar, Topbar, Login} from './components/index';
// import MainRoutes from './Routes';


function App() {
  return (
    <main className={"app"}>
        <Login/>
        {/* <Topbar/>
        <Sidebar/>
        <MainRoutes/> */}
    </main>
  );
}

export default App;
