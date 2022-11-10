import {socket, SocketContext} from './context/SocketProvider'
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <SocketContext.Provider  value={socket}>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
              </Routes>
          </AuthProvider>
          </SocketContext.Provider>
    </BrowserRouter>
);


