import style from './TheGate';
import { QRScanner } from "react-scanned-qr";
import { useState ,useEffect, useContext  } from "react";
import { SocketContext } from '../../context/SocketProvider';


const TheGate = () =>{
  const socket = useContext(SocketContext);

  const [scannedData, setScannedData] = useState();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() =>{
    socket.on('connect', () => {
      setIsConnected(true);

  });
  
  //////// DISCONECT ///////////
  socket.on('disconnect', () => {
      setIsConnected(false);
  
  });
  //////// ROOM NAME ///////////


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
        
        socket.emit("TheGate")

    }
},[isConnected])




  const handleScan = (data) => {
    console.log(data);
    setScannedData(data.id);
    
  }

  const handleError = (error) => {
    console.log(error);
  }
 

  return(
    <div className={style.GatescanContainer}>
      <div >
      <QRScanner
      onScanned={handleScan}
      onError={handleError}
      value={"This is my qr"}
      style={{
        height: 350,
        width: 350,
      }}
      delay={1000}
      button={true}
      buttonLabel={"Scan"}
      buttonClassName={style.GateCambutton}
      />
      </div>

      <div>
        <p> {scannedData}</p>
      </div>
    </div>
  )
}

export default TheGate;