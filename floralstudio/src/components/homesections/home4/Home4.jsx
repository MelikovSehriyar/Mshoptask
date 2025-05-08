import React from 'react';
import styles from './Home4.module.scss';

const Home4 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Devoted to wonderful beauty</p>
      <h2 className={styles.heading}>Events Pricing</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.price}><span>$16</span> per table</p>
          <h3>Birthday Events</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet laudem partem perfecto per
          </p>
          <button className={styles.button}>Shop now</button>
        </div>
        <div className={styles.card}>
        <p className={styles.price}><span>$31</span> per table</p>
          <h3>Wedding Events</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet laudem partem perfecto per
          </p>
          <button className={styles.button}>Shop now</button>
        </div>
        <div className={styles.card}>
          <p className={styles.price}><span>$52</span> per table</p>
          <h3>Party Events</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet laudem partem perfecto per
          </p>
          <button className={styles.button}>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Home4;
