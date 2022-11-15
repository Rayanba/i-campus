import LowerCard from '../LowerCard';
import style from "./FacilitiesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

function FacilitiesCardLower (){

  const {lowerFacilities, lowerFacilitiesSec} = useOutletContext();
  // console.log(lowerFacilities); 
  // console.log(lowerFacilitiesSec); 

    return (
        <LowerCard
        title={'Facilities Lower'}
        options={<FaEllipsisV/>}
        body={
          <div className={style.adminLowerFacilitiesBodyContainer}>
            <div className={style.firstFloor}>
              {lowerFacilities.map (lf =>
              <div key={lf.room} className={ lf.availabil === 0
                ? style.adminAvailableClassRoomsRoomOOS
                : lf.Busy == 1
                  ? style.adminAvailableClassRoomsRoomBusy
                  : style.adminAvailableClassRoomsRoom
              }><p>{lf.room}</p></div>
               
               )}
          </div>



          <div className={style.secFloor}>
            
            {lowerFacilitiesSec.map (lf =>
              <div key={lf.room} className={ lf.availabil === 0
                ? style.adminAvailableClassRoomsRoomOOS
                : lf.Busy == 1
                  ? style.adminAvailableClassRoomsRoomBusy
                  : style.adminAvailableClassRoomsRoom
              }><p>{lf.room}</p></div>
               
               )}
          </div>

        </div>
        
        }
        />
    )
}
export default FacilitiesCardLower;