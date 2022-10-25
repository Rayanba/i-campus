import LowerCard from '../LowerCard';
// import styles from "./LecturesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function LecturesCardLower (){
    return (
        <LowerCard
        title={'Lectures Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default LecturesCardLower;