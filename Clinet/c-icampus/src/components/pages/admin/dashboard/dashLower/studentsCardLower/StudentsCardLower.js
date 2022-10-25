import LowerCard from '../LowerCard';
// import styles from "./StudentsCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function StudentsCardLower (){
    return (
        <LowerCard
        title={'Students Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default StudentsCardLower;