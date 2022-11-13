import style from './NowClass.module.css'
import InstHomeCard from '../InstHomeCard';
import { FaEllipsisV } from "react-icons/fa";
import { useEffect, useState , useContext} from 'react';
import { SocketContext } from '../../../../../context/SocketProvider';




const NowClass = () => {
  const socket = useContext(SocketContext);
  const [isConnected, setIsConnected] = useState(true);
  const [roomName, setRoomName] = useState();
  
  console.log(roomName);

  useEffect(() =>{
    socket.on('connect', () => {
      setIsConnected(true);

  });
  
  //////// DISCONECT ///////////
  socket.on('disconnect', () => {
      setIsConnected(false);
  
  });
  //////// ROOM NAME ///////////
  socket.on('roomName', (msg) => {
      setRoomName(msg)

  });

  socket.on("unAuthorized", () =>{
    console.log('unauthorized recieved')
    
  })
  
  /////// CLEAN-UP ////////////
  return () => {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('unAuthorized');
    };

  },[])
  useEffect(() =>{
    if (isConnected){
        const name = 'S1964000654'
        socket.emit("imInst" , name)

    }
},[isConnected])

  return(
    <InstHomeCard
    title={`ongoing class ${roomName || "No class"}`}
    options={<FaEllipsisV/>}
    body={
      
    <div className={style.ongoingClassContainer}>
        <div className={style.ongoingClassTiltesColumns}>
          <div className={style.ongoingClassTitle}>
            <p>ID</p>
          </div>
          <div className={style.ongoingClassTitle}>
          <p>Name</p>
          </div>
          <div className={style.ongoingClassTitle}>
          <p>Enter Time</p>
          </div>
          <div className={style.ongoingClassTitle}>
          <p>Total</p>
          </div>
        </div>

        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>

        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>

        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>

        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>

        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>

        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>S1876543210</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>Ahmed</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>5:09</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>35%</p>
          </div>
        </div>


        
      </div>
    }
    />
  )
}
export default NowClass;