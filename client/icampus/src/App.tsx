import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Sidebar, Topbar} from './components/index';
import MainRoutes from './Routes';


function App() {
  return (
    <div className={"app"}>
        <Topbar/>
        <Sidebar/>
        <MainRoutes/>
    </div>
  );
}

export default App;
