import styles from "./PagesContainer.module.scss";
import {Outlet} from 'react-router-dom'

function PagesContainer (){

    return (
        
        <div className={styles.pagesContainer}>
        <Outlet/>
            
        </div>
        
    )
}
export default PagesContainer;