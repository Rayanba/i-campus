import UpperCard from '../UpperCard';
// import styles from './InstructorsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function InstructorsCard (){

    return (
       
        
            <UpperCard
            title={'Instructor'}
            options= {<FaEllipsisV/>}
            body= {
                <div>
                    <h5>in campus</h5>
                    <h5>in lecture</h5>
                    <h5>Total</h5>
                </div>}
            />
            

        
        
    )
}
export default InstructorsCard;