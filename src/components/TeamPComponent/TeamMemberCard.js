import React from "react";
import MainStyle from "./TeamMainStyle.module.scss";

const TeamMemberCard = (props) => {
  const style = MainStyle;
  return (
    <div className={style.container_center}>
      <div className={style.container_center_imageHolder}>
        <img
          className={style.container_center_imageHolder_img}
          src={props.card.img}
          alt="Direktor"
        />
      </div>
      <div className={style.container_center_social}>
        <div className={style.container_center_social_holder}>
          <img
            className={style.container_center_social_holder_icon}
            src={props.card.social_1}
            alt="social"
          />
          <a href="#" className={style.container_center_social_holder_text}>
            {props.card.social_link_1}
          </a>
        </div>
        <div className={style.container_center_social_holder}>
          <img
            className={style.container_center_social_holder_icon}
            src={props.card.social_2}
            alt="social"
          />
          <a
            href="https://www.instagram.com/mr._elvis_berisa/"
            className={style.container_center_social_holder_text}
          >
            {props.card.social_link_2}
          </a>
        </div>
        <div className={style.container_center_social_holder}>
          <img
            className={style.container_center_social_holder_icon}
            src={props.card.social_3}
            alt="social"
          />
          <a
            href="https://www.linkedin.com/in/elvis-berisa-43268a51/"
            className={style.container_center_social_holder_text}
          >
            {props.card.social_link_3}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
