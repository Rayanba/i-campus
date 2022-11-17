import UpperCard from '../UpperCard';
import style from './StudentsCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);



function StudentsCard (){
  const {upperStudents} = useOutletContext()
  const [inBuilding , setInBuilding] = useState(0);
  const [inRoom , setInRoom] = useState(0);
   useEffect(() =>{
    try {
      setInBuilding(upperStudents[0]['stdInBuilding']);
      setInRoom(upperStudents[1]['InRoom']);
      
    } catch (err) {
      console.error(err)
    }
  },[upperStudents]);

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
        data: [inBuilding, inRoom],
        backgroundColor: [
          '#83aef2',
          '#9983f2',
        ],
        borderColor: [
          '#83aef2',
          '#9983f2',
        ],
        borderWidth: 0,
      },
    ],
  };







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