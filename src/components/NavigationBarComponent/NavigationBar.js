import React from "react";
import Logo from "../images/Logo.svg";
import NavigationStyle from "../../style/Navigation.module.scss";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import NavigationButton from "./NavigationButton";
import NavigationBarRoutes from "./NavigationBarRoutes";

const Nav = () => {
  const style = NavigationStyle;
  const [clicked, setClicked] = React.useState(false);
  const funkcija = () => {
    console.log("Hero");
  };
  return (
    <div className={style.navigationContainer}>
      <img className={style.navigationContainer_logo} src={Logo} alt="Logo" />
      <div
        className={`${style.navigationContainer_primaryNavigation} ${
          clicked && style.mobile_menu
        }`}
      >
        <NavigationBarRoutes />
        <NavigationButton btnText={"Pridruži se"} funkcija={funkcija} />
        <hr className={style.mobile_menu_line} />
        <p className={style.mobile_menu_p}>Powered By</p>
        <h1 className={style.mobile_menu_text}>
          With<span>Us</span>
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
