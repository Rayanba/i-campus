import React from "react";
import io from "socket.io-client"; 
export const socket = io("http://localhost:3500", { 
  transports: ['websocket'] });
export const SocketContext = React.createContext();