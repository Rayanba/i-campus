import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home () {

    
    return(
      <div className={styles.homeContainer}>
        <h1>
          Choose Route
        </h1>
        <Link to = '/admin'>Admin</Link>
        <Link to = '/instructor'>Instructor</Link>
        <Link to = '/student'>Student</Link>
        <Link to = '/Gate'>The Gate</Link>
      </div>
    )
}

export default Home;