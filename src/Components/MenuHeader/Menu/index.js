import React, { useState } from "react";
import cn from "classnames";
import s from "./style.module.css";

const Menu = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div
      class={cn(s.menuContainer, { [s.active]: isActive })}
      onClick={handleClick}>
      <div class={s.overlay} />
      <div class={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#game">GAME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
