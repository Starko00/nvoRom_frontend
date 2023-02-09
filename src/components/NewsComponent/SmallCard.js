import React from "react";
import smallstyle from "./News.module.scss";
import btn from "../../style/Button.module.scss";
import img from "../../components/images/elvis.jpg";

const SmallCard = (props) => {
  const style = smallstyle;
  const btnstyle = btn;
  return (
    <div className={style.small}>
      <div className={style.small_imageHolder}>
        <img src={props.card.photo} alt="slika" />
      </div>
      <div className={style.small_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props.card.hedline}"</h1>
          <p className={style.text_paragraph}>{props.card.content}</p>
        </div>
        <div className={style.small_container_author}>
          <div className={style.small_container_author_left}>
            <img src={img} alt="slika" />
            <p>{props.card.author} |</p>
            <p>
              {props.card.date
                .split("T")[0]
                .replaceAll("-", ".")
                .split(".")
                .reverse()
                .join(".")}
            </p>
          </div>
          <button className={`${btnstyle} ${style.small_container_author_btn}`}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
