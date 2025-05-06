import React from 'react'
import styles from "./Home3.module.scss"
const Home3 = () => {
  return (
    <div className={styles.all}>
      <div className={styles.home3wrapper}>
        <div className={styles.textc3}>
            <h1 className={styles.new}>New realeased Products for Men            </h1>
            <span className={styles.are}>Who are in extremely love with eco friendly system.</span>
        </div>
        <div className={styles.cards3}>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
                <h3 className={styles.long}>Long Sleeve shirt</h3>
               <p className={styles.price}>$150.00</p>
            </div>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/shop/img/l2.jpg.webp" alt="" />
                <h3 className={styles.long}>Long Sleeve shirt</h3>
               <p className={styles.price}>$150.00</p>
            </div>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/shop/img/l3.jpg.webp" alt="" />
                <h3 className={styles.long}>Long Sleeve shirt</h3>
               <p className={styles.price}>$150.00</p>
            </div>
            <div className={styles.card1}>
                <img src="https://preview.colorlib.com/theme/shop/img/l4.jpg.webp" alt="" />
                <h3 className={styles.long}>Long Sleeve shirt</h3>
               <p className={styles.price}>$150.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home3
