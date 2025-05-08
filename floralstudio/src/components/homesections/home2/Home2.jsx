import React from 'react'
import styles from './Home2.module.scss'
const Home2 = () => {
  return (
    <div>
      <div className={styles.home2wrapper}>
        <div className={styles.left2}>
            <h3 className={styles.our}>Our Mission</h3>

            <span className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum sed numquam impedit molestias ea tempora, est reprehenderit, perspiciatis adipisci doloremque quaerat. Odit repudiandae soluta et vero enim corporis perspiciatis?</span>

            <button className={styles.read}>Read more</button>
        </div>
        <div className={styles.right2}>
            <img className={styles.flowerr} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home2
