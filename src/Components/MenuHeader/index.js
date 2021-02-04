import Navbar from "../Navbar";
import Menu from "../Menu";
import React, { useState } from "react";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen} />
      <Navbar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburg={handleClickHamburger}></Navbar>
    </>
  );
};

export default MenuHeader;
