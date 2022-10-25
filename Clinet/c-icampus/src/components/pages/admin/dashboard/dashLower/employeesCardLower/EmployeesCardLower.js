import LowerCard from '../LowerCard';
// import styles from "./EmployeesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";


function EmployeesCardLower (){
    return (
        <LowerCard
        title={'Employees Lower'}
        options={<FaEllipsisV/>}
        body={<h1>hello</h1>}
        />
    )
}
export default EmployeesCardLower;