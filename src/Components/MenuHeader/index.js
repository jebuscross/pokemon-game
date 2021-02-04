import Navbar from "./Navbar";
import Menu from "./Menu";
import React, { useState } from "react";

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Menu></Menu>
      <Navbar handleChanges={handleClick}></Navbar>
    </>
  );
};

export default MenuHeader;
