import style from './InstHome.module.css';
import TodayLectures from './cards/todayLectures/TodayLectures';
import NowClass from './cards/nowClass/NowClass';
import AvailableClassRooms from './cards/availableClassRoom/AvailableClassRooms';

const InstHome = () => {
  return(
   
      <div className={style.instructorMainContainer}>
        <div className={style.instHomeUpper}>


          <div className={style.instHomeUpperLeft}>
            <NowClass/>
          </div>


          <div className={style.instHomeUpperRight}>
            <TodayLectures/>
          </div>


        </div>


        <div className={style.instrutorHomeLowerNew}>
          <div className={style.instrutorHomeWrapper}>
            <AvailableClassRooms/>
          </div>
        </div>
      </div>
  )
}

export default  InstHome;