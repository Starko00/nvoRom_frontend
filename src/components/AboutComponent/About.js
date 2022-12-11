import React from "react";
import AboutStyle from "../../style/About.module.scss";
import mainImg from "../images/Image_4.png";

const About = () => {
  const style = AboutStyle;
  return (
    <div className={style.container}>
      <img className={style.container_img} src={mainImg} alt="bla" />
      <div className={style.container_text}>
        <h1 className={style.container_text_header}>Vizija i misija</h1>
        <p className={style.container_text_paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry...….Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry...….Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.Lorem Ipsum
          is simply dummy text of the printing and typesetting
          industry...….Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and
        </p>
      </div>
    </div>
  );
};

export default About;
