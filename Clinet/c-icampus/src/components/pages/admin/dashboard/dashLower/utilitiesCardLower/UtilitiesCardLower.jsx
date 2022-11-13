import LowerCard from '../LowerCard';
import style from "./UtilitiesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function UtilitiesCardLower (){
    return (
        <LowerCard
        title={'Utilities Lower'}
        options={<FaEllipsisV/>}
        body={
        <div className={style.adminUtilitiesLowerContainer}>
            <div className={style.adminUtilitiesLowerleft}>
                
            </div>
            <div className={style.adminUtilitiesLowerRight}></div>
        </div>
            
    
    
        }
        />
    )
}
export default UtilitiesCardLower;