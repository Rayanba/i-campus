import styles from './Cardy.module.css';



function Cardy ({title, options, body}){
  return (
    <div className={styles.cardyContainer}>
      <div className={styles.cardyHeader}>
        <div className={styles.cardytitle}>
          {title}
        </div>
        <div className={styles.cardyoptions}>
            {options}
        </div>
      </div>
        <div className={styles.cardyBody}>  
          {body}
        </div>
    </div>
  )
}
export default Cardy;