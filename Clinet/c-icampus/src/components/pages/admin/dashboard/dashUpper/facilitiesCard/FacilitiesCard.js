import styles from './FacilitiesCard.module.css';
import { FaEllipsisV } from "react-icons/fa";

function FacilitiesCard (){
    
    return(
        <div className={styles.fCardContainer}>
            
            <div className={styles.fCardHeader}>
                <div className={styles.fCardtitle}>
                    <h4>Facilities</h4>
                </div>
                <div className={styles.fCardoptions}>
                    <FaEllipsisV/>
                </div>
            </div>

            <div className={styles.fCardBody}>
                
            </div>
            
        </div>
        
    )
}

export default FacilitiesCard;
