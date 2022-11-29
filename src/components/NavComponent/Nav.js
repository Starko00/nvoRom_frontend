import React from "react";
import Logo from "../images/Logo.svg";
import NavStyle from "../../style/NavStyle.module.scss";

const Nav = () => {
  const style = NavStyle;
  return (
    <div className={style.nav}>
      <div className={style.nav_left}>
        <img className={style.nav_logo} src={Logo} alt="Logo" />
        <ul className={style.nav_list}>
          <li>
            <a href="#">Početna</a>
          </li>
          <li>
            <a href="#">O Nama</a>
          </li>
          <li>
            <a href="#">Projekti</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <a href="#">Tim</a>
          </li>
          <li>
            <a href="#">Aktuelnosti</a>
          </li>
        </ul>
      </div>
      <button className={style.nav_btn}>Pridruži se</button>
    </div>
  );
};

export default Nav;
