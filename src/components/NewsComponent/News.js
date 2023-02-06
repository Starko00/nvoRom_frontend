import React, { useState, useEffect } from "react";
import NewsStyle from "./News.module.scss";
import Card from "./Card";
import SmallCard from "./SmallCard";
import axios from "axios";

const News = () => {
  const [data, setData] = useState("");
  const [firstSix, setFirstSix] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://20.229.216.236/phiramenca/api/v1/news");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  //Using slice method to get 6 cards from array
  useEffect(() => {
    setFirstSix(data?.allArticles?.slice(1, 7));
  }, [data]);

  const firstCard = data?.allArticles?.[0];
  const style = NewsStyle;

  const smallCardElements = firstSix?.map((card) => {
    return <SmallCard card={card} key={card._id} />;
  });

  return (
    <div className={style.container}>
      <h1>Aktuelnosti</h1>
      <div className={style.container_cards}>
        <Card card={firstCard} /> {smallCardElements}
      </div>
    </div>
  );
};

export default News;
