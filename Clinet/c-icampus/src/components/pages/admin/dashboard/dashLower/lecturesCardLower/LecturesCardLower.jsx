import style from "./LecturesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import LowerCard from '../LowerCard';
import { useOutletContext } from "react-router-dom";


/// the Map need To have a Key


function LecturesCardLower (){
  const {lowerLectures} = useOutletContext();
  // console.log(lowerLectures[0]['CRN']);

    return (
        <LowerCard
        title={'Today Lectures'}
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
                <p>Start Time</p>
              </div>
              <div className={style.adminLowerLecturesTitle}>
                <p>End Time</p>
              </div>
              <div className={style.adminLowerLecturesTitle}>
                <p>Room NO</p>
              </div>
              <div className={style.adminLowerLecturesTitleLast}>
                <p>instructor</p>
              </div>
            </div>
              {lowerLectures.map(ll => 
        
                <div key={ll.CRN} className={style.adminLowerLectueColumnContainer} >
                   <div className={style.adminLowerLectueData}>
                    <p>{ll.CRN}</p>
                   </div>
                   <div className={style.adminLowerLectueData}>
                   <p>{ll.name}</p>
                   </div>
                   <div className={style.adminLowerLectueData}>
                   <p>{ll.StartTime}</p>
                   </div>
                   <div className={style.adminLowerLectueData}>
                   <p>{ll.EndTime}</p>
                   </div>
                   <div className={style.adminLowerLectueData}>
                   <p>{ll.Room}</p>
                   </div>
                   <div className={style.adminLowerLectueDataLast}>
                   <p>{ll.Instructor}</p>
                   </div>
                </div>
                )}
          </div>
        }
        />
    )
}
export default LecturesCardLower;