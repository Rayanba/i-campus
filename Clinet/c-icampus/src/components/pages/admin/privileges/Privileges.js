import styles from "./Privileges.module.css";
import Cardy from "./Cardy";
import { FaEllipsisV } from "react-icons/fa";

function Privileges (){

    return (
        <>
        <div className={styles.mainprivileges}>
            <form>
                <div className={styles.messageContainer}>
                    <label>Send Message</label>
                    <input></input>
                    <button>Send</button>

                </div>
            </form>
        </div>
        </>
    )
}
export default Privileges;