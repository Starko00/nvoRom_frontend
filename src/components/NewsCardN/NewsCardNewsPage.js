import React from "react";
import NewsPStyle from "./NCNP.module.scss";
import btn from "../../style/Button.module.scss";

const CardP = (props) => {
  const style = NewsPStyle;
  const btnstyle = btn;
  return (
    <div className={style.newscard_container}>
      <div className={style.newscard_container_left}>
        <div className={style.newscard_container_left_imageHolder}>
          <img src={props.card.img} alt="slika" />
        </div>
        <div className={style.newscard_container_left_author}>
          <div className={style.newscard_container_left_author}>
            <img
              className={style.newscard_container_left_author_img}
              src={props.card.authorImg}
              alt="slika"
            />
            <p>{props.card.authorName}</p>
            <p>{props.card.date}</p>
          </div>
        </div>
      </div>
      <div className={style.newscard_container_right}>
        <div className={style.newscard_container_right_text}>
          <h1 className={style.newscard_container_right_text_header}>
            {props.card.header}
          </h1>
          <p className={style.newscard_container_right_text_paragraph}>
            {props.card.text}
          </p>
        </div>
        <div className={style.newscard_container_right_button}>
          <button
            className={`${btnstyle} ${style.newscard_container_right_button_btn}`}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardP;
