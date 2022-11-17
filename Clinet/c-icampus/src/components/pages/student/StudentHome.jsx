import style from "./StudentHome.module.css"
import { FaEllipsisV } from "react-icons/fa";

import InstHomeCard from "../instructor/cards/InstHomeCard"
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const StudentHome = () =>{
  const {Schedual} = useOutletContext();
  const [scheduals , setScheduals] = useState([{CRN:'1'},{name:'2'},{StartTime:'3'},{EndTime:'4'},{Room:'5'}]);


  useEffect(() =>{
    setScheduals(Schedual)

  },[Schedual])
  return(
    
      <div className={style.studentHomeContainer}>
        <InstHomeCard 
        title={'Today Lectures'}
        options={<FaEllipsisV/>}
        body={
        <div className={style.todatLecturesContainer}>
          <div className={style.todatLecturesTiltesColumns}>
              <div className={style.todatLecturesTitle}>
                <p>CRN</p>
              </div>
              <div className={style.todatLecturesTitle}>
              <p>Course Name</p>
              </div>
              <div className={style.todatLecturesTitle}>
              <p>Start Time</p>
              </div>
              <div className={style.todatLecturesTitle}>
              <p>End Time</p>
              </div>
              <div className={style.todatLecturesTitle}>
              <p>Room Number</p>
              </div>
          </div>
          { scheduals.map(onGo =>
            <div key={onGo.CRN} className={style.todatLecturesColumns}>
              <div className={style.todatLecturesRows}>
                <p>{onGo.CRN}</p>
              </div>
              <div className={style.todatLecturesRows}>
              <p>{onGo.name}</p>
              </div>
              <div className={style.todatLecturesRows}>
              <p>{onGo.StartTime}</p>
              </div>
              <div className={style.todatLecturesRows}>
              <p>{onGo.EndTime}</p>
              </div>
              <div className={style.todatLecturesRows}>
              <p>{onGo.Room}</p>
              </div>
            </div>
            
            )}
        </div> 
        }/>
      </div>

  )


}

export default StudentHome;