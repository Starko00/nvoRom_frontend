import React from "react";
import btnStyle from "../../style/Button.module.scss";
import cardStyle from "../../style/projectsCardSmall.module.scss";
import MainStyle from "./TeamMainStyle.module.scss";

const Cards = (props) => {
  const style = MainStyle;
  return (
    <div className={`${cardStyle.card}  ${style.card}`}>
      <div className={`${cardStyle.card_left} ${style.card_leftSide}`}>
        <img
          className={`${cardStyle.card_left_img} ${style.card_leftSide_img}`}
          src={props.card.img}
          alt="Logo"
        />
        <p
          className={`${cardStyle.card_left_paragraph} ${style.card_leftSide_title} `}
        >
          {props.card.title}
        </p>
      </div>
      <div className={cardStyle.card_right}>
        <button
          className={`${btnStyle} ${style.card_button}`}
          onClick={() => {}}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Cards;
