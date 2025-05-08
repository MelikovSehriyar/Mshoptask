import React from 'react'
import styles from './Home5.module.scss'
const Home5 = () => {
  return (
    <div>
      <div className={styles.home5wrapper}>
     <div className={styles.texts5}>
     <span className={styles.con}>Contacts</span>
     <h3 className={styles.team}>Our Team</h3>
     </div>
     <div className={styles.imgs5}>
        <div className={styles.img51}>
        <img className={styles.velva} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
        <h4 className={styles.kopf}>Velva Kopf</h4>
        <span className={styles.bio}>Biologist</span>
        </div>
        <div className={styles.img51}>
        <img className={styles.velva} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
        <h4 className={styles.kopf}>Sarah Palmer</h4>
        <span className={styles.bio}>Florist</span>
        </div>
        <div className={styles.img51}>
        <img className={styles.velva} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
        <h4 className={styles.kopf}>Jessica Swift</h4>
        <span className={styles.bio}>Photographer</span>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Home5
