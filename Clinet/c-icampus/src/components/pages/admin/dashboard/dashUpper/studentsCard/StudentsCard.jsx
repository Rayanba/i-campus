import UpperCard from '../UpperCard';
// import styles from './StudentsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function StudentsCard (){

    return (
       
        
            <UpperCard
            title={'Student'}
            options= {<FaEllipsisV/>}
            body= {
            
                <div>
                    <h5>in campus</h5>
                    <h5>in lecture</h5>
                    <h5>Total</h5>
                </div>

            }
            />
            

        
        
    )
}
export default StudentsCard;