import styles from "./Topbar.module.scss";
import logo6 from "../../assets/png/logo6.png";
import { FaBell, FaEllipsisV } from "react-icons/fa";

function Topbar (){

    return (
        <>
        <div className={styles.topbarContainer}>
            <div className={styles.logoDiv}>
                <img src={logo6} alt="logo" height={80}/>
               
            </div>
            <div className={styles.timeDateDiv}>
                <div className={styles.clockDiv} >
                    <h2>05:12 pm</h2>
                </div>
                <div className={styles.DateDiv} >
                    <h2>Tuesday 8th Novermber</h2>
                </div>
            </div>
            <div className={styles.topRightIcons}>
                <div className={styles.alertDiv} >
                    <FaBell/>
                </div>
                <div className={styles.optionDiv} >
                    <FaEllipsisV/>
                </div>
            </div>



        </div>
        </>
    )
}
export default Topbar;