import UpperCard from '../UpperCard';
import style from './InstructorsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);


function InstructorsCard (){
  const {upperInstructors} = useOutletContext()

  const option ={
    aspectRatio: [2],
    plugins: {
      legend: {
        labels: {boxHeight: 25, boxWidth: 50, font :{size: 16, family: 'Poppins'}, borderRadius: 20 },
        position: 'left',
      },
  }
  }
  
  const data = {
  
    labels: ['In Building', 'In Room'],
    datasets: [
      {
        label: '# of Votes',
        data: [upperInstructors[0], upperInstructors[1]],
        backgroundColor: [
          '#ff726f',
          '#83aef2',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
    return (
      <UpperCard
      title={'Instructor'}
      options= {<FaEllipsisV/>}
      body= {
        <div className={style.adminInstructorChartPart}>
                    <Doughnut data={data} className={style.dunot} options={option} />
                </div>
          }
      />
    )
}
export default InstructorsCard;