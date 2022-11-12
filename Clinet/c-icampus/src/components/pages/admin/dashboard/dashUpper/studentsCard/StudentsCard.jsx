import UpperCard from '../UpperCard';
import style from './StudentsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function StudentsCard (){
    return (
            <UpperCard
            title={'Student'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.lecturePieChartContainer}>
                </div>
            }
            />
    )
}
export default StudentsCard;