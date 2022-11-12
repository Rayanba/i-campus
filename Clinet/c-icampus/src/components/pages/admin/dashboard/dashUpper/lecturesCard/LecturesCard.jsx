import UpperCard from '../UpperCard';
import style from './LecturesCard.module.css'
import { FaEllipsisV } from "react-icons/fa";

function LecturesCard (){
    return (
            <UpperCard
            title={'Lectures'}
            options= {<FaEllipsisV/>}
            body= {
              <div className={style.UpperLecturesContainer }>
                    <div className={style.UpperLecturesleft }>
                        <h3>Class Rooms</h3>
                            <div className={style.UpperLecturesBarCont }>
                                <div className={style.UpperLecturesBarVal }>
                                </div>
                            </div>
                        <h3>Labs</h3>
                            <div className={style.UpperLecturesBarCont }>
                                <div className={style.UpperLecturesBarVal }>
                                </div>
                            </div>
                    </div>
                    <div className={style.UpperLecturesRight}>
                        <h3>Theatre</h3>
                            <div className={style.UpperLecturesBarCont }>
                                <div className={style.UpperLecturesBarVal }>
                                </div>
                            </div>
                        <h3>Office</h3>
                            <div className={style.UpperLecturesBarCont }>
                                <div className={style.UpperLecturesBarVal }>
                                </div>
                            </div>
                    </div>
                </div>
                
            }
            />
    )
}
export default LecturesCard;