import React from "react";
import NavigationStyle from "./Navigation.module.scss";

const NavigationButton = ({ btnText, funkcija }) => {
  const style = NavigationStyle;
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
