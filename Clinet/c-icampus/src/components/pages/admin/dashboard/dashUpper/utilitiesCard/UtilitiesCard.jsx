import { useContext, useState,  useEffect } from 'react';
import { SocketContext } from '../../../../../../context/SocketProvider';
import UpperCard from '../UpperCard';
import style from './UtilitiesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";




function UtilitiesCard (){

	const socket = useContext(SocketContext);

	
	const [newUtilitiesLoad, setNewUtilitiesLoad] = useState([]);
	
	

	useEffect( () => {
		socket.on("NewutilitiesLoad", (utili) =>{
			// console.log(utili)
			setNewUtilitiesLoad(utili)

		});
		
		/////// CLEAN-UP ////////////
		
	},[])
	

	// const widtha = '55%';
	
	
	
	
	const blue = '#83AEF2';

	// console.log(1- (utili[1] * utili[0] / 100))

	return (
			<div className={style.uCardContainer}>
					<UpperCard
					title={'Utilities'}
					options= {<FaEllipsisV/>}
					body= {
					<div className={style.uCardWrapper}>
						<ul>
					
					{Object.entries(newUtilitiesLoad).map(utili => 
						<li key={utili} >
							<h4>{utili[0]}</h4>
							<div className={style.utilityBarContainer} >
							
							<div style={{
								backgroundColor: `${blue}`,
								height: '100%',
								borderRadius: '2rem',
								width: `${ utili[1][1] * 100 / utili[1][0]}%`
							}}></div>
							</div>
						</li>
						)} 
						</ul>
					</div>
					}
					/>
			</div>
					

			
			
	)
}
export default UtilitiesCard;