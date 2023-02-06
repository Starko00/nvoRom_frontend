import React from "react";
import NewsPStyle from "./NewsP.module.scss";
import btn from "../../style/Button.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import img from "../../components/images/elvis.jpg";

const ArticleCard = (props) => {
  const style = NewsPStyle;
  const navigate = useNavigate();
  const btnstyle = btn;
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={style.ac}>
      <div className={style.ac_imageHolder}>
        <img src={props.card.img} alt="slika" />
      </div>
      <div className={style.ac_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props.card.name}"</h1>
          <p className={style.text_paragraph}>{props.card.text}</p>
        </div>
        <div className={style.ac_container_author}>
          <div className={style.ac_container_author_left}>
            <img src={img} alt="slika" />
            <p>{props.card.authorName} |</p>
            <p>{props.card.date}</p>
          </div>
          <button
            className={`${btnstyle} ${style.ac_container_author_btn}`}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

export default ArticleCard;
