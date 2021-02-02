import React from "react";
import styles from "./header.module.css";

const Header = ({ title, descr }) => {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        <h1>
          {title !== undefined
            ? title
            : console.error("No title provided for component Header")}
        </h1>
        <p>
          {descr !== undefined
            ? descr
            : console.error("No description provided for component Header")}
        </p>
      </div>
    </header>
  );
};

export default Header;
