import UpperCard from '../UpperCard';
import styles from './FacilitiesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function FacilitiesCard (){

    return (
       
        <div className={styles.fCardContainer}>
            <UpperCard
            title={'Facilites'}
            options= {<FaEllipsisV/>}
            body= {<h5>Hello </h5>}
            />

        </div>
            

       
        
    )
}
export default FacilitiesCard;