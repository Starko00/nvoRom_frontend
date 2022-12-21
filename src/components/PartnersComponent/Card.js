import React from "react";
import PartnersStyle from "./Partners.module.scss";

const Card = (props) => {
  const style = PartnersStyle;
  return (
    <div className={style.card}>
      <img className={style.card_img} src={props.card.img} alt="partner_flag" />
      <div className={style.card_text}>
        <h1 className={style.card_text_header}>{props.card.name}</h1>
        <h3 className={style.card_text_info}>{props.card.info}</h3>
      </div>
    </div>
  );
};

export default Card;
