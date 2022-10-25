import styles from './LowerCard.module.css';



function LowerCard ({title, options, body}){


  return (
  
    <div className={styles.lowerCardContainer}>
      <div className={styles.lowerCardHeader}>
        <div className={styles.lowerCardtitle}>
          {title}
        </div>
        <div className={styles.lowerCardoptions}>
            {options}
        </div>
      </div>
        <div className={styles.lowerCardBody}>  
          {body}
        </div>
            
    </div>
  
  )
}

export default LowerCard;