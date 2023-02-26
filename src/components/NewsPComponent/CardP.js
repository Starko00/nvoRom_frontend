import React from "react";
import NewsPStyle from "./NewsP.module.scss";
import btn from "../../style/Button.module.scss";
import img from "../../components/images/elvis.jpg";

const CardP = (props) => {
  const style = NewsPStyle;
  const btnstyle = btn;
  return (
    <div className={style.card}>
      <div className={style.card_container}>
        <div className={style.card_container_imageHolder}>
          <img src={`/uploads/news/${props?.item?.photo}`} alt="slika" />
        </div>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props?.item?.hedline}"</h1>
          <p className={style.text_paragraph}>{props?.item?.content}</p>
        </div>
        <div className={style.card_container_author}>
          <div className={style.card_container_author_left}>
            <img src={img} alt="slika" />
            <p>{props?.item?.author} |</p>
            <p>
              {" "}
              {props?.item?.date
                .split("T")[0]
                .replaceAll("-", ".")
                .split(".")
                .reverse()
                .join(".")}
            </p>
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
