import React from "react";
import MainStyle from "./ProjectsMainPage.module.scss";
import SmallCard from "./cardMainSmall";
import BigCard from "./cardMainBig";
import { cardData } from "../../hooks/ProjectsMainPageHook/cardsData";
import { bigCardData } from "../../hooks/ProjectsMainPageHook/bigCardsData";

const PMainPage = () => {
  const style = MainStyle;
  const smallCardElements = cardData.map((card) => {
    return <SmallCard card={card} key={card.id} />;
  });
  const bigCardElements = bigCardData.map((card) => {
    return <BigCard card={card} key={card.id} />;
  });
  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        <h1 className={style.container_leftSide_header}>Projekti:</h1>
        <p className={style.container_leftSide_paragraph}>
          Ukupno 200 projekata
        </p>
        <div className={style.container_smallCard}>{smallCardElements}</div>
      </div>
      <div className={style.container_rightSide}>{bigCardElements}</div>
    </div>
  );
};

export default PMainPage;
