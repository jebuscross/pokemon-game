import React, { useState } from "react";
import cn from "classnames";
import s from "./style.module.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <nav id={s.navbar}>
      <div class={s.navWrapper}>
        <p class={s.brand}>LOGO</p>
        <a
          class={cn(s.menuButton, { [s.active]: isActive })}
          onClick={handleClick}>
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
