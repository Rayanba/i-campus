import { useState ,useEffect  } from "react";
// import Webcam from "react-webcam";
import { QRScanner } from "react-scanned-qr";

import style from './Scan.module.css';

const Scan = () => {
  
  const [scannedData, setScannedData] = useState();
  const [CamState, setCamState] = useState(true);
 
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
    </div>
    </div>

  )
}

export default Scan;

