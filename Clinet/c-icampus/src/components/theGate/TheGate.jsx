import style from './TheGate';
import { QRScanner } from "react-scanned-qr";
import { useState ,useEffect, useContext  } from "react";
import { SocketContext } from '../../context/SocketProvider';
import useLogout from '../../hooks/useLogout';

const TheGate = () =>{
  const socket = useContext(SocketContext);
  socket.connect();
  const [scannedData, setScannedData] = useState('');
  const [isConnected, setIsConnected] = useState(true);
  // console.log(scannedData);

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
        
        socket.emit("imGate"); 

    }
},[isConnected])
  useEffect(() =>{
    if (isConnected && scannedData !== ''){
        
        socket.emit("userIdInandOut", scannedData); 

    }
},[scannedData])




  const handleScan = (data) => {
    console.log(data);
    setScannedData(data.id);
    
  }

  const handleError = (error) => {
    console.log(error);
  }
  const logout = useLogout();
    const signOut = async () => {
        await logout();
        
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
        <button onClick={signOut}>logOut</button>
      </div>
    </div>
  )
}

export default TheGate;