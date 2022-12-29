import React, { useState } from "react";
import btnStyle from "../../style/Button.module.scss";
import cardStyle from "../../style/projectsCardSmall.module.scss";
import MainStyle from "./ProjectsMainPage.module.scss";

const cardMainSmall = (props) => {
  const style = MainStyle;
  
  return (
    <div className={`${cardStyle.card} ${style.smallCard}`}>
      <div className={cardStyle.card_left}>
        <img
          className={cardStyle.card_left_img}
          src={props.card.img}
          alt="Logo"
        />
        <p className={`${cardStyle.card_left_paragraph} ${style.cards_date}`}>
          {props.card.date}
        </p>
      </div>
      <div className={cardStyle.card_right}>
        <button
          className={`${btnStyle} ${style.smallCard_button}`}
          onClick={() => {
            console.log(props.card.date);
            props.projectYear(props.card.date)
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default cardMainSmall;
