import UpperCard from '../UpperCard';
import style from './InstructorsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";



function InstructorsCard (){

    return (
      <UpperCard
      title={'Instructor'}
      options= {<FaEllipsisV/>}
      body= {
        <div className={style.lecturePieChartContainer}>
            
        </div>
          }
      />
    )
}
export default InstructorsCard;