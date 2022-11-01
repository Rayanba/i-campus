import UpperCard from '../UpperCard';
// import styles from './LecturesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function LecturesCard (){

    return (
       
        
            <UpperCard
            title={'Lectures'}
            options= {<FaEllipsisV/>}
            body= {<h5>Hello attendace</h5>}
            />
            

        
        
    )
}
export default LecturesCard;