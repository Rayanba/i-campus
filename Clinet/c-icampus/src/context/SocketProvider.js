import React from "react";
import io from "socket.io-client"; 
export const socket = io("http://localhost:3001", { 
  transports: ['websocket'] });
export const SocketContext = React.createContext();