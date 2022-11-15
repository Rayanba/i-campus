
import axios from "../api/axios";
import useAuth from "./useAuth";
import {SocketContext} from '../context/SocketProvider'
import { useContext } from "react";

const useLogout = () => {
    const socket = useContext(SocketContext);
    const { setAuth } = useAuth();
    
    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/logout', {
                withCredentials: true
                
            });
            socket.disconnect()
            
        } catch (err) {
            console.error(err);
        }
    }
  
    return logout;
   
}

export default useLogout;