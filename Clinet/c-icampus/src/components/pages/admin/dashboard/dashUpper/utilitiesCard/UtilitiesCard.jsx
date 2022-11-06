import UpperCard from '../UpperCard';
import style from './UtilitiesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";
import { useState, useEffect } from 'react';








function UtilitiesCard (){

	const data = {
		"projector": [
			{
				"count(utility_name)": 8,
				"count(utility_avaliability)": 8
			}
		],
		"printer": [
			{
				"count(utility_name)": 7,
				"count(utility_avaliability)": 7
			}
		],
		"powerPank": [
			{
				"count(utility_name)": 20,
				"count(utility_avaliability)": 7
			}
		],
		"computer": [
			{
				"count(utility_name)": 7,
				"count(utility_avaliability)": 7
			}
		],
		"vending Mashine": [
			{
				"count(utility_name)": 7,
				"count(utility_avaliability)": 7
			}
		],
		"air Condition": [
			{
				"count(utility_name)": 9,
				"count(utility_avaliability)": 9
			}
		],
		"water Cooler": [
			{
				"count(utility_name)": 9,
				"count(utility_avaliability)": 9
			}
		]
	} 
	// // call names 
	// console.log(typeof( data.printer))
	
	// const namess = Object.entries(data);
	// console.log(`entries ${JSON.stringify(namess[0])}`);

	// // console.log(JSON.parse)
	// // const values = JSON.stringify(data)
	// // console.log(` values ${values}`);
	
	const [dataa, setDataa] = useState(data);
	// const [values, setValues] = useState();
	
	// cons/ole.log(setValues)
	
	

	// useEffect( () => {
	// 	const valus = Object.values(dataa.printer[0]);
	// 	const max = JSON.stringify(valus[0]) ;
	// 	const min = JSON.stringify(valus[1]) ;
	// 	const result = (min / max ) * 100;
	// },[dataa])
		
	// widthSize();

	


	const blue = '#83AEF2';
	// const widtha = '55%';

	return (
			<div className={style.uCardContainer}>
					<UpperCard
					title={'Utilities'}
					options= {<FaEllipsisV/>}
					body= {
					<div className={style.uCardWrapper}>
						<ul>
								{Object.keys(dataa).map(name => 
									<li key={name}>
										<h4>{name}</h4>
										<div className={style.utilityBarContainer} >
										<div style={{
											backgroundColor: `${blue}`,
											height: '100%',
											borderRadius: '2rem',
											width: `50%`
										}}></div>
										</div>
									</li>
									)
								}
						</ul>
					</div>
					}
					/>


			</div>
					

			
			
	)
}
export default UtilitiesCard;