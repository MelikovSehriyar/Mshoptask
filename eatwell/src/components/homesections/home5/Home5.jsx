import React from 'react'
import styles from './Home5.module.scss'
const Home5 = () => {
  return (
    <div>
     <div className={styles.home5wrapper}>
     <div className={styles.gallery}>
        <h1 className={styles.gal}>Gallery</h1>
        <span className={styles.faway}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
        
      </div>
   <div className={styles.gridcard}>
   <div className={styles.imgss1}>
              <img className={styles.imgc} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
              <img className={styles.imgc} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
              <img className={styles.imgc} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
      </div>
      <div className={styles.imgss1}>
      <img className={styles.imgc} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
      <img className={styles.imgc} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
      <img className={styles.imgc} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
      </div>
   </div>
     </div>
    </div>
  )
}

export default Home5
