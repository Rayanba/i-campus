import UpperCard from '../UpperCard';
import style from './FacilitiesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function FacilitiesCard (){

    return (
            <UpperCard
            title={'Facilites'}
            options= {<FaEllipsisV/>}
            body= {
                <div className={style.UpperFacilitiesContainer }>
                    <div className={style.UpperFacilitiesleft }>
                        <h3>Class Rooms</h3>
                        <div className={style.UpperFacilitiesBarCont }>
                            <div className={style.UpperFacilitiesBarVal }>
                            </div>
                        </div>
                        <h3>Labs</h3>
                        <div className={style.UpperFacilitiesBarCont }>
                            <div className={style.UpperFacilitiesBarVal }>
                            </div>
                        </div>
                    </div>
                    <div className={style.UpperFacilitiesRight}>
                        <h3>Theatre</h3>
                        <div className={style.UpperFacilitiesBarCont }>
                            <div className={style.UpperFacilitiesBarVal }>
                            </div>
                        </div>
                        <h3>Office</h3>
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