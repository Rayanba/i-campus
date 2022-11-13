import UpperCard from '../UpperCard';
import style from './LecturesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const option ={
  aspectRatio: [2],
  plugins: {

    legend: {
      labels: {boxHeight: 20, boxWidth: 30, font :{size: 16, family: 'Poppins'}, borderRadius: 20 },

        
      position: 'left',
    },
}
}
export const data = {
  labels: ['On Going', 'Up Comming', 'Finished'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 20],
      backgroundColor: [
        '#ff726f',
        '#83aef2',
        '#83f2d0',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
function LecturesCard (){
    return (
            <UpperCard
            title={'Lectures'}
            options= {<FaEllipsisV/>}
            body= {
              <div className={style.adminLectureChartPart}>
                  <Doughnut data={data} className={style.dunot} options={option} />
              </div>
                
            }
            />
    )
}
export default LecturesCard;