import style from './NowClass.module.css'
import InstHomeCard from '../InstHomeCard';
import { FaEllipsisV } from "react-icons/fa";
import { useEffect, useState , useContext} from 'react';
import { SocketContext } from '../../../../../context/SocketProvider';
import { useOutletContext } from 'react-router-dom';




const NowClass = () => {
  
  const {roomName, attendStudent } = useOutletContext();

  return(
    <InstHomeCard
    title={`ongoing class ${roomName}`}
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
          
        </div>
        {attendStudent.map(as =>
        <div className={style.ongoingClassColumns}>
          <div className={style.ongoingClassRows}>
            <p>{as.id}</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>{as.firstName}</p><p>{as.lastName}</p>
          </div>
          <div className={style.ongoingClassRows}>
          <p>{as.Enter}</p>
          </div>
        </div>
          ) }


        
      </div>
    }
    />
  )
}
export default NowClass;