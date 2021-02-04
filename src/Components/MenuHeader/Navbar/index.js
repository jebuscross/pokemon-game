import React from "react";
import cn from "classnames";
import s from "./style.module.css";

const Navbar = ({ isActive, handleChanges }) => {
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a className={cn(s.menuButton, { [s.active]: isActive })}>
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
