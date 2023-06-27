import React from "react";
import NewsPStyle from "./NewsP.module.scss";
import btn from "../../style/Button.module.scss";
import img from "../../components/images/elvis.jpg";
import { useNavigate } from "react-router-dom";

const CardP = (props) => {
  const style = NewsPStyle;
  const btnstyle = btn;
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <div className={style.card_container}>
        <div className={style.card_container_imageHolder}>
          <img src={`/uploads/news/${props?.item?.photo}`} alt="slika" />
        </div>
        <div className={style.text}>
          <h1 className={style.text_header}>"{props?.item?.hedline}"</h1>
          <div className={style.text_paragraph} dangerouslySetInnerHTML={{ __html: props?.item?.content }}></div>
        </div>
        <div className={style.card_container_author}>
          <div className={style.card_container_author_left}>
            <p>{props?.item?.author} | </p>
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
          <button
            className={`${btnstyle} ${style.card_container_author_btn}`}
            onClick={() => {
              navigate("/article", { state: props.item });
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
