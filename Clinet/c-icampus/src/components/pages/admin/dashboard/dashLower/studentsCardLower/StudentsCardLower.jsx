import LowerCard from '../LowerCard';
import style from "./StudentsCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function StudentsCardLower (){
    const {lowerStudents} = useOutletContext();
    const [first, setfirst] = useState([{'email': ""}, {'firstName': ""}, {'lastName': ""}, {'phone': ""}, {'username': ""}]);
    
    useEffect(() => {
        try {
            if(lowerStudents){
                setfirst(lowerStudents)
            }
            
        } catch (err) {
            console.error(err)
        }
    }, [lowerStudents]);

    return (
        <LowerCard
        title={'Student In Buiding'}
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
                {first.map(ls => 
                    <div key={ls.username} className={style.adminLowerUtilityColumnContainer}> 
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.username} </p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.email}</p>
                    </div>
                    <div className={style.adminLowerUtilityData}>
                        <p>{ls.firstName } + { ls.lastName}</p>
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
export default StudentsCardLower;