import style from './Scan.module.css';
import { useState ,useEffect, useContext  } from "react";
// import Webcam from "react-webcam";
import { QRScanner } from "react-scanned-qr";
import { SocketContext } from "../../context/SocketProvider";
import { useOutletContext } from 'react-router-dom';



const Scans = () => {
  const socket = useContext(SocketContext);
  // const {isConnectedChi} = useOutletContext()
  const [scannedData, setScannedData] = useState('');
  const [CamState, setCamState] = useState(true);
  const [already, setAlready] = useState('');
  const [alreadyReported, setAlreadyReported] = useState('');
  const [ReportBottton, setReportBottton] = useState(false);
  

  useEffect(() =>{
    console.log(typeof(scannedData));
  },[scannedData  ]);
  
  /////// CLEAN-UP ////////////
  useEffect (() =>{


    socket.on('alreadyAttended', (data)=>{
      setAlready(data);
    });
    socket.on('alreadyReported', (data)=>{
      setAlreadyReported(data)
    })

  },[])



  useEffect(() =>{
    if ( scannedData >= 100 ){
      socket.emit('attendClass', scannedData)
    }
    if ( scannedData < 101 && scannedData > 0 ){
      // socket.emit("reportUtility", scannedData); 
      setReportBottton(true)

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

  const handleReport = () => {
    socket.emit("reportUtility", scannedData); 

  }
 
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
      {/* <p>this is student</p> */}
        <button className={CamState === true ? style.CamOff : style.camOnn} onClick={hanldeCamOpen}>Scan Again</button>
      <div>
      </div>
        <button className={ReportBottton === false ? style.CamOff : style.camOnn} onClick={handleReport}>Report</button>
       
      <div>
      <p> {scannedData}</p>
      <p>{already}</p>
      <p>{alreadyReported}</p>
    </div>
    </div>

  )
}

export default Scans;

