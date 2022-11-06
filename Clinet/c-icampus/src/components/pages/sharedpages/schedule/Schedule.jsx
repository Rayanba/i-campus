// import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import styles from './Schedule.module.css';
import {ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

const Schedule = () => {
  





  return (
    <div className={styles.scheduleContainer}>
      <div><h1>Schedule</h1></div>
      <div className={styles.schedule}>
        <ScheduleComponent 
        currentView = "Week"
        // selectedDate={new Date(2020, 0, 11)}
        >
          <Inject services={[ Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop ]}/>
        </ScheduleComponent>
      </div>
    </div>
  )
}
export default Schedule;