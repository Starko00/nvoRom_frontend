import React from "react";
import smallstyle from "../../style/News.module.scss";
import btn from "../../style/Button.module.scss";

const SmallCard = (props) => {
  const style = smallstyle;
  const btnstyle = btn;
  return (
    <div className={style.small}>
      <div className={style.small_imageHolder}>
        <img src={props.card.img} alt="slika" />
      </div>
      <div className={style.small_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props.card.name}"</h1>
          <p className={style.text_paragraph}>{props.card.text}</p>
        </div>
        <div className={style.small_container_author}>
          <div className={style.small_container_author_left}>
            <img src={props.card.authorImg} alt="slika" />
            <p>{props.card.authorName} |</p>
            <p>{props.card.date}</p>
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
