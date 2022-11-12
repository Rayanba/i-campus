import styles from "./Topbar.module.css";
import logo7 from "../../../assets/png/logo7.png";
import { FaBell, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Topbar (){
    const [time, setTime] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
      setInterval(() => {
        const time = new Date();
        const date = new Date();
        setTime(time.toLocaleTimeString())
        setDate(date.toLocaleDateString())
      }, 1000);
    });

    return (
        <>
        <div className={styles.topbarContainer}>
            <div className={styles.logoDiv}>
                <Link>
                    <img src={logo7} alt="logo" height={70}/>
                </Link>
               
            </div>
            <div className={styles.timeDateDiv}>
                <div className={styles.clockDiv} >
                    <h3>{time}</h3>
                </div>
                <div className={styles.DateDiv} >
                    <h3>{date}</h3>
                </div>
            </div>
            <div className={styles.topRightIcons}>
                <div className={styles.alertDiv} >
                    <FaBell/>
                </div>
                <div className={styles.optionDiv} >
                    <FaEllipsisV className={styles.topBarDotIcon}/>
                </div>
            </div>



        </div>
        </>
    )
}
export default Topbar;