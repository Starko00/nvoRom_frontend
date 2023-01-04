import React from "react";
import NewsPStyle from "./NewsP.module.scss";
import btn from "../../style/Button.module.scss";
import { useNavigate } from "react-router-dom";

const SmallPCard = (props) => {
  const style = NewsPStyle;
  const navigate = useNavigate()
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
          <button className={`${btnstyle} ${style.small_container_author_btn}`} onClick = {()=>{
            navigate("/article",{state:props.card})
          }}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallPCard;
