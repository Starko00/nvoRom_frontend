import React from "react";
import NavigationStyle from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const NavigationBarRoutes = () => {
  const style = NavigationStyle;
  return (
    <div>
      <ul
        className={`${style.navigationContainer_primaryNavigation_list} ${style.mobile_menu_list}`}
      >
        <li>
          <Link to="/">Početna</Link>
        </li>
        <li>
          <Link to="/about">O nama</Link>
        </li>
        <li>
          <Link to="/projects">Projekti</Link>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
        <li>
          <Link to="/team">Tim</Link>
        </li>
        <li>
          <Link to="#">Aktuelnosti</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBarRoutes;
