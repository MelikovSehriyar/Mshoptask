import React, { useState } from 'react'
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom' 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.header}>
      <div className={styles.hwrapper}>
        <div className={styles.himg}>
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="Logo" />
        </div>

        <div className={styles.burger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.hlinks} ${isOpen ? styles.open : ''}`}>
          <Link to='/' className={styles.h}>HOME</Link>
          <Link to='/category' className={styles.h}>CATEGORY</Link>
          <Link to='/men' className={styles.h}>MEN</Link>
          <Link to='/women' className={styles.h}>WOMEN</Link>
          <Link to='/latest' className={styles.h}>LATEST</Link>
          <Link to='/pages' className={styles.h}>PAGES</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
