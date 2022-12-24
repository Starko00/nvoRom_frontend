import React from "react";
import MainStyle from "./TeamMainStyle.module.scss";
import { cardData } from "../../hooks/TeamPageHook/cardsData";
import Cards from "./Cards";
import TeamMemberInfo from "./TeamMemberInfo";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMemberData } from "../../hooks/TeamPageHook/TeamMemberData";
import { InfoData } from "../../hooks/TeamPageHook/TeamMemberInfoData";

const TeamMainPage = () => {
  const style = MainStyle;
  //---------------------------------------------------
  const cardElements = cardData.map((card) => {
    return <Cards card={card} key={card.id} />;
  });
  //---------------------------------------------------
  const centerCard = TeamMemberData.map((card) => {
    return <TeamMemberCard card={card} key={card.id} />;
  });
  //---------------------------------------------------
  const rightCard = InfoData.map((card) => {
    return <TeamMemberInfo card={card} key={card.id} />;
  });
  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        <h1 className={style.container_leftSide_header}>Tim:</h1>
        <p className={style.container_leftSide_paragraph}>20 godina iskustva</p>
        {cardElements}
      </div>
      {centerCard}
      {rightCard}
    </div>
  );
};

export default TeamMainPage;
