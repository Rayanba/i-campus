import UpperCard from '../UpperCard';
import style from './InstructorsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [ 'Finished', 'Up Comming', 'In progress' ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 5, 3],
        backgroundColor: [
          '#f283ae',
          '#83AEF2',
          '#9083f2',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
         
        ],
        borderWidth: 0.5,
      },
    ],
  };
function InstructorsCard (){

    return (
       
        
            <UpperCard
            title={'Instructor'}
            options= {<FaEllipsisV/>}
            body= {
                    <div className={style.lecturePieChartContainer}>
                    <div className={style.PieChartDiv}>
                        <div className={style.doff}></div>
                        <Pie data={data} />
                    </div>
                </div>
               }
            />
            

        
        
    )
}
export default InstructorsCard;