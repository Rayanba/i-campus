import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import {Sidebar, Topbar, Container} from './components/index';
import {Dashboard, Privileges, Reports} from './components/pages/index';



function App() {
  return (
    <div className={"app"}>
      <Router>
        <Sidebar />
        <Topbar/>
        <Container/> 
      </Router>
    </div>
  );
}

export default App;
