import LowerCard from '../LowerCard';
import style from "./UtilitiesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';


function UtilitiesCardLower (){
  const {lowerUtilities} = useOutletContext();


    return (
        <LowerCard
        title={'Utilities Lower'}
        options={<FaEllipsisV/>}
        body={
        <div className={style.adminUtilitiesLowerContainer}>
            <div className={style.adminUtilitiesLowerleft}>
                
            </div>

            <div className={style.adminUtilitiesLowerRight}>
                <p className={style.utiliRightTitle}>Reports</p>
                <div className={style.adminLowerUtilitiesTiltesContainer}>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>name</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>Utility ID</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>Room</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>user ID</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>User Name</p>
                    </div>
                </div>

                {lowerUtilities.map(lowUti =>
                    <div  key={lowUti.reportNumber} className={style.adminLowerUtilityColumnContainer}> 
                    <div className={style.adminLowerUtilityData}>
                        <p>{lowUti.utility}</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{lowUti.id }</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{lowUti.Room}</p>
                    </div>
                
                    <div className={style.adminLowerUtilityData}>
                        <p>{lowUti.userPostIt}</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{lowUti.name}</p>
                    </div>
                    
                </div>
                    )}
            </div>
        </div>
            
    
    
        }
        />
    )
}
export default UtilitiesCardLower;