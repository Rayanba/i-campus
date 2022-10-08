import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
    </Router>
    </>
  );
}

export default App;
