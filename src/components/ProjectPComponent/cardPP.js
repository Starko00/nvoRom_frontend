import React from "react";
import btnStyle from "../../style/Button.module.scss";
import cardStyle from "../../style/projectsCardSmall.module.scss";
import { useNavigate } from "react-router-dom";
import icon from "../../components/images/ic.svg";
import PPStyle from "./ProjectPage.module.scss";

export const CardPP = (props) => {
  const navigate = useNavigate();

  const style = PPStyle;
  return (
    <div className={`${cardStyle.card}  ${style.card}`}>
      <div className={`${cardStyle.card_left} ${style.card_leftS}`}>
        <img
          className={`${cardStyle.card_left_img} ${style.card_leftS_img}`}
          src={icon}
          alt="Team member icon"
        />
        <h1
          className={`${cardStyle.card_left_header} ${style.card_leftS_title} `}
        >
          {props.card.split("----")[1]}
        </h1>
        <p
          className={`${cardStyle.card_left_paragraph} ${style.card_leftS_title} `}
        >
          {props.card.date}
        </p>
      </div>
      <div className={cardStyle.card_right}>
        <button
          className={`${btnStyle} ${style.card_right_button}`}
          onClick={() => {
            window.location.href = `http://20.229.216.236/uploads/projects/${props.card}`;
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};
