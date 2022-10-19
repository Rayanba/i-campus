import styles from "../cardsStyle/CardsStyle.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function InstructorsCard (){

    return (
        
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.cardtitle}>
                    <h4>Instructors</h4>
                </div>
                <div className={styles.cardoptions}>
                    <FaEllipsisV/>
                </div>
            </div>
            <div className={styles.cardBody}>   
            </div>
        </div>
        
    )
}
export default InstructorsCard;