import styles from "./Messages.module.css";
import Cardy from "./Cardy";
import { FaEllipsisV } from "react-icons/fa";

function Messages (){

    return (
        <>
        <div className={styles.mainMessagesContainer}>
            
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
export default Messages;