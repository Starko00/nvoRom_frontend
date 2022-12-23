import React from "react";
import AboutStyle from "./About.module.scss";
import mainImg from "../images/Image_4.png";

const About = ({aboutTittle = "",aboutText = ""}) => {
  const style = AboutStyle;
  return (
    <div className={style.container}>
      <img className={style.container_img} src={mainImg} alt="target_img" />
      <div className={style.container_text}>
        <h1 className={style.container_text_header}>{aboutTittle}</h1>
        <p className={style.container_text_paragraph}>
         {aboutText}
        </p>
      </div>
    </div>
  );
};

export default About;
