import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";
import {SocketContext} from '../context/SocketProvider'

const useAuth = () => {
    const socket = useContext(SocketContext);
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.username ? "Logged In" : "Logged Out")
    
    
    return useContext(AuthContext);
}

export default useAuth;