import React from "react";
import { string, func } from "prop-types";
import styles from "./style.module.css";

const Header = ({ title, descr, onClickButton }) => {
  const handleClick = () => {
    onClickButton && onClickButton("game");
  };

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
        <button onClick={handleClick}>Start Game</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: string.isRequired,
  descr: string.isRequired,
  onClickButton: func.isRequired,
};

export default Header;
