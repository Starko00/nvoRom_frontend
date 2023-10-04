import React from "react";
import { useNavigate } from "react-router-dom";
import smallstyle from "./News.module.scss";
import btn from "../../style/Button.module.scss";

const SmallCard = (props) => {
  const style = smallstyle;
  const btnstyle = btn;
  const navigate = useNavigate();
  return (
    <div className={style.small}>
      <div className={style.small_imageHolder}>
        <img src={`/uploads/news/${props.card.photo}`} alt="slika" />
      </div>
      <div className={style.small_container}>
        <div className={style.text}>
          <h1 className={style.text_header} dangerouslySetInnerHTML={{ __html: props.card.hedline }} />
          <p className={style.text_paragraph} dangerouslySetInnerHTML={{ __html: props.card.content }} />
        </div>
      </div>
      <div className={style.small_container_author}>
        <div className={style.small_container_author_left}>
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
        <button
          className={`${btnstyle} ${style.small_container_author_btn}`}
          onClick={() => {
            navigate("/article", { state: props.card });
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
