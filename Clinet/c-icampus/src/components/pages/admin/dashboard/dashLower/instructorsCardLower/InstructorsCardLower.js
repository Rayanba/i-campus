import LowerCard from '../LowerCard';
// import styles from "./InstructorsCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function InstructorsCardLower (){
    return (
        <LowerCard
        title={'Instructors Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default InstructorsCardLower;