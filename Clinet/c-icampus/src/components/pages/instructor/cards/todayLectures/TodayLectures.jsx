import style from './TodayLectures.module.css'
import InstHomeCard from '../InstHomeCard';
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';








const TodayLectures = () => {

  const {todayLectures} = useOutletContext();
  console.log(todayLectures)
  

  return(
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
      { todayLectures.map(onGo =>
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
    }
    />
  )
}
export default TodayLectures;

