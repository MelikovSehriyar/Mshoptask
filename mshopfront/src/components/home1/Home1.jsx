import React from 'react'
import styles from "./Home1.module.scss"
const Home1 = () => {
  return (
    <div>
      <div className={styles.h2wrapper}>
        <div className={styles.h1left}>
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />

        </div>
        <div className={styles.htextbox}>
          <div className={styles.t1}>
          <span className={styles.flat}>FLAT</span>
          <h2 className={styles.dis}>75%Off</h2>
          </div>
          <div className={styles.t2}>
            <h1 className={styles.its}>
            It’s Happening
            this Season!
            </h1>
            <button className={styles.purc}>PURCHASE NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1
