import React from 'react'
import styles from "./Home2.module.scss"
const Home2 = () => {
  return (
    <div>
      <div className={styles.home2wrapper}>
        <div className={styles.texts}>
            <h1 className={styles.shop}>Shop for Different Categories</h1>
            <span className={styles.who}>Who are in extremely love with eco friendly system.</span>
        </div>
        <div className={styles.cards}>
  <div className={styles.leftColumn}>
    <div className={styles.imgGroup}>
      <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="Product 1" />
      <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="Product 2" />
    </div>
    <div className={styles.imgSingle}>
      <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="Product 3" />
    </div>
  </div>
  <div className={styles.rightColumn}>
    <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="Product 4" />
  </div>
</div>

      </div>
    </div>
  )
}

export default Home2
