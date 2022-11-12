import style from './TodayLectures.module.css'
import InstHomeCard from '../InstHomeCard';
import { FaEllipsisV } from "react-icons/fa";








const TodayLectures = () => {

  const Lectures = ['23573', 'IT-230', '5:00', '5:55', '218']
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



      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>

      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>
      <div className={style.todatLecturesColumns}>
        <div className={style.todatLecturesRows}>
          <p>23573</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>IT-230</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:00</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>5:55</p>
        </div>
        <div className={style.todatLecturesRows}>
        <p>218</p>
        </div>
      </div>



      </div> 
    }
    />
  )
}
export default TodayLectures;