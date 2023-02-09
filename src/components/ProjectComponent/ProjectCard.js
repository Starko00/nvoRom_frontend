import React, { useState } from "react";
import ProjectStyle from "./Project.module.scss";
import btnStyle from "../../style/Button.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const style = ProjectStyle;
  const navigate = useNavigate();

  return (
    <div className={`${style.card}`}>
      <div className={style.card_imageHolder}>
        <img src={props.card.projectImg} alt="slika" />
      </div>
      <div className={style.card_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>{props.card.projectName}</h1>
          <p className={style.text_paragraph}>{props.card.secodnaryText}</p>
        </div>
        <div className={style.card_container_button}>
          <button
            className={`${btnStyle} ${style.card_container_button_btn}`}
            onClick={() => {
              navigate("/project", { state: { projectId: props.card._id } });
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
