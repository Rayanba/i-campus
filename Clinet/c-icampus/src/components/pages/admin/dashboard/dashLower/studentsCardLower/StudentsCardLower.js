import styles from "../cardsStyleLower/CardsStyleLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function StudentsCardLower (){

    return (
        <div className={styles.cardContainerLower}>
            <div className={styles.cardHeaderLower}>
                <div className={styles.cardtitleLower}>
                    <h4>Student Lower</h4>
                </div>
                <div className={styles.cardoptionsLower}>
                    <FaEllipsisV/>
                </div>
            </div>
            <div className={styles.cardBodyLower}>   
            </div>
        </div>
    )
}
export default StudentsCardLower;