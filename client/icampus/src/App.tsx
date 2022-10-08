import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className={"app"}>
      <Router>
        <Sidebar />
        <Topbar/>
      </Router>
    </div>
  );
}

export default App;
