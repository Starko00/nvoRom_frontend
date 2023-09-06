import React, { useState, useEffect } from "react";
import NewsStyle from "./News.module.scss";
import Card from "./Card";
import SmallCard from "./SmallCard";
import axios from "axios";

const News = () => {
  const [data, setData] = useState("");
  const [firstSix, setFirstSix] = useState([]);
  
  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/news");
    setData(res.data);
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  // Using slice method to get 6 cards from array
  useEffect(() => {
    if (data && data.allArticles) {
      // Sort articles by date in descending order (newest first)
      const sortedArticles = data.allArticles.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      
      // Slice the first six articles
      setFirstSix(sortedArticles.slice(1, 6));
    }
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

