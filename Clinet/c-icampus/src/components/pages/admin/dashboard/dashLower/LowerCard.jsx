import styles from './LowerCard.module.css';



const LowerCard = ({title, options, body}) => {


  return (
  
    <div className={styles.lowerCardContainer}>
      <div className={styles.lowerCardHeader}>
        <div className={styles.lowerCardtitle}>
          <h2>
          {title}

          </h2>
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