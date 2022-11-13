import styles from './AvailableCard.module.css';



function AvailableCard ({title, options, body}){


  return (
  
    <div className={styles.availableCardContainer}>
      <div className={styles.availableCardHeader}>
        <div className={styles.availableCardtitle}>
          <h2>
          {title}
          </h2>
        </div>
        <div className={styles.availableCardoptions}>
            {options}
        </div>
      </div>
        <div className={styles.availableCardBody}>  
          {body}
        </div>
    </div>
  
  )
}

export default AvailableCard;