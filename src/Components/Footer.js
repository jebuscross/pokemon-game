import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
