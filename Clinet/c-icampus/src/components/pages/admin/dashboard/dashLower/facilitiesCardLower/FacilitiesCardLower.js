import LowerCard from '../LowerCard';
// import styles from "./FacilitiesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function FacilitiesCardLower (){
    return (
        <LowerCard
        title={'Facilities Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default FacilitiesCardLower;