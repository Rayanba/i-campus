import styles from "../cardsStyleLower/CardsStyleLower.module.css"; 
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
// import Users from "../../../../../Users";
function EmployeesCardLower (){

    return (
        
        <div className={styles.cardContainerLower}>
            <div className={styles.cardHeaderLower}>
                <div className={styles.cardtitleLower}>
                    <h4>Employees Lower</h4>
                </div>
                <div className={styles.cardoptionsLower}>
                    <FaEllipsisV/>
                </div>
            </div>
            <div className={styles.cardBodyLower}>   
            <h1>Admins Page</h1>
            <br />
            
            <br />
            <div className={styles.flexGrow}>
                <Link to="/">Home</Link>
            </div>
            </div>
        </div>
        
    )
}
export default EmployeesCardLower;