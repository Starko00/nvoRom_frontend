import React from "react";
import CardP from "./CardP";
import NewsPStyle from "./NewsP.module.scss";
import SmallPCard from "./SmallPCard";

const NewsP = () => {
  const style = NewsPStyle;
  //   const cardElements = cardData.map((card) => {
  //     return <CardP/>;
  //   });

  //   const smallCardElements = smallCardsData.map((card) => {
  //     return <SmallCard card={card} key={card.id} />;
  //   });
  return (
    <div className={style.container}>
      <h1>Aktuelnosti</h1>
      <div className={style.container_cards}>
        <CardP />
        <SmallPCard />
      </div>
    </div>
  );
};

export default NewsP;
