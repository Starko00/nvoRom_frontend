import React from "react";
import NewsPStyle from "./NCNP.module.scss";
import btn from "../../style/Button.module.scss";
import img from "../images/elvis.jpg";
import { useNavigate } from "react-router-dom";

const CardP = (props) => {
  const style = NewsPStyle;
  const btnstyle = btn;
  const date = props.card.date;
  const navigate = useNavigate();
  return (
    <div className={style.newscard_container}>
      <div className={style.newscard_container_left}>
        <div className={style.newscard_container_left_imageHolder}>
          <img src={`/uploads/news/${props.card.photo}`} alt="slika" />
        </div>
        <div className={style.newscard_container_left_author}>
          <div className={style.newscard_container_left_author}>
            <img
              className={style.newscard_container_left_author_img}
              src={img}
              alt="slika"
            />
            <p>{props.card.author} |</p>
            <p>
              {date
                .split("T")[0]
                .replaceAll("-", ".")
                .split(".")
                .reverse()
                .join(".")}
            </p>
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
            onClick={() => {
              navigate("/article", { state: props.card });
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardP;
