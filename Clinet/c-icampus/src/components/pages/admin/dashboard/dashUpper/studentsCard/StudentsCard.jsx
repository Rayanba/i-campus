import UpperCard from '../UpperCard';
import style from './StudentsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export const option ={
  aspectRatio: [2],
  plugins: {

    legend: {
      labels: {boxHeight: 25, boxWidth: 50, font :{size: 16, family: 'Poppins'}, borderRadius: 20 },


      position: 'left',

    },
    
    
    

}
}


export const data = {

  labels: ['In Building', 'In Room'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
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

function StudentsCard (){
    return (
            <UpperCard
            title={'Student'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.adminStudentChartPart}>
                    <Doughnut data={data} className={style.dunot} options={option} />
                </div>
            }
            />
    )
}
export default StudentsCard;