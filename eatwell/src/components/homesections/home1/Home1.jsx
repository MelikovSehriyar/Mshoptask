import React from 'react'
import styles from './Home1.module.scss'
const Home1 = () => {
  return (
    <div>
      <div className={styles.home1}>
        <div className={styles.texth1}>
            <h1 className={styles.welcome}>Welcome To EatWell</h1>
            <h3 className={styles.come}>Come and eat well with our delicious & healthy foods.</h3>
            <button className={styles.reser}>Reservation</button>
        </div>
      </div>
    </div>
  )
}

export default Home1
