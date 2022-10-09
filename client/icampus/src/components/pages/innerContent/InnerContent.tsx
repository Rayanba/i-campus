import styles from "./InnerContent.module.scss";
import {Outlet} from 'react-router-dom'

function InnerContent (){

    return (
        <div className={styles.innercontent}>
            <Outlet/>
        </div>
        
    )
}
export default InnerContent;