import { useEffect } from "react";
import Socket from "../components/Socket";
import useAuth from "./useAuth";

const useSocket = () => {
  const { setAuth } = useAuth();
  useEffect(() => {
    Socket.connect();
    Socket.on("connect_error", () => {
      // setAuth({});
    })
    return () => {
      Socket.off("connect_error");
    }
  }, [setAuth]);
};

export default useSocket;