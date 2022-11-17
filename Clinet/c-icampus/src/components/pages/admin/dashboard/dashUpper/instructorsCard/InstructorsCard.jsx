import UpperCard from '../UpperCard';
import style from './InstructorsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);


function InstructorsCard (){
  const {upperInstructors} = useOutletContext()
  const [inBuilding , setInBuilding] = useState(0);
  const [inRoom , setInRoom] = useState(0);
  // console.log(upperInstructors[1]['InRoom']);
  // const inBuilding = upperInstructors[0]['instInBuilding']
  useEffect(() =>{
    try {
      setInBuilding(upperInstructors[0]['instInBuilding']);
      setInRoom(upperInstructors[1]['InRoom']);
      
    } catch (err) {
      console.error(err)
    }
  },[upperInstructors]);

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
        data: [ inBuilding , inRoom ],
        backgroundColor: [
          '#83aef2',
          '#9983f2',
        ],
        borderColor: [
          '#83aef2',
          '#9983f2',
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