import style from './MyQR.module.css'
import QRCode from 'react-qr-code';
const MyQR = () => {
  return (
    <div className={style.myqrContainer}>
      

        <QRCode
        value="https://google.com" 
        size={300}
         />


    </div>
  )
}

export default MyQR