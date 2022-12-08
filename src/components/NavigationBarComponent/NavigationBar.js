import React from "react";
import Logo from "../images/Logo.svg";
import NavStyle from "../../style/NavStyle.module.scss";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import NavigationButton from "./NavigationButton";

const Nav = () => {
  const style = NavStyle;
  const [clicked, setClicked] = React.useState(false);
  const funkcija = ()=>{console.log("Hero")}
  return (
    <div className={style.navigationContainer}>
      <img className={style.navigationContainer_logo} src={Logo} alt="Logo" />
      <div
        className={`${style.navigationContainer_primaryNavigation} ${
          clicked && style.mobile_menu
        }`}
      >
        <ul
          className={`${style.navigationContainer_primaryNavigation_list} ${style.mobile_menu_list}`}
        >
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
        <NavigationButton btnText={"Pridruži se"} funkcija={funkcija} />
        <hr className={style.mobile_menu_line} />
        <p className={style.mobile_menu_p}>Powered By</p>
        <h1 className={style.mobile_menu_text}>
          With<span>ME</span>
        </h1>
        <FaTimes
          className={style.mobile_menu_close}
          onClick={() => setClicked(!clicked)}
        />
      </div>
      <FaBars
        className={style.mobile_menu_open}
        onClick={() => setClicked(!clicked)}
      />
    </div>
  );
};

export default Nav;
