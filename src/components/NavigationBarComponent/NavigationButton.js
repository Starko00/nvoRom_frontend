import React from "react";
import NavStyle from "../../style/NavStyle.module.scss";

const NavigationButton = ({ btnText, funkcija }) => {
  const style = NavStyle;
  return (
    <button
      className={`${style.primaryNavigation_btn} ${style.mobile_menu_btn}`}
      onClick={funkcija}
    >
      {btnText}
    </button>
  );
};

export default NavigationButton;
