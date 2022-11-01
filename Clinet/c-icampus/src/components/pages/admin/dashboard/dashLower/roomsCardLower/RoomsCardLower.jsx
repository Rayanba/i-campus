import LowerCard from '../LowerCard';
// import styles from "./RoomsCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function RoomsCardLower (){
    return (
        <LowerCard
        title={'Rooms Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default RoomsCardLower;