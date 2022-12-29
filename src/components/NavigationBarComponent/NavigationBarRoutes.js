import React from "react";
import NavigationStyle from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const NavigationBarRoutes = (props) => {
  const style = NavigationStyle;
  return (
    <div>
      <ul
        className={`${style.navigationContainer_primaryNavigation_list} ${style.mobile_menu_list}`}
      >
        <li>
          <Link to="/" onClick={() => props.setClicked(!props.clicked)}>
            Početna
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => props.setClicked(!props.clicked)}>
            O nama
          
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => props.setClicked(!props.clicked)}>
            Projekti
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => props.setClicked(!props.clicked)}>
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={() => props.setClicked(!props.clicked)}>
            Tim
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => props.setClicked(!props.clicked)}>
            Aktuelnosti
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBarRoutes;
