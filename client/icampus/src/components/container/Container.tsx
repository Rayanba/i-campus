import styles from "./Container.module.scss";
import {Outlet} from 'react-router-dom'

function Container (){

    return (
        
        <div className={styles.container}>
        <Outlet/>
            
        </div>
        
    )
}
export default Container;