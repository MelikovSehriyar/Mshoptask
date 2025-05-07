import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router'
const Header = () => {
  return (
    <div>
    <div className={styles.wrapperh}>
    <div className={styles.header}>
        <div className={styles.lefth}>
            <h2 className={styles.eat}>EATWELL</h2>
        </div>
        <div className={styles.righth}>
            <Link to = '/' className={styles.h}>HOME</Link>
            <Link to = '/about' className={styles.h}>ABOUT</Link>
            <Link to = '/offer' className={styles.h}>OFFER</Link>
            <Link to = '/menu' className={styles.h}>MENU</Link>
            <Link to = '/news' className={styles.h}>NEWS</Link>
            <Link to = '/gallery' className={styles.h}>GALLERY</Link>
            <Link to = '/contact' className={styles.h}>CONTACT</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
