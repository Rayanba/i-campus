import style from './AvailableClassRooms.module.css'
import { FaEllipsisV } from "react-icons/fa";
import AvailableCard from './availableCard/AvailableCard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);



const AvailableClassRooms = () => {
  const {floorOne, floorTwo , pieChart} = useOutletContext();
  const option ={
    aspectRatio: [2],
    plugins: {
  
      legend: {
        labels: {boxHeight: 50, boxWidth: 100, font :{size: 24, family: 'Poppins'}, borderRadius: 20 },
        position: 'right',
      },
  }
  }
  const data = {
  
    labels: ['Unavailable', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [pieChart[1], pieChart[0], pieChart[2]],
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
  
  
  // const  imagess = createImage();
  return(
    <AvailableCard
    title={'Available Class Rooms'}
    options={<FaEllipsisV/>}
    body={
      <div className={style.availableClassRoomsContainer}>
        <div className={style.adminLowerFacilitiesBodyContainer}>
            <div className={style.firstFloor}>
              {floorOne.map (lf =>
              <div key={lf.room} className={ lf.availabil === 0
                ? style.adminAvailableClassRoomsRoomOOS
                : lf.Busy == 1
                  ? style.adminAvailableClassRoomsRoomBusy
                  : style.adminAvailableClassRoomsRoom
              }><p>{lf.room}</p></div>
               
               )}
          </div>



          <div className={style.secFloor}>
            
            {floorTwo.map (lf =>
              <div key={lf.room} className={ lf.availabil === 0
                ? style.adminAvailableClassRoomsRoomOOS
                : lf.Busy == 1
                  ? style.adminAvailableClassRoomsRoomBusy
                  : style.adminAvailableClassRoomsRoom
              }><p>{lf.room}</p></div>
               
               )}
          </div>

        </div>
        <div className={style.ChartPart}>
        <Doughnut data={data} className={style.dunot} options={option} />
        </div>

      </div>
     
      
    }
    />
  )
}
export default AvailableClassRooms;