import UpperCard from '../UpperCard';
import style from './FacilitiesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function FacilitiesCard (){

    return (
       
        
            <UpperCard
            title={'FacilitesCard'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.UpperFacilitiesContainer }>
                    <div className={style.UpperFacilitiesleft }>
                        <h5>Class Rooms</h5>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                        <h5>Labs</h5>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                    </div>
                    <div className={style.UpperFacilitiesRight}>
                        <h5>Theatre</h5>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                        <h5>Office</h5>
                            <div className={style.UpperFacilitiesBarCont }>
                                <div className={style.UpperFacilitiesBarVal }>

                                </div>
                            </div>
                    </div>

                </div>
                
        
            }
            />
            

        
        
    )
}
export default FacilitiesCard;