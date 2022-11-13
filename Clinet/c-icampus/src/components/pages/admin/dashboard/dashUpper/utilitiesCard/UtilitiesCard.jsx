import { useContext, useState,  useEffect } from 'react';
import { SocketContext } from '../../../../../../context/SocketProvider';
import UpperCard from '../UpperCard';
import style from './UtilitiesCard.module.css';
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';


function UtilitiesCard (){
	const socket = useContext(SocketContext);
	const [barColor, setBarColor] = useState('');
	const {upperUtilities} = useOutletContext();

	const blue = '#83aef2';
	

	// console.log(1- (utili[1] * utili[0] / 100))
	const color = () =>{

	}
	return (
			<div className={style.uCardContainer}>
					<UpperCard
					title={'Utilities'}
					options= {<FaEllipsisV/>}
					body= {
					<div className={style.uCardWrapper}>
						<ul>
					{Object.entries(upperUtilities).map(utili => 
						<li key={utili} >
							<h3 >{utili[0][0].charAt(0).toUpperCase() + utili[0].slice(1)}</h3>
							<div className={style.utilityBarContainer} >
							<div style={{
								backgroundColor: `${blue}`,
								height: '90%',
								borderRadius: '2rem',
								width: `${ utili[1][1] * 100 / utili[1][0]}%`,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-end',
								color: "#FFFDFA",
								alignItems: 'center',
								border: '0.5px solid #4facff',

								
							}}>
								<p style={{marginRight: '0.5rem', fontWeight: '500',textShadow: '1px 1px 3px black'}}>{utili[1][1]}/{utili[1][0]}</p>
							</div>
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

