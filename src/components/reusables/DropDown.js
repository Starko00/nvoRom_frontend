import React, { useState } from 'react';
import DropDownStyle from "./DropDownStyle.module.scss"
const DropdownMenu = ({children,label}) => {
  const [isOpen, setIsOpen] = useState(false);
  const style = DropDownStyle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.dropdown}>
      <button className={style.dropdown_toggle} onClick={toggleMenu}>
        {label}
      </button>
      {isOpen && (
        <ul className={style.dropdown_menu}>
        {children}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;