import React from "react";
import NewsStyle from "./News.module.scss";
import Card from "./Card";
import SmallCard from "./SmallCard";
import { cardData } from "../../hooks/NewsHook/cardsData";
import { smallCardsData } from "../../hooks/NewsHook/smallCardsData";

const News = () => {
  const style = NewsStyle;
  const cardElements = cardData.map((card) => {
    return <Card card={card} key={card.id} />;
  });

  const smallCardElements = smallCardsData.map((card) => {
    return <SmallCard card={card} key={card.id} />;
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

export default News;
