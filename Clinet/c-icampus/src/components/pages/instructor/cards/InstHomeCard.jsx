import styles from './InstHomeCard.module.css';





function InstHomeCard ({title, options, body}){


  return (
  
    <div className={styles.instHomeCardContainer}>
      <div className={styles.instHomeCardHeader}>
        <div className={styles.instHomeCardtitle}>
          <h2>
          {title}
          </h2>
        </div>
        <div className={styles.instHomeCardoptions}>
            {options}
        </div>
      </div>
        <div id='instHomeCardID' className={styles.instHomeCardBody}>  
          {body}
        </div>
    </div>
  
  )
}

export default InstHomeCard;