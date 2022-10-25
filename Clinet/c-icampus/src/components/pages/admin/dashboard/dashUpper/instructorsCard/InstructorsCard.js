import UpperCard from '../UpperCard';
// import styles from './InstructorsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function InstructorsCard (){

    return (
       
        
            <UpperCard
            title={'Instructor'}
            options= {<FaEllipsisV/>}
            body= {<h1>Hello attendace</h1>}
            />
            

        
        
    )
}
export default InstructorsCard;