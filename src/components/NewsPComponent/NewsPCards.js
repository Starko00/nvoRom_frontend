import React from "react";
import CardP from "./CardP";
import NewsPStyle from "./NewsP.module.scss";
import { cardData } from "../../hooks/NewsHook/cardsData";
import { smallCardsData } from "../../hooks/NewsHook/smallCardsData";
import SmallPCard from "./SmallPCard";

const NewsP = () => {
  const style = NewsPStyle;
  const cardElements = cardData.map((card) => {
    return <CardP card={card} key={card.id} />;
  });

  const smallCardElements = smallCardsData.map((card) => {
    return <SmallPCard card={card} key={card.id} />;
  });
  return (
    <div className={style.container}>
      <h1>Aktuelnosti</h1>
      <div className={style.container_cards}>
        {cardElements} {smallCardElements}
      </div>
    </div>
  );
};

export default NewsP;
