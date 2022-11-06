import UpperCard from '../UpperCard';
// import styles from './RoomsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function RoomsCard (){

    return (
       
        
            <UpperCard
            title={'Facilites'}
            options= {<FaEllipsisV/>}
            body= {
                <div>
                    <h5>Hello attendace</h5>
                    <h5>Hello attendace</h5>

                </div>
                
        
            }
            />
            

        
        
    )
}
export default RoomsCard;