import React from "react";
import MainStyle from "./TeamMainStyle.module.scss";

const TeamMemberInfo = (props) => {
  const style = MainStyle;

  return (
    <div className={style.container_rightSide}>
      <h1 className={style.container_rightSide_header}>{props.card?.memeber?.name}</h1>
      <p className={style.container_rightSide_paragraph}>{props.card?.memeber?.position}</p>
      <p className={style.container_rightSide_text}>{props.card?.memeber?.biography}</p>
    </div>
  );
};

export default TeamMemberInfo;
