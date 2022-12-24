import React from "react";
import MainStyle from "./TeamMainStyle.module.scss";

const TeamMemberInfo = (props) => {
  const style = MainStyle;
  return (
    <div className={style.container_rightSide}>
      <h1 className={style.container_rightSide_header}>{props.card.name}</h1>
      <p className={style.container_rightSide_paragraph}>{props.card.title}</p>
      <p className={style.container_rightSide_text}>{props.card.description}</p>
    </div>
  );
};

export default TeamMemberInfo;
