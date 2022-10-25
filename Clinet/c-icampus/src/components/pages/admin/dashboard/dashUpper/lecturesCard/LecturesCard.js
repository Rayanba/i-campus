import UpperCard from '../UpperCard';
// import styles from './LecturesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function LecturesCard (){

    return (
       
        
            <UpperCard
            title={'Lectures'}
            options= {<FaEllipsisV/>}
            body= {<h1>Hello attendace</h1>}
            />
            

        
        
    )
}
export default LecturesCard;