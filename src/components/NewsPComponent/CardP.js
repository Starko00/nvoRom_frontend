import React from "react";
import NewsPStyle from "./NewsP.module.scss";
import btn from "../../style/Button.module.scss";

const CardP = (props) => {
  const style = NewsPStyle;
  const btnstyle = btn;
  return (
    <div className={style.card}>
      <div className={style.card_container}>
        <div className={style.card_container_imageHolder}>
          <img src={props.card.img} alt="slika" />
        </div>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props.card.name}"</h1>
          <p className={style.text_paragraph}>{props.card.text}</p>
        </div>
        <div className={style.card_container_author}>
          <div className={style.card_container_author_left}>
            <img src={props.card.authorImg} alt="slika" />
            <p>{props.card.authorName} |</p>
            <p>{props.card.date}</p>
          </div>
          <button className={`${btnstyle} ${style.card_container_author_btn}`}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardP;
