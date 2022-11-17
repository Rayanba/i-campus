import LowerCard from '../LowerCard';
import style from "./InstructorsCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';


function InstructorsCardLower (){
    const {lowerInstructors} = useOutletContext();
    // console.log(lowerInstructors)
    const [instInfo, setInstInfo] = useState([{'email': ""}, {'firstName': ""}, {'lastName': ""}, {'phone': ""}, {'username': ""}]);
    
    useEffect(() =>{
        try {
            if(lowerInstructors){

                setInstInfo(lowerInstructors);
                console.log('wooow')
            }
            
        } catch (err) {
            // console.error(err)
        }

    },[lowerInstructors]);


    return (
        <LowerCard
        title={'Intstructor In Buiding'}
        options={<FaEllipsisV/>}
        body={
            <div className={style.adminUtilitiesLowerContainer}>
            <div className={style.adminUtilitiesLowerRight}>
                
                <div className={style.adminLowerUtilitiesTiltesContainer}>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>ID</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>Email</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>Name</p>
                    </div>
                    <div className={style.adminLowerUtilitiesTitle}>
                        <p>phone</p>
                    </div>
                </div>

                { instInfo.map(ls => 
                <div key={ls.username}  className={style.adminLowerUtilityColumnContainer}> 
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.username}</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.email}</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.firstName }</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.phone}</p>
                    </div>
                </div>
                )}
                 
            </div>
        </div>
        }

        />
    )
}
export default InstructorsCardLower;