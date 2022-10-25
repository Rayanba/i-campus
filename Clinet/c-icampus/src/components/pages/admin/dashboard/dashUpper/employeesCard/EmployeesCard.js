import UpperCard from '../UpperCard';
// import styles from './EmployeesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function EmployeesCard (){

    return (
       
        
            <UpperCard
            title={'Employees'}
            options= {<FaEllipsisV/>}
            body= {<h1>Hello attendace</h1>}
            />
            

        
        
    )
}
export default EmployeesCard;