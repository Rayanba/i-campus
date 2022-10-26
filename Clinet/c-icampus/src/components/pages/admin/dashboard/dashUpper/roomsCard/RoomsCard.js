import UpperCard from '../UpperCard';
// import styles from './RoomsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function RoomsCard (){

    return (
       
        
            <UpperCard
            title={'Rooms'}
            options= {<FaEllipsisV/>}
            body= {<h5>Hello attendace</h5>}
            />
            

        
        
    )
}
export default RoomsCard;