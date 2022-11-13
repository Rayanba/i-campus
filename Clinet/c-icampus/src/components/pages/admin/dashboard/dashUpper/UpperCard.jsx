import styles from './UpperCard.module.css';



function UpperCard ({title, options, body}){


  return (
  
    <div className={styles.upperCardContainer}>
      <div className={styles.upperCardHeader}>
        <div className={styles.upperCardtitle}>
          <h2>
          {title}
          </h2>
        </div>
        <div className={styles.upperCardoptions}>
            {options}
        </div>
      </div>
        <div className={styles.upperCardBody}>  
          {body}
        </div>
            
    </div>
  
  )
}

export default UpperCard;