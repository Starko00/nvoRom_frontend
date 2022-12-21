import React from "react";
import ProjectStyle from "./Project.module.scss";
import btn from "../../style/Button.module.scss";

const ProjectCard = (props) => {
  const style = ProjectStyle;
  const btnStyle = btn;
  return (
    <div className={style.card}>
      <div className={style.card_imageHolder}>
        <img src={props.card.img} alt="slika" />
      </div>
      <div className={style.card_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>{props.card.name}</h1>
          <p className={style.text_paragraph}>{props.card.text}</p>
        </div>
        <div className={style.card_container_button}>
          <button className={`${btnStyle} ${style.card_container_button_btn}`}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
