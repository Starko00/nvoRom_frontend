import React from "react";
import AboutStyle from "./About.module.scss";
import mainImg from "../images/Image_4.png";
import btnstyle from "../../style/Button.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const About = ({ aboutTittle = "", aboutText = "" }) => {
  const style = AboutStyle;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
