import style from './MyQR.module.css'
import QRCode from 'react-qr-code';


const MyQR = () => {
  return (
    <div className={style.myqrContainer}>
      

        <QRCode
        id=""
        value="https://seu.ehjgu.sa" 
        size={300}
         />


    </div>
  )
}

export default MyQR