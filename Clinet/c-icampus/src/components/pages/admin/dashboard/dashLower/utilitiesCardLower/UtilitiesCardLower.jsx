import LowerCard from '../LowerCard';
// import styles from "./UtilitiesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function UtilitiesCardLower (){
    return (
        <LowerCard
        title={'Utilities Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default UtilitiesCardLower;