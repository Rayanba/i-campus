import styles from "../cardsStyle/CardsStyle.module.scss"; 
import { FaEllipsisV } from "react-icons/fa";

function EmployeesCard (){

    return (
        
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.cardtitle}>
                    <h4>Employees</h4>
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
export default EmployeesCard;