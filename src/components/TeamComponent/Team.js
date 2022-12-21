import React from "react";
import TeamStyle from "./Team.module.scss";
import btnstyle from "../../style/Button.module.scss";
import mainImg from "../images/Image_6.png";

const Team = () => {
  const style = TeamStyle;
  return (
    <div className={style.container}>
      <div className={style.container_text}>
        <h1 className={style.container_text_header}>Naš tim je naša snaga</h1>
        <p className={style.container_text_paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry...….Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry...….Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of
        </p>
        <div className={style.container_text_holder}>
          <button className={`${btnstyle} ${style.container_text_holder_btn}`}>
            Read More
          </button>
        </div>
      </div>
      <img className={style.container_img} src={mainImg} alt="team_img" />
    </div>
  );
};

export default Team;
