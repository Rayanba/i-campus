import {io} from "socket.io-client";
const Socket = new io ("http://localhost:3500", {
  autoConnect: false, 
  withCredentials: true,
});
export default Socket;