import React from 'react'
import styles from './Home2.module.scss'
const Home2 = () => {
  return (
    <div>
      <div className={styles.home2wrapper}>
        <div className={styles.texth2}>
            <p className={styles.our}>OUR STORY</p>
            <h2 className={styles.welcome2}>Welcome</h2>
            <span className={styles.far}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</span>
                <button className={styles.learn}>Learn More About Us</button>
        </div>
        <div className={styles.imgh2}>
            <img className = {styles.imgh23}src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt="" />

        </div>
      </div>
    </div>
  )
}

export default Home2
