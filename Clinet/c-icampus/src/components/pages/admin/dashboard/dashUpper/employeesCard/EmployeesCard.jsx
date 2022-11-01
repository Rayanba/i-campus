import UpperCard from '../UpperCard';
// import styles from './EmployeesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function EmployeesCard (){

    return (
       
        
            <UpperCard
            title={'Employees'}
            options= {<FaEllipsisV/>}
            body= {<h5>Hello attendace</h5>}
            />
            

        
        
    )
}
export default EmployeesCard;