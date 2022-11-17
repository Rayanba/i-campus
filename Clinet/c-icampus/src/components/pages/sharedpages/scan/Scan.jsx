import style from './Scan.module.css';
import { useState ,useEffect, useContext  } from "react";
// import Webcam from "react-webcam";
import { QRScanner } from "react-scanned-qr";
import { SocketContext } from "../../../../context/SocketProvider";
import { useOutletContext } from 'react-router-dom';



const Scan = () => {
  const socket = useContext(SocketContext);
  const {isConnectedChi} = useOutletContext()
  const [scannedData, setScannedData] = useState('');
  const [CamState, setCamState] = useState(true);
  const [roomState, setRoomState] = useState('');
  const [already, setAlready] = useState('');
  

  useEffect(() =>{
    console.log(typeof(scannedData));
  },[scannedData  ]);
  
  /////// CLEAN-UP ////////////
  useEffect (() =>{
    socket.on('roomStatus', (data)=>{
      setRoomState(data);
    });

    socket.on('alreadyAttended', (data)=>{
      setAlready(data);
    });

  },[])



  useEffect(() =>{
    if ( scannedData >= 101){
      socket.emit("facilityID", scannedData); 

    }
    if ( scannedData < 101 && scannedData >= 0 ){
      socket.emit("", scannedData); 

    }
  },[scannedData]);









  const handleScan = (data) => {
    console.log(data);
    setScannedData(data.id);
    setCamState (false);
    
  }

  const handleError = (error) => {
    console.log(error);
  }
 
  const hanldeCamOpen = (data) =>{
    setCamState (!CamState);

  }
  
  useEffect( () => {

    // socket.on("utilityInfo", (utili) =>{
		// 	// console.log(utili)
		// 	setNewUtilitiesLoad(utili)

		// });
  },[])


 
  return(
    <div className={style.scanContainer}>
      <div className={CamState === false ? style.CamOff : style.camOnn}>
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
      buttonClassName={style.Cambutton}
      />
      </div>
        <button className={CamState === true ? style.CamOff : style.camOnn} onClick={hanldeCamOpen}>Scan Again</button>
      <div>
      <p> {scannedData}</p>
      <p>{roomState}</p>
      <p>{already}</p>
    </div>
    </div>

  )
}

export default Scan;

