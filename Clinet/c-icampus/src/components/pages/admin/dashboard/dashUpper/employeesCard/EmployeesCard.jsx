import UpperCard from '../UpperCard';
import style from './EmployeesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

function EmployeesCard (){
  const {upperEmployees} = useOutletContext()
  const [inBuilding , setInBuilding] = useState(0);
  console.log(upperEmployees)
  useEffect(() =>{
    try {
      if(upperEmployees){
        setInBuilding(upperEmployees[0]['empInBuilding']);
      }
    } catch (err) {
      console.error(err)
    }
  },[upperEmployees]);



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
    labels: ['In Building'],
    datasets: [
      {
        label: '# of Votes',
        data: [inBuilding, 9],
        backgroundColor: [
          '#83aef2',
          '#f5f5f5',
        ],
        borderColor: [
          '#83aef2',
          '#f5f5f5',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <UpperCard
    title={'Employees'}
    options= {<FaEllipsisV/>}
    body= {
      <div className={style.adminEmployeesChartPart}>
          <Doughnut data={data} className={style.dunot} options={option} />
      </div>
    }
    />
  )
}
export default EmployeesCard;