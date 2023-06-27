import React from "react";
import { useNavigate } from "react-router-dom";
import NewsStyle from "./News.module.scss";
import btn from "../../style/Button.module.scss";

const Card = (props) => {
  const style = NewsStyle;
  const btnstyle = btn;
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <div className={style.card_container}>
        <div className={style.card_container_imageHolder}>
          <img src={`/uploads/news/${props?.card?.photo}`} alt="slika" />
        </div>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props?.card?.hedline}"</h1>
          <p className={style.text_paragraph}>{props?.card?.content}</p>
        </div>
        <div className={style.card_container_author}>
          <div className={style.card_container_author_left}>
            <p>{props?.card?.author} |</p>
            <p>
              {props?.card?.date
                .split("T")[0]
                .replaceAll("-", ".")
                .split(".")
                .reverse()
                .join(".")}
            </p>
          </div>
          <button
            className={`${btnstyle} ${style.card_container_author_btn}`}
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

export default Card;
