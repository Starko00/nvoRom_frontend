import React from "react";
import btnStyle from "../../style/Button.module.scss";
import MainStyle from "./ProjectsMainPage.module.scss";
import { Link } from "react-router-dom";

const cardMainBig = (props) => {
  const style = MainStyle;
  return (
    <div className={style.card}>
      <div className={style.card_imageHolder}>
        <img src={props.card.img} alt="slika" />
      </div>
      <div className={style.card_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>{props.card.name}</h1>
          <p className={style.text_paragraph}>{props.card.text}</p>
        </div>
        <div className={style.card_container_button}>
          <Link to="/project">
            <button
              type="buttons"
              className={`${btnStyle} ${style.card_container_button_btn}`}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cardMainBig;
