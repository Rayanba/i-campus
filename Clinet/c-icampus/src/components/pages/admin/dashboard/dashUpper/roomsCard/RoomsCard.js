import UpperCard from '../UpperCard';
// import styles from './RoomsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function RoomsCard (){

    return (
       
        
            <UpperCard
            title={'Employees'}
            options= {<FaEllipsisV/>}
            body= {<h1>Hello attendace</h1>}
            />
            

        
        
    )
}
export default RoomsCard;