import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router'; 
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h3 className={styles.floral}>Floral Studio</h3>
      </div>
      <div className={styles.burger} onClick={toggleMenu}>
        {isOpen ? <IoClose size={24} /> : <FaBars size={24} />}
      </div>

      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link to='/' className={styles.h} onClick={closeMenu}>Home</Link>
        <Link to='/aboutus' className={styles.h} onClick={closeMenu}>About us</Link>
        <Link to='/portfolio' className={styles.h} onClick={closeMenu}>Portfolio</Link>
        <Link to='/pricing' className={styles.h} onClick={closeMenu}>Pricing</Link>
        <Link to='/contacts' className={styles.h} onClick={closeMenu}>Contacts</Link>
      </div>
    </div>
  );
};

export default Header;
