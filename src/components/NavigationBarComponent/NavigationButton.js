import React from "react";
import NavStyle from "../../style/NavStyle.module.scss";

const NavigationButton = () => {
  const style = NavStyle;
  return (
    <button
      className={`${style.primaryNavigation_btn} ${style.mobile_menu_btn}`}
    >
      Pridruži se
    </button>
  );
};

export default NavigationButton;
