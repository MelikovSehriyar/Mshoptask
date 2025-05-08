import styles from './Footerhome.module.scss';

const FooterHome = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <img className={styles.logo} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
        <div className={styles.subscribe}>
          <input type="email" placeholder="Your Email" />
          <button>Send</button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.column}>
          <h3>About</h3>
          <a href="#">About Us</a>
          <a href="#">Our Partners</a>
          <a href="#">Our Services</a>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQ Page</a>
          <a href="#">About Me</a>
        </div>
        <div className={styles.column}>
          <h3>Follow Us</h3>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
