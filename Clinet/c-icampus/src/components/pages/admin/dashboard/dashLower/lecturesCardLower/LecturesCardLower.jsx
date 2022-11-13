import style from "./LecturesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import LowerCard from '../LowerCard';



function LecturesCardLower (){
    return (
        <LowerCard
        title={'Lectures Lower'}
        options={<FaEllipsisV/>}
        body={
          <div className={style.adminLowerLecturesContainer}>

            <div className={style.adminLowerLecturesTiltesContainer}>
              <div className={style.adminLowerLecturesTitle}>
                <p>CRN</p>
              </div>
              <div className={style.adminLowerLecturesTitle}>
                <p>Course Name</p>
              </div>
              <div className={style.adminLowerLecturesTitle}>
                <p>Instructor Name</p>
              </div>
              <div className={style.adminLowerLecturesTitle}>
                <p>Start Time</p>
              </div>
              <div className={style.adminLowerLecturesTitle}>
                <p>End Time</p>
              </div>
              <div className={style.adminLowerLecturesTitleLast}>
                <p>unworking Facilities</p>
              </div>
            </div>


              <div className={style.adminLowerLectueColumnContainer}>
                <div className={style.adminLowerLectueData}>
                  <p>23563</p>
                </div>
                <div className={style.adminLowerLectueData}>
                  <p>TI-230</p>
                </div>
                <div className={style.adminLowerLectueData}>
                  <p>Abdullah Albarakati</p>
                </div>
                <div className={style.adminLowerLectueData}>
                  <p>5:00</p>
                </div>
                <div className={style.adminLowerLectueData}>
                  <p>5:55</p>
                </div>
                <div className={style.adminLowerLectueDataLast}>
                  <p>2</p>
                </div>
              </div>

          </div>
        }
        />
    )
}
export default LecturesCardLower;