import UpperCard from '../UpperCard';
import style from './FacilitiesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);



function FacilitiesCard (){
  const {upperFacilities } = useOutletContext();
  // console.log(upperFacilities[0]);
const option ={
  aspectRatio: [2],
  plugins: {
    legend: {
      labels: {boxHeight: 20, boxWidth: 10, font :{size: 16, family: 'Poppins'}, borderRadius: 20 },
      position: 'left',
    },
}
}

const data = {
  labels: ['OOS', 'Busy', 'Available'],
  datasets: [
    {
      label: '# of Votes',
      data: [upperFacilities[1], upperFacilities[0],upperFacilities[2] - upperFacilities[0]],
      backgroundColor: [
        '#ff726f',
        '#83aef2',
        '#f5f5f5',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        '#bfbfbf',
      ],
      borderWidth: 1,
    },
  ],
};





    return (
            <UpperCard
            title={'Facilites'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.UpperFacilitiesContainer }>
                    <Doughnut data={data} className={style.dunot} options={option} />
                </div>
            }
            />
    )
}
export default FacilitiesCard;