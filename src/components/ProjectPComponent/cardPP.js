import React from "react";
import PPStyle from "./ProjectPage.module.scss";
import btnStyle from "../../style/Button.module.scss";

const cardAUP = (props) => {
  const style = PPStyle;
  return (
    <div className={style.card}>
      <div className={style.card_left}>
        <img className={style.card_left_img} src={props.card.img} alt="Logo" />
        <h1 className={style.card_left_header}>{props.card.name}</h1>
        <p className={style.card_left_paragraph}>{props.card.date}</p>
      </div>
      <div className={style.card_right}>
        <button className={`${btnStyle} ${style.card_right_button}`}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default cardAUP;
