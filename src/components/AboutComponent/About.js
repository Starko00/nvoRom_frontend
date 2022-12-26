import React from "react";
import AboutStyle from "./About.module.scss";
import mainImg from "../images/Image_4.png";
import btnstyle from "../../style/Button.module.scss";
import { useNavigate } from "react-router-dom";

const About = ({ aboutTittle = "", aboutText = "" }) => {
  const style = AboutStyle;
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <img className={style.container_img} src={mainImg} alt="target_img" />
      <div className={style.container_text}>
        <h1 className={style.container_text_header}>{aboutTittle}</h1>
        <p className={style.container_text_paragraph}>{aboutText}</p>
        <div className={style.container_text_holder}>
          <button
            type="buttons"
            onClick={() => {
              navigate("/about");
            }}
            className={`${btnstyle} ${style.container_text_holder_btn}`}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
