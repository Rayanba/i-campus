import styles from "./Privileges.module.css";
import Cardy from "./Cardy";
import { FaEllipsisV } from "react-icons/fa";

function Privileges (){

    return (
        <>
        <div className={styles.mainprivileges}>
            <Cardy 
            title={'privileges'}
            options={<FaEllipsisV/>}
            body={<h1>hello</h1>}
            />
        </div>
        </>
    )
}
export default Privileges;