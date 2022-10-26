import UpperCard from '../UpperCard';
// import styles from './StudentsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function StudentsCard (){

    return (
       
        
            <UpperCard
            title={'Student'}
            options= {<FaEllipsisV/>}
            body= {<h5>Hello attendace</h5>}
            />
            

        
        
    )
}
export default StudentsCard;