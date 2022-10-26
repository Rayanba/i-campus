import styles from "./Topbar.module.css";
import logo7 from "../../../assets/png/logo7.png";
import { FaBell, FaEllipsisV } from "react-icons/fa";

function Topbar (){

    return (
        <>
        <div className={styles.topbarContainer}>
            <div className={styles.logoDiv}>
                <img src={logo7} alt="logo" height={70}/>
               
            </div>
            <div className={styles.timeDateDiv}>
                <div className={styles.clockDiv} >
                    <h3>05:12 pm</h3>
                </div>
                <div className={styles.DateDiv} >
                    <h3>Tuesday 8th Novermber</h3>
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