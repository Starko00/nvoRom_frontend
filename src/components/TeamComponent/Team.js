import React from "react";
import TeamStyle from "./Team.module.scss";
import btnstyle from "../../style/Button.module.scss";
import mainImg from "../images/Image_6.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Team = ({ teamText = "" }) => {
  const navigate = useNavigate();
  const style = TeamStyle;
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.container_text}>
        <h1 className={style.container_text_header}>Naš tim je naša snaga</h1>
        <p className={style.container_text_paragraph}>{teamText}</p>
        <div className={style.container_text_holder}>
          <button
            type="buttons"
            onClick={() => {
              navigate("/team");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className={`${btnstyle} ${style.container_text_holder_btn}`}
          >
            Read More
          </button>
        </div>
      </div>
      <img className={style.container_img} src={mainImg} alt="team_img" />
    </div>
  );
};

export default Team;
