import img from "../../components/images/elvis.jpg";
import fb from "../../components/images/facebook.svg";
import insta from "../../components/images/instagram.svg";
import ln from "../../components/images/linkedin.svg";
import React from "react";
import MainStyle from "./TeamMainStyle.module.scss";

const TeamMemberCard = (props) => {
  console.log(props.card?.memeber);
  const style = MainStyle;
  return (
    <div className={style.container_center}>
      <div className={style.container_center_imageHolder}>
        <img
          className={style.container_center_imageHolder_img}
          src={`/uploads/teamMembers/${props.card?.memeber?.teamMemberPhoto}`}
          alt="Team member"
        />
      </div>
      <div className={style.container_center_social}>
        <div className={style.container_center_social_holder}>
          <img
            className={style.container_center_social_holder_icon}
            src={fb}
            alt="social"
            onClick={() => {
              window.location = props.card?.memeber.socialMediaFacebook;
            }}
          />
        </div>
        <div className={style.container_center_social_holder}>
          <img
            className={style.container_center_social_holder_icon}
            src={insta}
            alt="social"
            onClick={() => {
              window.location = props.card?.memeber.socialMediaInstagram;
            }}
          />
        </div>
        <div className={style.container_center_social_holder}>
          <img
            className={style.container_center_social_holder_icon}
            src={ln}
            alt="social"
            onClick={() => {
              window.location = props.card?.memeber.socialMediaLinkedIn;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
