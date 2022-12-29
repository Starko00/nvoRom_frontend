import React from "react";
import NewsPStyle from "./NCNP.module.scss";
import btn from "../../style/Button.module.scss";

const CardP = (props) => {
  
  const style = NewsPStyle;
  const btnstyle = btn;
  const date =  props.card.date


  return (
    <div className={style.newscard_container}>
      <div className={style.newscard_container_left}>
        <div className={style.newscard_container_left_imageHolder}>
          <img src={`http://20.229.216.236/uploads/news/${props.card.photo}`} alt="slika" />
        </div>
        <div className={style.newscard_container_left_author}>
          <div className={style.newscard_container_left_author}>
            <img
              className={style.newscard_container_left_author_img}
              src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="slika"
            />
            <p>{props.card.author}</p>
            <p>{date.split("T")[0].replaceAll("-",".").split(".").reverse().join(".")}</p>
          </div>
        </div>
      </div>
      <div className={style.newscard_container_right}>
        <div className={style.newscard_container_right_text}>
          <h1 className={style.newscard_container_right_text_header}>
            {props.card.hedline}
          </h1>
          <p className={style.newscard_container_right_text_paragraph}>
            {props.card.content}
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
